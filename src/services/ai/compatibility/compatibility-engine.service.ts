// src/services/ai/compatibility/compatibility-engine.service.ts
import { UserProfile, MatchScore } from '../../../interfaces/ai.interface';

export class CompatibilityEngineService {
  private readonly compatibilityModel = {
    factors: {
      valuesAlignment: { weight: 0.25 },
      communicationStyle: { weight: 0.20 },
      lifestyleCompatibility: { weight: 0.15 },
      interestsOverlap: { weight: 0.15 },
      relationshipGoals: { weight: 0.10 },
      personalitySynergy: { weight: 0.10 },
      activityPreferences: { weight: 0.05 }
    }
  };

  /**
   * Calcula compatibilidad real entre dos perfiles
   */
  async calculateRealCompatibility(
    userA: UserProfile,
    userB: UserProfile
  ): Promise<MatchScore> {
    console.log(`💞 Calculando compatibilidad: ${userA.userId} ↔ ${userB.userId}`);

    try {
      // Calcular cada factor
      const factorScores = await Promise.all([
        this.calculateValuesAlignment(userA, userB),
        this.analyzeCommunicationCompatibility(userA, userB),
        this.assessLifestyleCompatibility(userA, userB),
        this.calculateInterestsOverlap(userA, userB),
        this.compareRelationshipGoals(userA, userB),
        this.analyzePersonalitySynergy(userA, userB),
        this.matchActivityPreferences(userA, userB)
      ]);

      // Score ponderado
      let totalScore = 0;
      const factorDetails: Record<string, number> = {};

      factorScores.forEach((score, index) => {
        const factorName = Object.keys(this.compatibilityModel.factors)[index];
        const weight = this.compatibilityModel.factors[factorName as keyof typeof this.compatibilityModel.factors].weight;
        totalScore += score * weight;
        factorDetails[factorName] = Math.round(score * 100);
      });

      const finalScore = Math.round(totalScore * 100);
      const matchLevel = this.determineMatchLevel(finalScore);

      const matchScore: MatchScore = {
        score: finalScore,
        matchLevel,
        factors: factorDetails,
        insights: this.generateCompatibilityInsights(factorDetails, finalScore),
        dateSuggestions: this.generateDateSuggestions(userA, userB, factorDetails),
        strengths: this.identifyStrengths(factorDetails),
        considerations: this.identifyConsiderations(factorDetails),
        calculatedAt: new Date()
      };

      console.log(`✅ Compatibilidad calculada: ${finalScore}% - ${matchLevel}`);
      return matchScore;

    } catch (error) {
      console.error('❌ Error calculando compatibilidad:', error);
      throw error;
    }
  }

  /**
   * Calcula alineación de valores
   */
  private async calculateValuesAlignment(userA: UserProfile, userB: UserProfile): Promise<number> {
    let score = 0.5; // Base score

    // Comparar metas de relación si existen
    if (userA.relationshipGoals && userB.relationshipGoals) {
      const commonGoals = userA.relationshipGoals.filter(goal =>
        userB.relationshipGoals?.includes(goal)
      );
      score += (commonGoals.length / Math.max(userA.relationshipGoals.length, userB.relationshipGoals.length)) * 0.3;
    }

    // Ajustar por edad similar (±5 años = mejor compatibilidad)
    const ageDiff = Math.abs(userA.age - userB.age);
    if (ageDiff <= 5) score += 0.2;
    else if (ageDiff <= 10) score += 0.1;

    return Math.min(score, 1);
  }

  /**
   * Analiza compatibilidad de comunicación
   */
  private async analyzeCommunicationCompatibility(userA: UserProfile, userB: UserProfile): Promise<number> {
    let score = 0.6; // Base score

    // Analizar respuesta rate si existe
    if (userA.responseRate && userB.responseRate) {
      const rateA = userA.responseRate;
      const rateB = userB.responseRate;
      const rateDiff = Math.abs(rateA - rateB);
      
      if (rateDiff < 0.2) score += 0.3;
      else if (rateDiff < 0.4) score += 0.15;
    }

    return Math.min(score, 1);
  }

  /**
   * Evalúa compatibilidad de estilo de vida
   */
  private async assessLifestyleCompatibility(userA: UserProfile, userB: UserProfile): Promise<number> {
    let score = 0.5;

    // Comparar preferencias de estilo de vida
    if (userA.lifestylePreferences && userB.lifestylePreferences) {
      const prefA = userA.lifestylePreferences;
      const prefB = userB.lifestylePreferences;

      if (prefA.scheduleType === prefB.scheduleType) score += 0.15;
      if (prefA.socialActivityLevel === prefB.socialActivityLevel) score += 0.20;
      
      if (prefA.travelPreferences && prefB.travelPreferences) {
        const commonTravel = prefA.travelPreferences.filter(pref =>
          prefB.travelPreferences?.includes(pref)
        );
        if (commonTravel.length > 0) score += 0.15;
      }
    }

    return Math.min(score, 1);
  }

  /**
   * Calcula superposición de intereses
   */
  private async calculateInterestsOverlap(userA: UserProfile, userB: UserProfile): Promise<number> {
    const interestsA = userA.interests || [];
    const interestsB = userB.interests || [];

    if (interestsA.length === 0 || interestsB.length === 0) {
      return 0.3;
    }

    // Encontrar intereses comunes
    const commonInterests = interestsA.filter(interest =>
      interestsB.some(b => b.toLowerCase() === interest.toLowerCase())
    );

    // Calcular score basado en overlap
    const overlapRatio = commonInterests.length / Math.max(interestsA.length, interestsB.length);
    
    return Math.min(overlapRatio * 1.5, 1); // Bonus por overlap
  }

  /**
   * Compara metas de relación
   */
  private async compareRelationshipGoals(userA: UserProfile, userB: UserProfile): Promise<number> {
    if (!userA.relationshipGoals || !userB.relationshipGoals) {
      return 0.5;
    }

    const commonGoals = userA.relationshipGoals.filter(goal =>
      userB.relationshipGoals?.includes(goal)
    );

    return commonGoals.length > 0 ? 0.8 : 0.4;
  }

  /**
   * Analiza sinergia de personalidad
   */
  private async analyzePersonalitySynergy(userA: UserProfile, userB: UserProfile): Promise<number> {
    const traitsA = userA.personalityTraits || [];
    const traitsB = userB.personalityTraits || [];

    if (traitsA.length === 0 || traitsB.length === 0) {
      return 0.5;
    }

    // Buscar rasgos complementarios
    const complementaryPairs = [
      ['Aventurero', 'Explorador'],
      ['Tranquilo', 'Mindful'],
      ['Social', 'Extrovertido'],
      ['Cultural', 'Intelectual']
    ];

    let synergyScore = 0.3;

    complementaryPairs.forEach(pair => {
      if ((traitsA.includes(pair[0]) && traitsB.includes(pair[1])) ||
          (traitsA.includes(pair[1]) && traitsB.includes(pair[0]))) {
        synergyScore += 0.2;
      }
    });

    return Math.min(synergyScore, 1);
  }

  /**
   * Calcula preferencias de actividades
   */
  private async matchActivityPreferences(userA: UserProfile, userB: UserProfile): Promise<number> {
    // Análisis básico basado en intereses
    return await this.calculateInterestsOverlap(userA, userB);
  }

  /**
   * Determina nivel de match
   */
  private determineMatchLevel(score: number): 'EXCELLENT' | 'GOOD' | 'AVERAGE' | 'LOW' {
    if (score >= 85) return 'EXCELLENT';
    if (score >= 70) return 'GOOD';
    if (score >= 50) return 'AVERAGE';
    return 'LOW';
  }

  /**
   * Genera insights personalizados
   */
  private generateCompatibilityInsights(factors: Record<string, number>, totalScore: number): string[] {
    const insights: string[] = [];

    // Insights basados en score total
    if (totalScore >= 85) {
      insights.push('🌟 Compatibilidad excepcional - muchos valores e intereses compartidos');
    } else if (totalScore >= 70) {
      insights.push('✅ Buena compatibilidad con áreas complementarias');
    } else if (totalScore >= 50) {
      insights.push('🤔 Compatibilidad moderada - podrían complementarse');
    } else {
      insights.push('💭 Perfiles diferentes que podrían aprender el uno del otro');
    }

    // Insights específicos por factor alto
    if (factors.interestsOverlap >= 75) {
      insights.push('🎨 Comparten muchos intereses - excelente base para conversación');
    }

    if (factors.valuesAlignment >= 80) {
      insights.push('💫 Valores muy alineados - buena base para conexión profunda');
    }

    if (factors.lifestyleCompatibility >= 75) {
      insights.push('🌈 Estilos de vida compatibles - facilita planear actividades juntos');
    }

    return insights.slice(0, 4);
  }

  /**
   * Genera sugerencias de citas
   */
  private generateDateSuggestions(
    userA: UserProfile,
    userB: UserProfile,
    factors: Record<string, number>
  ): string[] {
    const suggestions: string[] = [];

    // Basado en intereses comunes
    const commonInterests = userA.interests.filter(interest =>
      userB.interests.some(b => b.toLowerCase() === interest.toLowerCase())
    );

    if (commonInterests.length > 0) {
      const interest = commonInterests[0].toLowerCase();
      
      if (interest.includes('café') || interest.includes('comida')) {
        suggestions.push('☕ Café en un lugar acogedor');
      }
      if (interest.includes('deporte') || interest.includes('activ')) {
        suggestions.push('🚴 Actividad deportiva juntos');
      }
      if (interest.includes('arte') || interest.includes('cultura')) {
        suggestions.push('🎨 Visita a museo o galería');
      }
      if (interest.includes('naturaleza') || interest.includes('aire libre')) {
        suggestions.push('🌳 Paseo por parque o jardín');
      }
    }

    // Sugerencias generales
    if (factors.communicationStyle >= 70) {
      suggestions.push('💬 Conversación tranquila en ambiente relajado');
    }

    if (suggestions.length === 0) {
      suggestions.push('☕ Café casual para conocerse mejor');
      suggestions.push('🌆 Paseo por el centro de la ciudad');
    }

    return [...new Set(suggestions)].slice(0, 5);
  }

  /**
   * Identifica fortalezas
   */
  private identifyStrengths(factors: Record<string, number>): string[] {
    return Object.entries(factors)
      .filter(([_, score]) => score >= 75)
      .map(([factor]) => this.translateFactor(factor))
      .slice(0, 3);
  }

  /**
   * Identifica consideraciones
   */
  private identifyConsiderations(factors: Record<string, number>): string[] {
    return Object.entries(factors)
      .filter(([_, score]) => score < 50)
      .map(([factor]) => `Explorar ${this.translateFactor(factor).toLowerCase()}`)
      .slice(0, 2);
  }

  /**
   * Traduce nombres de factores
   */
  private translateFactor(factor: string): string {
    const translations: Record<string, string> = {
      valuesAlignment: 'Alineación de valores',
      communicationStyle: 'Estilo de comunicación',
      lifestyleCompatibility: 'Compatibilidad de estilo de vida',
      interestsOverlap: 'Intereses compartidos',
      relationshipGoals: 'Metas de relación',
      personalitySynergy: 'Sinergia de personalidad',
      activityPreferences: 'Preferencias de actividades'
    };
    return translations[factor] || factor;
  }
}

export default CompatibilityEngineService;

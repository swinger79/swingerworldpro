// src/services/ai/profile-optimizer/profile-optimizer.service.ts
import axios from 'axios';
import { UserProfile, PhotoAnalysis } from '../../../interfaces/ai.interface';

export class ProfileOptimizerService {
  private readonly OPENAI_API_KEY: string;

  constructor() {
    this.OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
  }

  /**
   * Optimiza un perfil real manteniendo autenticidad
   */
  async optimizeRealProfile(profileData: UserProfile): Promise<any> {
    console.log(`🔄 Optimizando perfil para: ${profileData.userId}`);

    try {
      const [
        authenticityAnalysis,
        bioSuggestions,
        personalityTraits,
        icebreakers
      ] = await Promise.all([
        this.analyzeProfileAuthenticity(profileData),
        this.generateBioSuggestions(profileData),
        this.extractKeyPersonalityTraits(profileData),
        this.identifyConversationStarters(profileData)
      ]);

      const optimizedProfile = {
        ...profileData,
        authenticityScore: authenticityAnalysis.score,
        flags: authenticityAnalysis.flags,
        bioSuggestions: bioSuggestions.suggestions,
        originalityScore: bioSuggestions.originalityScore,
        personalityTraits: personalityTraits,
        icebreakers: icebreakers,
        optimizedAt: new Date(),
        trustScore: await this.calculateTrustScore(profileData)
      };

      console.log(`✅ Perfil optimizado con score: ${optimizedProfile.authenticityScore}`);
      return optimizedProfile;

    } catch (error) {
      console.error('❌ Error optimizando perfil:', error);
      throw error;
    }
  }

  /**
   * Analiza autenticidad del perfil
   */
  private async analyzeProfileAuthenticity(profileData: UserProfile): Promise<{ score: number; flags: string[] }> {
    const flags: string[] = [];
    let score = 100;

    // Verificar completitud del perfil
    if (!profileData.bio || profileData.bio.length < 50) {
      flags.push('Biografía muy corta - añade más detalles');
      score -= 15;
    }

    if (profileData.interests.length < 3) {
      flags.push('Pocos intereses - añade más para mejores matches');
      score -= 10;
    }

    if (profileData.photos.length < 2) {
      flags.push('Sube más fotos para aumentar confianza');
      score -= 20;
    }

    // Verificar consistencia
    if (profileData.bio && profileData.interests.length > 0) {
      const bioLower = profileData.bio.toLowerCase();
      const matchingInterests = profileData.interests.filter(interest =>
        bioLower.includes(interest.toLowerCase())
      );

      if (matchingInterests.length === 0) {
        flags.push('Bio e intereses no parecen relacionados');
        score -= 10;
      }
    }

    return { score: Math.max(0, score), flags };
  }

  /**
   * Genera sugerencias de bio usando IA
   */
  private async generateBioSuggestions(profileData: UserProfile): Promise<{ suggestions: string[]; originalityScore: number }> {
    if (!this.OPENAI_API_KEY) {
      return {
        suggestions: [
          'Configura OPENAI_API_KEY para sugerencias personalizadas',
          'Habla sobre tus pasiones y lo que te hace único',
          'Menciona qué buscas en una conexión'
        ],
        originalityScore: 0.5
      };
    }

    try {
      const prompt = `Como experto en perfiles auténticos de citas, mejora esta biografía:

Bio actual: "${profileData.bio || 'Sin biografía'}"
Intereses: ${profileData.interests.join(', ')}
Edad: ${profileData.age}

Genera 3 versiones mejoradas que:
1. Mantengan autenticidad y voz única
2. Destaquen características interesantes
3. Inviten a conversación
4. Sean concisas (máximo 150 palabras)

Responde SOLO con JSON: {"suggestions": ["v1", "v2", "v3"], "originalityScore": 0.85}`;

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const result = JSON.parse(response.data.choices[0].message.content);
      return result;

    } catch (error) {
      console.warn('⚠️  Error generando sugerencias con OpenAI:', error);
      return {
        suggestions: [
          'Sé auténtico y específico sobre tus pasiones',
          'Menciona qué te hace único',
          'Describe el tipo de conexión que buscas'
        ],
        originalityScore: 0.6
      };
    }
  }

  /**
   * Extrae rasgos de personalidad clave
   */
  private async extractKeyPersonalityTraits(profileData: UserProfile): Promise<string[]> {
    const traits: string[] = [];

    // Análisis básico de bio
    if (profileData.bio) {
      const bioLower = profileData.bio.toLowerCase();

      if (bioLower.match(/aventur|viajar|explor/)) traits.push('Aventurero');
      if (bioLower.match(/tranquil|calm|relax/)) traits.push('Tranquilo');
      if (bioLower.match(/social|fiest|amig/)) traits.push('Social');
      if (bioLower.match(/lectura|libros|cine/)) traits.push('Cultural');
      if (bioLower.match(/deporte|gym|activ/)) traits.push('Activo');
      if (bioLower.match(/cocin|comida|gastronom/)) traits.push('Gourmet');
      if (bioLower.match(/arte|música|creativ/)) traits.push('Artístico');
    }

    // Análisis de intereses
    const interestTraitMap: Record<string, string> = {
      'senderismo': 'Aventurero',
      'yoga': 'Mindful',
      'lectura': 'Intelectual',
      'música': 'Creativo',
      'cocina': 'Gourmet',
      'deportes': 'Activo',
      'viajes': 'Explorador',
      'fotografía': 'Artístico',
      'tecnología': 'Innovador'
    };

    profileData.interests.forEach(interest => {
      const interestLower = interest.toLowerCase();
      Object.entries(interestTraitMap).forEach(([key, trait]) => {
        if (interestLower.includes(key) && !traits.includes(trait)) {
          traits.push(trait);
        }
      });
    });

    return [...new Set(traits)].slice(0, 5);
  }

  /**
   * Identifica puntos de conversación naturales
   */
  private async identifyConversationStarters(profileData: UserProfile): Promise<string[]> {
    const starters: string[] = [];

    // Basado en intereses
    if (profileData.interests.length > 0) {
      const topInterests = profileData.interests.slice(0, 3);
      topInterests.forEach(interest => {
        starters.push(`¿Qué te atrajo de ${interest}?`);
      });
    }

    // Basado en bio
    if (profileData.bio) {
      if (profileData.bio.toLowerCase().includes('viajar')) {
        starters.push('¿Cuál ha sido tu viaje más memorable?');
      }
      if (profileData.bio.toLowerCase().includes('cocina')) {
        starters.push('¿Cuál es tu plato favorito para cocinar?');
      }
      if (profileData.bio.toLowerCase().includes('música')) {
        starters.push('¿Qué música estás escuchando últimamente?');
      }
    }

    return starters.slice(0, 5);
  }

  /**
   * Calcula trust score básico
   */
  private async calculateTrustScore(profileData: UserProfile): Promise<number> {
    let score = 0;

    // Completitud del perfil (40%)
    if (profileData.bio && profileData.bio.length >= 50) score += 10;
    if (profileData.bio && profileData.bio.length >= 100) score += 10;
    if (profileData.interests.length >= 3) score += 10;
    if (profileData.photos.length >= 2) score += 10;

    // Verificaciones (30%)
    if (profileData.photosVerified) score += 30;

    // Actividad (20%)
    if (profileData.responseRate && profileData.responseRate > 0.7) score += 20;

    // Reputación (10%)
    if (profileData.endorsements && profileData.endorsements.length > 0) {
      score += Math.min(profileData.endorsements.length * 2, 10);
    }

    return Math.min(score, 100);
  }
}

export default ProfileOptimizerService;

// src/services/ai/trust-score/trust-score.service.ts
import { TrustMetrics, VerificationStatus } from '../../../interfaces/ai.interface';

export class TrustScoreService {
  private readonly TRUST_WEIGHTS = {
    identityVerification: 0.25,
    profileCompleteness: 0.20,
    communityReputation: 0.15,
    behaviorPatterns: 0.15,
    engagementQuality: 0.10,
    accountHistory: 0.10,
    socialConnections: 0.05
  };

  /**
   * Calcula score de confianza completo
   */
  async calculateTrustScore(userId: string, userData?: any): Promise<TrustMetrics> {
    console.log(`🛡️  Calculando trust score para: ${userId}`);

    try {
      const metrics = await Promise.all([
        this.calculateIdentityVerification(userId, userData),
        this.assessProfileCompleteness(userId, userData),
        this.evaluateCommunityReputation(userId, userData),
        this.analyzeBehaviorPatterns(userId, userData),
        this.measureEngagementQuality(userId, userData),
        this.reviewAccountHistory(userId, userData),
        this.checkSocialConnections(userId, userData)
      ]);

      let totalScore = 0;
      const metricDetails: Record<string, number> = {};

      Object.keys(this.TRUST_WEIGHTS).forEach((metric, index) => {
        const weight = this.TRUST_WEIGHTS[metric as keyof typeof this.TRUST_WEIGHTS];
        const score = metrics[index];
        totalScore += score * weight;
        metricDetails[metric] = Math.round(score * 100);
      });

      const finalScore = Math.round(totalScore * 100);
      const verificationLevel = this.determineVerificationLevel(finalScore);

      const trustMetrics: TrustMetrics = {
        userId,
        trustScore: finalScore,
        verificationLevel,
        metrics: metricDetails,
        lastUpdated: new Date(),
        recommendations: this.generateTrustRecommendations(metricDetails),
        badges: this.awardTrustBadges(metricDetails),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 días
      };

      console.log(`✅ Trust score calculado: ${finalScore} - ${verificationLevel}`);
      return trustMetrics;

    } catch (error) {
      console.error('❌ Error calculando trust score:', error);
      throw error;
    }
  }

  /**
   * Verificación de identidad
   */
  private async calculateIdentityVerification(userId: string, userData?: any): Promise<number> {
    let score = 0;

    const verificationMethods = userData?.verificationStatus || {};

    const methodScores: Record<string, number> = {
      email_verified: 0.15,
      phone_verified: 0.20,
      photo_verified: 0.25,
      document_verified: 0.30,
      social_connected: 0.10
    };

    Object.entries(verificationMethods).forEach(([method, verified]) => {
      if (verified && methodScores[method]) {
        score += methodScores[method];
      }
    });

    return Math.min(score, 1);
  }

  /**
   * Completitud del perfil
   */
  private async assessProfileCompleteness(userId: string, userData?: any): Promise<number> {
    let score = 0;

    if (userData?.bio && userData.bio.length >= 50) score += 0.20;
    if (userData?.bio && userData.bio.length >= 100) score += 0.10;
    if (userData?.interests && userData.interests.length >= 3) score += 0.20;
    if (userData?.photos && userData.photos.length >= 2) score += 0.20;
    if (userData?.photos && userData.photos.length >= 4) score += 0.10;
    if (userData?.personalityTraits && userData.personalityTraits.length > 0) score += 0.10;
    if (userData?.relationshipGoals && userData.relationshipGoals.length > 0) score += 0.10;

    return Math.min(score, 1);
  }

  /**
   * Reputación en la comunidad
   */
  private async evaluateCommunityReputation(userId: string, userData?: any): Promise<number> {
    let score = 0.5; // Base score

    const positiveReviews = userData?.positiveReviews || 0;
    const totalReviews = userData?.totalReviews || 0;
    const reports = userData?.reports || 0;
    const responseRate = userData?.responseRate || 0;

    // Reseñas positivas
    if (totalReviews > 0) {
      const positiveRatio = positiveReviews / totalReviews;
      score += positiveRatio * 0.3;
    }

    // Tasa de respuesta
    score += responseRate * 0.15;

    // Penalización por reportes
    score -= Math.min(reports * 0.1, 0.4);

    return Math.max(0, Math.min(score, 1));
  }

  /**
   * Patrones de comportamiento
   */
  private async analyzeBehaviorPatterns(userId: string, userData?: any): Promise<number> {
    let score = 0.6; // Base score

    // Consistencia de actividad
    const lastActive = userData?.lastActive ? new Date(userData.lastActive) : null;
    if (lastActive) {
      const daysSinceActive = Math.floor((Date.now() - lastActive.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysSinceActive <= 1) score += 0.2;
      else if (daysSinceActive <= 7) score += 0.1;
      else if (daysSinceActive > 30) score -= 0.2;
    }

    // Autenticidad de interacciones
    const messageQuality = userData?.messageQuality || 0.5;
    score += messageQuality * 0.2;

    return Math.max(0, Math.min(score, 1));
  }

  /**
   * Calidad de engagement
   */
  private async measureEngagementQuality(userId: string, userData?: any): Promise<number> {
    let score = 0.5;

    const matchesCount = userData?.matchesCount || 0;
    const messagesCount = userData?.messagesCount || 0;
    const responseRate = userData?.responseRate || 0;

    // Matches activos
    if (matchesCount > 0) score += Math.min(matchesCount * 0.05, 0.2);

    // Mensajes enviados
    if (messagesCount > 10) score += 0.15;
    else if (messagesCount > 5) score += 0.10;

    // Response rate
    score += responseRate * 0.15;

    return Math.max(0, Math.min(score, 1));
  }

  /**
   * Historia de la cuenta
   */
  private async reviewAccountHistory(userId: string, userData?: any): Promise<number> {
    let score = 0.3; // Base score

    const createdAt = userData?.createdAt ? new Date(userData.createdAt) : new Date();
    const accountAgeDays = Math.floor((Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

    // Score basado en antigüedad
    if (accountAgeDays >= 365) score += 0.4;
    else if (accountAgeDays >= 180) score += 0.3;
    else if (accountAgeDays >= 90) score += 0.2;
    else if (accountAgeDays >= 30) score += 0.1;
    else if (accountAgeDays < 7) score -= 0.1; // Cuenta muy nueva

    // Sin infracciones
    const violations = userData?.violations || 0;
    score -= violations * 0.15;

    return Math.max(0, Math.min(score, 1));
  }

  /**
   * Conexiones sociales
   */
  private async checkSocialConnections(userId: string, userData?: any): Promise<number> {
    let score = 0.3;

    const friendsCount = userData?.friendsCount || 0;
    const mutualConnections = userData?.mutualConnections || 0;

    if (friendsCount > 10) score += 0.3;
    else if (friendsCount > 5) score += 0.2;
    else if (friendsCount > 0) score += 0.1;

    if (mutualConnections > 5) score += 0.2;
    else if (mutualConnections > 0) score += 0.1;

    return Math.max(0, Math.min(score, 1));
  }

  /**
   * Determina nivel de verificación
   */
  private determineVerificationLevel(score: number): 'BASIC' | 'VERIFIED' | 'ELITE' {
    if (score >= 80) return 'ELITE';
    if (score >= 60) return 'VERIFIED';
    return 'BASIC';
  }

  /**
   * Genera recomendaciones
   */
  private generateTrustRecommendations(metrics: Record<string, number>): string[] {
    const recommendations: string[] = [];

    if (metrics.identityVerification < 50) {
      recommendations.push('🔐 Verifica tu identidad para aumentar la confianza');
    }

    if (metrics.profileCompleteness < 70) {
      recommendations.push('📝 Completa tu perfil con más detalles');
    }

    if (metrics.communityReputation < 60) {
      recommendations.push('🤝 Participa más activamente en la comunidad');
    }

    if (metrics.behaviorPatterns < 50) {
      recommendations.push('💬 Mejora la consistencia de tus interacciones');
    }

    if (metrics.engagementQuality < 60) {
      recommendations.push('⭐ Enfócate en conversaciones de calidad');
    }

    return recommendations.slice(0, 3);
  }

  /**
   * Otorga badges
   */
  private awardTrustBadges(metrics: Record<string, number>): string[] {
    const badges: string[] = [];

    if (metrics.identityVerification >= 90) badges.push('verified_identity');
    if (metrics.profileCompleteness >= 85) badges.push('complete_profile');
    if (metrics.communityReputation >= 80) badges.push('community_trusted');
    if (metrics.behaviorPatterns >= 75) badges.push('consistent_behavior');
    if (metrics.engagementQuality >= 70) badges.push('quality_engager');

    if (Object.values(metrics).every(score => score >= 80)) {
      badges.push('elite_trust');
    }

    return badges;
  }
}

export default TrustScoreService;

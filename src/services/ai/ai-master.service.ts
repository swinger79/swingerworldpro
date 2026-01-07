// src/services/ai/ai-master.service.ts
import ProfileOptimizerService from './profile-optimizer/profile-optimizer.service';
import PhotoAnalyzerService from './photo-analyzer/photo-analyzer.service';
import CompatibilityEngineService from './compatibility/compatibility-engine.service';
import TrustScoreService from './trust-score/trust-score.service';
import IcebreakerGeneratorService from './icebreaker/icebreaker-generator.service';
import { UserProfile, MatchScore, TrustMetrics, PhotoAnalysis, IcebreakerSuggestion } from '../../interfaces/ai.interface';

/**
 * Servicio maestro de IA que orquesta todos los servicios
 */
export class AIMasterService {
  private profileOptimizer: ProfileOptimizerService;
  private photoAnalyzer: PhotoAnalyzerService;
  private compatibilityEngine: CompatibilityEngineService;
  private trustScoreService: TrustScoreService;
  private icebreakerGenerator: IcebreakerGeneratorService;

  constructor() {
    this.profileOptimizer = new ProfileOptimizerService();
    this.photoAnalyzer = new PhotoAnalyzerService();
    this.compatibilityEngine = new CompatibilityEngineService();
    this.trustScoreService = new TrustScoreService();
    this.icebreakerGenerator = new IcebreakerGeneratorService();

    console.log('🤖 AIMasterService inicializado con todos los módulos');
  }

  /**
   * Optimiza un perfil completo
   */
  async optimizeProfile(profileData: UserProfile): Promise<any> {
    console.log(`🔄 Optimizando perfil completo para: ${profileData.userId}`);
    return await this.profileOptimizer.optimizeRealProfile(profileData);
  }

  /**
   * Analiza una foto
   */
  async analyzePhoto(
    photoUrl: string,
    context: { isProfilePhoto: boolean; userId: string }
  ): Promise<PhotoAnalysis> {
    console.log(`📸 Analizando foto para: ${context.userId}`);
    return await this.photoAnalyzer.analyzeRealPhoto(photoUrl, context);
  }

  /**
   * Calcula compatibilidad entre usuarios
   */
  async calculateCompatibility(
    userA: UserProfile,
    userB: UserProfile
  ): Promise<MatchScore> {
    console.log(`💞 Calculando compatibilidad entre usuarios`);
    return await this.compatibilityEngine.calculateRealCompatibility(userA, userB);
  }

  /**
   * Calcula trust score
   */
  async getTrustScore(userId: string, userData?: any): Promise<TrustMetrics> {
    console.log(`🛡️  Calculando trust score para: ${userId}`);
    return await this.trustScoreService.calculateTrustScore(userId, userData);
  }

  /**
   * Genera icebreakers
   */
  async generateIcebreakers(
    userA: UserProfile,
    userB: UserProfile
  ): Promise<IcebreakerSuggestion[]> {
    console.log(`💬 Generando icebreakers`);
    return await this.icebreakerGenerator.generateIcebreakers(userA, userB);
  }

  /**
   * Análisis completo de match (todo junto)
   */
  async analyzeCompleteMatch(
    userA: UserProfile,
    userB: UserProfile
  ): Promise<{
    compatibility: MatchScore;
    icebreakers: IcebreakerSuggestion[];
    trustScoreA: TrustMetrics;
    trustScoreB: TrustMetrics;
  }> {
    console.log(`🚀 Análisis completo de match iniciado`);

    const [compatibility, icebreakers, trustScoreA, trustScoreB] = await Promise.all([
      this.calculateCompatibility(userA, userB),
      this.generateIcebreakers(userA, userB),
      this.getTrustScore(userA.userId, userA),
      this.getTrustScore(userB.userId, userB)
    ]);

    console.log(`✅ Análisis completo finalizado`);

    return {
      compatibility,
      icebreakers,
      trustScoreA,
      trustScoreB
    };
  }

  /**
   * Health check del servicio
   */
  healthCheck(): { status: string; services: Record<string, boolean> } {
    return {
      status: 'healthy',
      services: {
        profileOptimizer: !!this.profileOptimizer,
        photoAnalyzer: !!this.photoAnalyzer,
        compatibilityEngine: !!this.compatibilityEngine,
        trustScoreService: !!this.trustScoreService,
        icebreakerGenerator: !!this.icebreakerGenerator
      }
    };
  }
}

export default AIMasterService;

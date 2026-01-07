// src/services/ai/photo-analyzer/photo-analyzer.service.ts
import axios from 'axios';
import sharp from 'sharp';
import crypto from 'crypto';
import { PhotoAnalysis, PhotoQualityScore } from '../../../interfaces/ai.interface';

export class PhotoAnalyzerService {
  /**
   * Analiza una foto real y proporciona retroalimentación
   */
  async analyzeRealPhoto(
    photoUrl: string,
    context: { isProfilePhoto: boolean; userId: string }
  ): Promise<PhotoAnalysis> {
    console.log(`📸 Analizando foto para usuario: ${context.userId}`);

    try {
      const [
        qualityAssessment,
        authenticityCheck,
        privacyCheck
      ] = await Promise.all([
        this.assessPhotoQuality(photoUrl),
        this.checkPhotoAuthenticity(photoUrl),
        this.checkPrivacyConcerns(photoUrl)
      ]);

      const feedback = this.generatePhotoFeedback(
        qualityAssessment,
        authenticityCheck,
        context.isProfilePhoto
      );

      const analysis: PhotoAnalysis = {
        photoHash: await this.generatePhotoHash(photoUrl),
        qualityScore: qualityAssessment.score,
        authenticityScore: authenticityCheck.score,
        attributes: qualityAssessment.factors,
        feedback: feedback.feedback,
        recommendations: feedback.recommendations,
        analyzedAt: new Date(),
        isProfilePhoto: context.isProfilePhoto,
        privacyFlags: privacyCheck
      };

      console.log(`✅ Foto analizada - Calidad: ${analysis.qualityScore}, Autenticidad: ${analysis.authenticityScore}`);
      return analysis;

    } catch (error) {
      console.error('❌ Error analizando foto:', error);
      throw error;
    }
  }

  /**
   * Evalúa calidad técnica de la foto
   */
  private async assessPhotoQuality(photoUrl: string): Promise<PhotoQualityScore> {
    try {
      // Descargar imagen
      const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data);

      // Analizar metadatos
      const metadata = await sharp(imageBuffer).metadata();
      const stats = await sharp(imageBuffer).stats();

      // Calcular scores
      const resolution = this.calculateResolutionScore(metadata.width || 0, metadata.height || 0);
      const brightness = this.analyzeBrightnessFromStats(stats);
      const focus = 0.75; // Placeholder - requeriría análisis más complejo
      const composition = 0.70; // Placeholder
      const noise = 0.80; // Placeholder

      const factors = { resolution, brightness, focus, composition, noise };
      const averageScore = Object.values(factors).reduce((a, b) => a + b, 0) / Object.keys(factors).length;

      const issues = this.identifyQualityIssues(factors);

      return {
        score: Math.round(averageScore * 100),
        factors,
        issues
      };

    } catch (error) {
      console.warn('⚠️  Error evaluando calidad de foto:', error);
      return {
        score: 50,
        factors: {},
        issues: ['No se pudo analizar la foto completamente']
      };
    }
  }

  /**
   * Verifica autenticidad de la foto
   */
  private async checkPhotoAuthenticity(photoUrl: string): Promise<{ score: number; flags: string[] }> {
    const flags: string[] = [];
    let score = 100;

    try {
      const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data);
      const metadata = await sharp(imageBuffer).metadata();

      // Verificaciones básicas
      if (!metadata.width || metadata.width < 400) {
        flags.push('Resolución muy baja');
        score -= 20;
      }

      if (metadata.format === 'webp') {
        flags.push('Formato moderno detectado - buena señal');
      }

      // Placeholder para detecciones más avanzadas
      // En producción, usarías APIs como Clarifai o Google Vision

    } catch (error) {
      flags.push('Verificación de autenticidad limitada');
      score -= 10;
    }

    return { score: Math.max(0, score), flags };
  }

  /**
   * Verifica preocupaciones de privacidad
   */
  private async checkPrivacyConcerns(photoUrl: string): Promise<string[]> {
    const concerns: string[] = [];

    // Placeholder - en producción usarías Google Vision API para detectar:
    // - Texto con información personal
    // - Documentos
    // - Placas de vehículos
    // - Ubicaciones identificables

    return concerns;
  }

  /**
   * Genera feedback constructivo
   */
  private generatePhotoFeedback(
    quality: PhotoQualityScore,
    authenticity: { score: number; flags: string[] },
    isProfilePhoto: boolean
  ): { feedback: string[]; recommendations: string[] } {
    const feedback: string[] = [];
    const recommendations: string[] = [];

    // Feedback de calidad
    if (quality.score >= 80) {
      feedback.push('✨ ¡Excelente calidad de foto!');
    } else if (quality.score >= 60) {
      feedback.push('👍 Buena calidad, con margen de mejora');
    } else {
      feedback.push('📸 La foto podría mejorar en calidad');
    }

    // Recomendaciones específicas
    if (quality.factors.brightness && quality.factors.brightness < 0.6) {
      recommendations.push('💡 Toma la foto con mejor iluminación natural');
    }

    if (quality.factors.resolution && quality.factors.resolution < 0.7) {
      recommendations.push('📱 Usa una cámara de mayor resolución');
    }

    if (isProfilePhoto) {
      recommendations.push('😊 Para foto principal: sonríe y mira a la cámara');
      recommendations.push('🌈 Usa fondos simples que no distraigan');
    }

    if (authenticity.score < 70) {
      recommendations.push('✅ Asegúrate de que sea una foto reciente y genuina');
    }

    return { feedback, recommendations };
  }

  /**
   * Calcula score de resolución
   */
  private calculateResolutionScore(width: number, height: number): number {
    const pixels = width * height;
    
    if (pixels >= 1920 * 1080) return 1.0;
    if (pixels >= 1280 * 720) return 0.85;
    if (pixels >= 800 * 600) return 0.65;
    if (pixels >= 640 * 480) return 0.50;
    return 0.30;
  }

  /**
   * Analiza brillo desde estadísticas
   */
  private analyzeBrightnessFromStats(stats: any): number {
    // Analizar canales RGB para determinar si la foto está bien iluminada
    const avgBrightness = stats.channels.reduce((sum: number, ch: any) => sum + ch.mean, 0) / stats.channels.length;
    
    // Normalizar a 0-1 (asumiendo valores 0-255)
    const normalized = avgBrightness / 255;
    
    // Penalizar extremos (muy oscuro o muy brillante)
    if (normalized < 0.3 || normalized > 0.8) {
      return 0.5;
    }
    
    return 0.85;
  }

  /**
   * Identifica problemas de calidad
   */
  private identifyQualityIssues(factors: Record<string, number>): string[] {
    const issues: string[] = [];

    if (factors.resolution && factors.resolution < 0.6) {
      issues.push('Resolución baja');
    }

    if (factors.brightness && factors.brightness < 0.6) {
      issues.push('Iluminación deficiente');
    }

    if (factors.focus && factors.focus < 0.6) {
      issues.push('Foto desenfocada');
    }

    if (factors.noise && factors.noise < 0.6) {
      issues.push('Mucho ruido/grano');
    }

    return issues;
  }

  /**
   * Genera hash único de la foto
   */
  private async generatePhotoHash(photoUrl: string): Promise<string> {
    try {
      const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data);
      
      // Hash SHA256
      const hash = crypto.createHash('sha256').update(imageBuffer).digest('hex');
      return hash;

    } catch (error) {
      // Fallback: hash de la URL
      return crypto.createHash('sha256').update(photoUrl).digest('hex');
    }
  }
}

export default PhotoAnalyzerService;

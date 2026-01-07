// src/config/ai/ai.config.ts

export const AI_CONFIG = {
  // OpenAI Configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: 'gpt-4',
    fallbackModel: 'gpt-3.5-turbo',
    maxTokens: 500,
    temperature: 0.7
  },

  // Feature Flags
  features: {
    profileOptimization: true,
    photoAnalysis: true,
    compatibilityMatching: true,
    trustScoring: true,
    icebreakerGeneration: true,
    aiAvatarGeneration: false // DESACTIVADO - usando perfiles reales
  },

  // Trust Score Configuration
  trustScore: {
    weights: {
      identityVerification: 0.25,
      profileCompleteness: 0.20,
      communityReputation: 0.15,
      behaviorPatterns: 0.15,
      engagementQuality: 0.10,
      accountHistory: 0.10,
      socialConnections: 0.05
    },
    thresholds: {
      elite: 80,
      verified: 60,
      basic: 0
    },
    expirationDays: 30
  },

  // Compatibility Configuration
  compatibility: {
    weights: {
      valuesAlignment: 0.25,
      communicationStyle: 0.20,
      lifestyleCompatibility: 0.15,
      interestsOverlap: 0.15,
      relationshipGoals: 0.10,
      personalitySynergy: 0.10,
      activityPreferences: 0.05
    },
    matchLevels: {
      excellent: 85,
      good: 70,
      average: 50,
      low: 0
    }
  },

  // Photo Analysis Configuration
  photoAnalysis: {
    minResolution: 640,
    recommendedResolution: 1280,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
    qualityThresholds: {
      excellent: 80,
      good: 60,
      acceptable: 40
    }
  },

  // Rate Limiting
  rateLimits: {
    profileOptimization: {
      maxRequests: 10,
      windowMs: 60 * 60 * 1000 // 1 hora
    },
    photoAnalysis: {
      maxRequests: 20,
      windowMs: 60 * 60 * 1000
    },
    compatibilityCheck: {
      maxRequests: 50,
      windowMs: 60 * 60 * 1000
    },
    icebreakerGeneration: {
      maxRequests: 30,
      windowMs: 60 * 60 * 1000
    }
  },

  // Cache Configuration
  cache: {
    trustScore: {
      ttl: 30 * 24 * 60 * 60 // 30 días
    },
    compatibilityScore: {
      ttl: 7 * 24 * 60 * 60 // 7 días
    },
    photoAnalysis: {
      ttl: 90 * 24 * 60 * 60 // 90 días
    }
  }
};

export default AI_CONFIG;

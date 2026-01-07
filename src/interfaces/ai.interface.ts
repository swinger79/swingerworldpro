// src/interfaces/ai.interface.ts

export interface UserProfile {
  userId: string;
  email: string;
  username: string;
  bio?: string;
  age: number;
  gender: string;
  interests: string[];
  photos: string[];
  personalityTraits?: string[];
  relationshipGoals?: string[];
  lifestylePreferences?: {
    scheduleType?: 'nocturno' | 'diurno' | 'flexible';
    socialActivityLevel?: 'introvertido' | 'extrovertido' | 'ambivertido';
    travelPreferences?: string[];
    healthHabits?: string[];
  };
  createdAt: Date;
  lastActive?: Date;
  trustScore?: number;
  authenticityScore?: number;
  photosVerified?: boolean;
  responseRate?: number;
  endorsements?: string[];
}

export interface PhotoAnalysis {
  photoHash: string;
  qualityScore: number;
  authenticityScore: number;
  attributes: {
    brightness?: number;
    focus?: number;
    composition?: number;
    resolution?: number;
  };
  feedback: string[];
  recommendations: string[];
  analyzedAt: Date;
  isProfilePhoto: boolean;
  privacyFlags: string[];
}

export interface PhotoQualityScore {
  score: number;
  factors: {
    resolution?: number;
    brightness?: number;
    focus?: number;
    composition?: number;
    noise?: number;
  };
  issues: string[];
}

export interface MatchScore {
  score: number;
  matchLevel: 'EXCELLENT' | 'GOOD' | 'AVERAGE' | 'LOW';
  factors: Record<string, number>;
  insights: string[];
  dateSuggestions: string[];
  strengths: string[];
  considerations: string[];
  calculatedAt: Date;
}

export interface CompatibilityMatrix {
  userAId: string;
  userBId: string;
  overallScore: number;
  detailedScores: {
    valuesAlignment: number;
    communicationStyle: number;
    lifestyleCompatibility: number;
    interestsOverlap: number;
    relationshipGoals: number;
    personalitySynergy: number;
    activityPreferences: number;
  };
  recommendations: string[];
}

export interface TrustMetrics {
  userId: string;
  trustScore: number;
  verificationLevel: 'BASIC' | 'VERIFIED' | 'ELITE';
  metrics: {
    identityVerification: number;
    profileCompleteness: number;
    communityReputation: number;
    behaviorPatterns: number;
    engagementQuality: number;
    accountHistory: number;
    socialConnections: number;
  };
  lastUpdated: Date;
  recommendations: string[];
  badges: string[];
  expiresAt: Date;
}

export interface VerificationStatus {
  email_verified: boolean;
  phone_verified: boolean;
  photo_verified: boolean;
  document_verified: boolean;
  social_connected: boolean;
}

export interface IcebreakerSuggestion {
  question: string;
  topic: string;
  relevance: number;
  context?: string;
}

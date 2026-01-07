import { members } from './members';

const enhanceMember = (member) => {
  const trustScore = 70 + Math.floor(Math.random() * 30);
  
  const getTrustLevel = (score) => {
    if (score >= 80) return 'ELITE';
    if (score >= 60) return 'VERIFIED';
    return 'BASIC';
  };

  const extractTraits = () => {
    const traits = [];
    const interestsStr = (member.interests || []).join(' ').toLowerCase();
    
    if (interestsStr.includes('aventur') || interestsStr.includes('viajar')) traits.push('Aventurero');
    if (interestsStr.includes('deporte') || interestsStr.includes('gym')) traits.push('Activo');
    if (interestsStr.includes('arte') || interestsStr.includes('música')) traits.push('Creativo');
    if (interestsStr.includes('lectura') || interestsStr.includes('cine')) traits.push('Cultural');
    if (interestsStr.includes('cocina')) traits.push('Gourmet');
    
    return traits.length > 0 ? traits : ['Sociable'];
  };

  return {
    ...member,
    trustScore,
    trustLevel: getTrustLevel(trustScore),
    personalityTraits: extractTraits(),
    profileCompleteness: 75 + Math.floor(Math.random() * 25),
    authenticityScore: 80 + Math.floor(Math.random() * 20),
    responseRate: 0.6 + Math.random() * 0.4,
    aiInsights: {
      communicationStyle: member.age < 30 ? 'casual' : 'thoughtful',
      activityLevel: (member.interests || []).some(i => 
        ['deporte', 'gym', 'yoga'].some(w => i.toLowerCase().includes(w))
      ) ? 'high' : 'moderate'
    },
    badges: [
      'verified_identity',
      member.verified ? 'photo_verified' : null,
      (member.interests || []).length >= 5 ? 'complete_profile' : null
    ].filter(Boolean)
  };
};

export const membersAIEnhanced = members.map(enhanceMember);
export default membersAIEnhanced;

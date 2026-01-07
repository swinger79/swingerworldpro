import aiMembersData from './aiMembers.json';

const enhanceMember = (member) => {
  const trustScore = 70 + Math.floor(Math.random() * 30);
  
  const getTrustLevel = (score) => {
    if (score >= 80) return 'ELITE';
    if (score >= 60) return 'VERIFIED';
    return 'BASIC';
  };

  const extractTraits = () => {
    const traits = [];
    const interests = member.interests || [];
    const interestsStr = interests.join(' ').toLowerCase();
    
    if (interestsStr.includes('aventur') || interestsStr.includes('viajar') || interestsStr.includes('travel')) traits.push('Aventurero');
    if (interestsStr.includes('deporte') || interestsStr.includes('gym') || interestsStr.includes('sport')) traits.push('Activo');
    if (interestsStr.includes('arte') || interestsStr.includes('música') || interestsStr.includes('music')) traits.push('Creativo');
    if (interestsStr.includes('lectura') || interestsStr.includes('cine') || interestsStr.includes('film')) traits.push('Cultural');
    if (interestsStr.includes('cocina') || interestsStr.includes('food')) traits.push('Gourmet');
    
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
        ['deporte', 'gym', 'yoga', 'sport'].some(w => i.toLowerCase().includes(w))
      ) ? 'high' : 'moderate'
    },
    badges: [
      'verified_identity',
      member.premium ? 'premium_member' : null,
      (member.interests || []).length >= 5 ? 'complete_profile' : null
    ].filter(Boolean)
  };
};

export const AI_MEMBERS_ENHANCED = aiMembersData.map(enhanceMember);
export default AI_MEMBERS_ENHANCED;

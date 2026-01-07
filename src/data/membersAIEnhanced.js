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
    if (interestsStr.includes('aventur') || interestsStr.includes('viajar')) traits.push('Aventurero');
    if (interestsStr.includes('deporte') || interestsStr.includes('gym')) traits.push('Activo');
    if (interestsStr.includes('arte') || interestsStr.includes('música')) traits.push('Creativo');
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
      activityLevel: 'moderate'
    }
  };
};

const filteredMembers = aiMembersData.filter(m => m.age >= 22 && m.age <= 69);
export const AI_MEMBERS_ENHANCED = filteredMembers.map(enhanceMember);
export default AI_MEMBERS_ENHANCED;

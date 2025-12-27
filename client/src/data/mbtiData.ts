export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  aValue: string;
  bValue: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "At a party, you tend to:",
    optionA: "Interact with many, including strangers",
    optionB: "Interact with a few people you know",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 2,
    text: "You are more attracted to:",
    optionA: "Sensible people who are grounded in reality",
    optionB: "Imaginative people who have creative ideas",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 3,
    text: "When making decisions, you prefer to:",
    optionA: "Base them on logic and objective analysis",
    optionB: "Consider how they affect people's feelings",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 4,
    text: "You prefer to have things:",
    optionA: "Decided and settled",
    optionB: "Open and flexible",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 5,
    text: "After a long week, you prefer to:",
    optionA: "Go out with friends",
    optionB: "Stay home and recharge alone",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 6,
    text: "You trust more in:",
    optionA: "Your direct experience and observations",
    optionB: "Your gut feeling and intuition",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 7,
    text: "In a conflict, it's more important to:",
    optionA: "Be fair and consistent",
    optionB: "Be compassionate and understanding",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 8,
    text: "You prefer working:",
    optionA: "With clear deadlines and structure",
    optionB: "With freedom to improvise",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 9,
    text: "In conversations, you usually:",
    optionA: "Start them and keep them going",
    optionB: "Wait for others to approach you",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 10,
    text: "You find it easier to:",
    optionA: "Focus on details and specifics",
    optionB: "See patterns and possibilities",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 11,
    text: "You are more impressed by:",
    optionA: "Principles and logical reasoning",
    optionB: "Emotions and genuine feelings",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 12,
    text: "Before making a decision, you prefer to:",
    optionA: "Have everything planned out",
    optionB: "Keep options open until the last moment",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 13,
    text: "When learning something new, you prefer:",
    optionA: "Group discussions and activities",
    optionB: "Reading and self-study",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 14,
    text: "You prefer instructions that are:",
    optionA: "Step-by-step and detailed",
    optionB: "General and open to interpretation",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 15,
    text: "When giving feedback, you tend to:",
    optionA: "Be direct and honest, even if it's tough",
    optionB: "Be tactful and consider their feelings",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 16,
    text: "You feel better when:",
    optionA: "You've completed your to-do list",
    optionB: "You've had time to explore new ideas",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 17,
    text: "You get energized by:",
    optionA: "Being around other people",
    optionB: "Having time to yourself",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 18,
    text: "You prefer to focus on:",
    optionA: "What is real and actual",
    optionB: "What could be possible",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 19,
    text: "When solving problems, you rely more on:",
    optionA: "Analysis and logic",
    optionB: "Personal values and empathy",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 20,
    text: "You would describe yourself as more:",
    optionA: "Organized and scheduled",
    optionB: "Spontaneous and adaptable",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  }
];

export interface PersonalityType {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  careers: string[];
  color: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  INTJ: {
    type: "INTJ",
    name: "The Architect",
    description: "Strategic thinkers with a plan for everything. INTJs are innovative, independent, and determined. They have a natural thirst for knowledge and strive to improve everything around them. Known for their logical minds and creative solutions to complex problems.",
    strengths: ["Strategic thinking", "Independent", "Determined", "High standards", "Innovative"],
    careers: ["Scientist", "Engineer", "Professor", "Lawyer", "Project Manager"],
    color: "#6366f1"
  },
  INTP: {
    type: "INTP",
    name: "The Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge. INTPs are quiet, analytical, and creative thinkers who enjoy theoretical concepts and abstract ideas. They excel at finding patterns and logical explanations.",
    strengths: ["Analytical", "Original", "Open-minded", "Curious", "Objective"],
    careers: ["Programmer", "Mathematician", "Analyst", "Researcher", "Writer"],
    color: "#8b5cf6"
  },
  ENTJ: {
    type: "ENTJ",
    name: "The Commander",
    description: "Bold, imaginative, and strong-willed leaders. ENTJs are natural-born leaders who love to organize and lead. They are decisive, efficient, and enjoy long-term planning. They have a natural talent for business and leadership.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic"],
    careers: ["Executive", "Entrepreneur", "Manager", "Consultant", "Politician"],
    color: "#ec4899"
  },
  ENTP: {
    type: "ENTP",
    name: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are quick-witted, clever, and love to argue for the sake of exploration. They are excellent at seeing all sides of an issue.",
    strengths: ["Quick-thinking", "Charismatic", "Energetic", "Original", "Excellent brainstormers"],
    careers: ["Entrepreneur", "Lawyer", "Consultant", "Engineer", "Politician"],
    color: "#f43f5e"
  },
  INFJ: {
    type: "INFJ",
    name: "The Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists. INFJs are the rarest personality type, known for their deep insights into people and complex inner lives. They are driven by a desire to help others.",
    strengths: ["Insightful", "Principled", "Passionate", "Altruistic", "Creative"],
    careers: ["Counselor", "Writer", "Psychologist", "Teacher", "Non-profit Director"],
    color: "#14b8a6"
  },
  INFP: {
    type: "INFP",
    name: "The Mediator",
    description: "Poetic, kind, and altruistic people who are always eager to help a good cause. INFPs are idealistic, empathetic, and creative. They see the best in people and are guided by their core values.",
    strengths: ["Empathetic", "Generous", "Open-minded", "Creative", "Passionate"],
    careers: ["Writer", "Artist", "Counselor", "Social Worker", "Musician"],
    color: "#10b981"
  },
  ENFJ: {
    type: "ENFJ",
    name: "The Protagonist",
    description: "Charismatic and inspiring leaders who are able to mesmerize their listeners. ENFJs are natural teachers and mentors, driven by a desire to help others reach their potential. They are warm, genuine, and empathetic.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural leaders"],
    careers: ["Teacher", "HR Manager", "Counselor", "Event Coordinator", "Life Coach"],
    color: "#22c55e"
  },
  ENFP: {
    type: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. ENFPs are curious, idealistic, and love exploring new ideas and possibilities. They bring energy and enthusiasm to everything they do.",
    strengths: ["Curious", "Enthusiastic", "Excellent communicators", "Festive", "Popular"],
    careers: ["Journalist", "Actor", "Consultant", "Entrepreneur", "Creative Director"],
    color: "#84cc16"
  },
  ISTJ: {
    type: "ISTJ",
    name: "The Logistician",
    description: "Practical and fact-minded individuals whose reliability cannot be doubted. ISTJs are responsible, sincere, and take their commitments seriously. They value tradition, loyalty, and order.",
    strengths: ["Honest", "Direct", "Strong-willed", "Dutiful", "Responsible"],
    careers: ["Accountant", "Military Officer", "Judge", "Administrator", "Auditor"],
    color: "#0ea5e9"
  },
  ISFJ: {
    type: "ISFJ",
    name: "The Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are supportive, reliable, and patient. They notice and remember details about others and use this to care for them.",
    strengths: ["Supportive", "Reliable", "Patient", "Observant", "Loyal"],
    careers: ["Nurse", "Teacher", "Social Worker", "Librarian", "Administrator"],
    color: "#06b6d4"
  },
  ESTJ: {
    type: "ESTJ",
    name: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things or people. ESTJs are organized, logical, and assertive. They value tradition, order, and security in their lives and communities.",
    strengths: ["Dedicated", "Strong-willed", "Direct", "Honest", "Loyal"],
    careers: ["Manager", "Judge", "Financial Officer", "Business Administrator", "School Principal"],
    color: "#3b82f6"
  },
  ESFJ: {
    type: "ESFJ",
    name: "The Consul",
    description: "Extraordinarily caring, social, and popular people who are always eager to help. ESFJs are warm-hearted, popular, and conscientious. They put a lot of effort into making others feel good.",
    strengths: ["Strong sense of duty", "Loyal", "Sensitive", "Warm", "Connecting with others"],
    careers: ["Sales Representative", "Nurse", "Teacher", "Social Worker", "Event Planner"],
    color: "#2563eb"
  },
  ISTP: {
    type: "ISTP",
    name: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools. ISTPs are observant, cool-headed, and adaptable. They enjoy exploring with their hands and eyes, touching and examining the world around them.",
    strengths: ["Optimistic", "Energetic", "Creative", "Practical", "Spontaneous"],
    careers: ["Mechanic", "Engineer", "Pilot", "Forensic Scientist", "Systems Analyst"],
    color: "#f59e0b"
  },
  ISFP: {
    type: "ISFP",
    name: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new. ISFPs are gentle, sensitive, and helpful. They live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm.",
    strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious"],
    careers: ["Artist", "Designer", "Musician", "Chef", "Veterinarian"],
    color: "#eab308"
  },
  ESTP: {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "Smart, energetic, and very perceptive people who truly enjoy living on the edge. ESTPs are energetic thrill-seekers who love taking risks. They are observant, practical, and live in the moment.",
    strengths: ["Bold", "Rational", "Direct", "Sociable", "Perceptive"],
    careers: ["Entrepreneur", "Sales", "Marketing", "Paramedic", "Police Officer"],
    color: "#f97316"
  },
  ESFP: {
    type: "ESFP",
    name: "The Entertainer",
    description: "Spontaneous, energetic, and enthusiastic entertainers who light up the room. ESFPs love the spotlight and want to make others feel good. They are observant, practical, and live life to the fullest.",
    strengths: ["Bold", "Original", "Aesthetics", "Practical", "Observant"],
    careers: ["Entertainer", "Event Planner", "Sales Representative", "Tour Guide", "Flight Attendant"],
    color: "#ef4444"
  }
};

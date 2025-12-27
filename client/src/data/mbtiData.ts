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
    text: "A new human visits your territory. You:",
    optionA: "Run over for head scritches immediately! New friend! 🐱",
    optionB: "Hide under the bed and observe from a safe distance",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 2,
    text: "When hunting a toy mouse, you prefer:",
    optionA: "The tried-and-true pounce technique that always works",
    optionB: "Inventing new acrobatic moves mid-air",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 3,
    text: "Your human forgot to feed you on time. You:",
    optionA: "Meow loudly at exactly 6:00 AM as scheduled",
    optionB: "Give them sad eyes and gentle head bonks",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 4,
    text: "Your favorite napping spot is:",
    optionA: "The same cozy corner every single day",
    optionB: "Wherever the sunbeam happens to be right now",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 5,
    text: "After a long day of napping (exhausting!), you want to:",
    optionA: "Zoom around the house and cause chaos with others",
    optionB: "Find a quiet box to recharge your meow-ergy",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 6,
    text: "You hear a mysterious noise. You:",
    optionA: "Investigate carefully by sniffing and pawing at it",
    optionB: "Trust your whisker-sense that it might be a ghost",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 7,
    text: "Another cat took your favorite sleeping spot. You:",
    optionA: "Assert dominance - this is YOUR spot, fair and square",
    optionB: "Let them have it... but give them the cold shoulder later",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 8,
    text: "Your ideal day involves:",
    optionA: "Breakfast at 7, nap at 9, lunch at 12, nap at 2...",
    optionB: "Going with the flow - maybe knock something off a table?",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 9,
    text: "When your human is working, you:",
    optionA: "Jump on their keyboard demanding attention NOW",
    optionB: "Sit nearby silently until they notice your presence",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 10,
    text: "You spot a red dot on the wall. You:",
    optionA: "Notice exactly where it appears and track its pattern",
    optionB: "Wonder about the mysteries of the universe it represents",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 11,
    text: "Your human brings home a new pet. You:",
    optionA: "Establish clear territory rules and boundaries",
    optionB: "Eventually warm up to them with gentle snuggles",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 12,
    text: "It's treat time! You:",
    optionA: "Already waiting at the treat cabinet at the exact time",
    optionB: "Show up whenever you smell something delicious",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 13,
    text: "At the vet's waiting room, you:",
    optionA: "Meow at every other pet - networking opportunity!",
    optionB: "Stay hidden in your carrier, plotting your escape",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 14,
    text: "When exploring a new cardboard box, you:",
    optionA: "Examine every corner, flap, and scratch potential",
    optionB: "Imagine all the adventures this portal could lead to",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 15,
    text: "Your human wore clothes you don't approve of. You:",
    optionA: "Show your displeasure by ignoring them completely",
    optionB: "Love them anyway and purr to make them feel better",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 16,
    text: "You feel most content when:",
    optionA: "All your daily rituals are completed purrfectly",
    optionB: "You've discovered a new hiding spot or toy",
    dimension: 'JP',
    aValue: 'J',
    bValue: 'P'
  },
  {
    id: 17,
    text: "At 3 AM, you prefer:",
    optionA: "Running around meowing to wake everyone up for playtime",
    optionB: "Silently contemplating the meaning of life by the window",
    dimension: 'EI',
    aValue: 'E',
    bValue: 'I'
  },
  {
    id: 18,
    text: "When bird watching, you focus on:",
    optionA: "The bird's exact location, size, and flight patterns",
    optionB: "Dreaming about what it would be like to fly",
    dimension: 'SN',
    aValue: 'S',
    bValue: 'N'
  },
  {
    id: 19,
    text: "Your human is sad. You:",
    optionA: "Observe from a distance - personal space is important",
    optionB: "Immediately cuddle up and purr healing vibrations",
    dimension: 'TF',
    aValue: 'T',
    bValue: 'F'
  },
  {
    id: 20,
    text: "Your grooming routine is:",
    optionA: "Scheduled and thorough - left paw, right paw, face, tail",
    optionB: "Whenever you feel like it, maybe mid-nap, who knows",
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
  compatibleTypes: string[];
}

export const personalityTypes: Record<string, PersonalityType> = {
  INTJ: {
    type: "INTJ",
    name: "The Architect",
    description: "Strategic thinkers with a plan for everything. INTJs are innovative, independent, and determined. They have a natural thirst for knowledge and strive to improve everything around them. Known for their logical minds and creative solutions to complex problems.",
    strengths: ["Strategic thinking", "Independent", "Determined", "High standards", "Innovative"],
    careers: ["Scientist", "Engineer", "Professor", "Lawyer", "Project Manager"],
    color: "#6366f1",
    compatibleTypes: ["ENFP", "ENTP", "INFJ", "INFP"]
  },
  INTP: {
    type: "INTP",
    name: "The Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge. INTPs are quiet, analytical, and creative thinkers who enjoy theoretical concepts and abstract ideas. They excel at finding patterns and logical explanations.",
    strengths: ["Analytical", "Original", "Open-minded", "Curious", "Objective"],
    careers: ["Programmer", "Mathematician", "Analyst", "Researcher", "Writer"],
    color: "#8b5cf6",
    compatibleTypes: ["ENTJ", "ENFJ", "INFJ", "INTJ"]
  },
  ENTJ: {
    type: "ENTJ",
    name: "The Commander",
    description: "Bold, imaginative, and strong-willed leaders. ENTJs are natural-born leaders who love to organize and lead. They are decisive, efficient, and enjoy long-term planning. They have a natural talent for business and leadership.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic"],
    careers: ["Executive", "Entrepreneur", "Manager", "Consultant", "Politician"],
    color: "#ec4899",
    compatibleTypes: ["INFP", "INTP", "ENFP", "ENTP"]
  },
  ENTP: {
    type: "ENTP",
    name: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are quick-witted, clever, and love to argue for the sake of exploration. They are excellent at seeing all sides of an issue.",
    strengths: ["Quick-thinking", "Charismatic", "Energetic", "Original", "Excellent brainstormers"],
    careers: ["Entrepreneur", "Lawyer", "Consultant", "Engineer", "Politician"],
    color: "#f43f5e",
    compatibleTypes: ["INFJ", "INTJ", "ENFJ", "ENTJ"]
  },
  INFJ: {
    type: "INFJ",
    name: "The Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists. INFJs are the rarest personality type, known for their deep insights into people and complex inner lives. They are driven by a desire to help others.",
    strengths: ["Insightful", "Principled", "Passionate", "Altruistic", "Creative"],
    careers: ["Counselor", "Writer", "Psychologist", "Teacher", "Non-profit Director"],
    color: "#14b8a6",
    compatibleTypes: ["ENTP", "ENFP", "INTJ", "INFP"]
  },
  INFP: {
    type: "INFP",
    name: "The Mediator",
    description: "Poetic, kind, and altruistic people who are always eager to help a good cause. INFPs are idealistic, empathetic, and creative. They see the best in people and are guided by their core values.",
    strengths: ["Empathetic", "Generous", "Open-minded", "Creative", "Passionate"],
    careers: ["Writer", "Artist", "Counselor", "Social Worker", "Musician"],
    color: "#10b981",
    compatibleTypes: ["ENTJ", "ENFJ", "INTJ", "INFJ"]
  },
  ENFJ: {
    type: "ENFJ",
    name: "The Protagonist",
    description: "Charismatic and inspiring leaders who are able to mesmerize their listeners. ENFJs are natural teachers and mentors, driven by a desire to help others reach their potential. They are warm, genuine, and empathetic.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural leaders"],
    careers: ["Teacher", "HR Manager", "Counselor", "Event Coordinator", "Life Coach"],
    color: "#22c55e",
    compatibleTypes: ["INFP", "ISFP", "INTP", "ISTP"]
  },
  ENFP: {
    type: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. ENFPs are curious, idealistic, and love exploring new ideas and possibilities. They bring energy and enthusiasm to everything they do.",
    strengths: ["Curious", "Enthusiastic", "Excellent communicators", "Festive", "Popular"],
    careers: ["Journalist", "Actor", "Consultant", "Entrepreneur", "Creative Director"],
    color: "#84cc16",
    compatibleTypes: ["INTJ", "INFJ", "ENTJ", "ENFJ"]
  },
  ISTJ: {
    type: "ISTJ",
    name: "The Logistician",
    description: "Practical and fact-minded individuals whose reliability cannot be doubted. ISTJs are responsible, sincere, and take their commitments seriously. They value tradition, loyalty, and order.",
    strengths: ["Honest", "Direct", "Strong-willed", "Dutiful", "Responsible"],
    careers: ["Accountant", "Military Officer", "Judge", "Administrator", "Auditor"],
    color: "#0ea5e9",
    compatibleTypes: ["ESFP", "ESTP", "ISFJ", "ESTJ"]
  },
  ISFJ: {
    type: "ISFJ",
    name: "The Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are supportive, reliable, and patient. They notice and remember details about others and use this to care for them.",
    strengths: ["Supportive", "Reliable", "Patient", "Observant", "Loyal"],
    careers: ["Nurse", "Teacher", "Social Worker", "Librarian", "Administrator"],
    color: "#06b6d4",
    compatibleTypes: ["ESFP", "ESTP", "ISTJ", "ESFJ"]
  },
  ESTJ: {
    type: "ESTJ",
    name: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things or people. ESTJs are organized, logical, and assertive. They value tradition, order, and security in their lives and communities.",
    strengths: ["Dedicated", "Strong-willed", "Direct", "Honest", "Loyal"],
    careers: ["Manager", "Judge", "Financial Officer", "Business Administrator", "School Principal"],
    color: "#3b82f6",
    compatibleTypes: ["ISFP", "ISTP", "ISTJ", "ESFJ"]
  },
  ESFJ: {
    type: "ESFJ",
    name: "The Consul",
    description: "Extraordinarily caring, social, and popular people who are always eager to help. ESFJs are warm-hearted, popular, and conscientious. They put a lot of effort into making others feel good.",
    strengths: ["Strong sense of duty", "Loyal", "Sensitive", "Warm", "Connecting with others"],
    careers: ["Sales Representative", "Nurse", "Teacher", "Social Worker", "Event Planner"],
    color: "#2563eb",
    compatibleTypes: ["ISFP", "ISTP", "ISFJ", "ESTJ"]
  },
  ISTP: {
    type: "ISTP",
    name: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools. ISTPs are observant, cool-headed, and adaptable. They enjoy exploring with their hands and eyes, touching and examining the world around them.",
    strengths: ["Optimistic", "Energetic", "Creative", "Practical", "Spontaneous"],
    careers: ["Mechanic", "Engineer", "Pilot", "Forensic Scientist", "Systems Analyst"],
    color: "#f59e0b",
    compatibleTypes: ["ESFJ", "ESTJ", "ISFP", "ESTP"]
  },
  ISFP: {
    type: "ISFP",
    name: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new. ISFPs are gentle, sensitive, and helpful. They live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm.",
    strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious"],
    careers: ["Artist", "Designer", "Musician", "Chef", "Veterinarian"],
    color: "#eab308",
    compatibleTypes: ["ENFJ", "ESFJ", "ESTJ", "ISTP"]
  },
  ESTP: {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "Smart, energetic, and very perceptive people who truly enjoy living on the edge. ESTPs are energetic thrill-seekers who love taking risks. They are observant, practical, and live in the moment.",
    strengths: ["Bold", "Rational", "Direct", "Sociable", "Perceptive"],
    careers: ["Entrepreneur", "Sales", "Marketing", "Paramedic", "Police Officer"],
    color: "#f97316",
    compatibleTypes: ["ISFJ", "ISTJ", "ESFP", "ISTP"]
  },
  ESFP: {
    type: "ESFP",
    name: "The Entertainer",
    description: "Spontaneous, energetic, and enthusiastic entertainers who light up the room. ESFPs love the spotlight and want to make others feel good. They are observant, practical, and live life to the fullest.",
    strengths: ["Bold", "Original", "Aesthetics", "Practical", "Observant"],
    careers: ["Entertainer", "Event Planner", "Sales Representative", "Tour Guide", "Flight Attendant"],
    color: "#ef4444",
    compatibleTypes: ["ISFJ", "ISTJ", "ESTP", "ISFP"]
  }
};

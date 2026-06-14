import knowledgeBase from "@/data/knowledge-base.json";

type AssistantAnswer = {
  answer: string;
  sources: string[];
};

function scoreText(text: string, query: string) {
  const normalizedText = text.toLowerCase();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return terms.reduce((score, term) => score + (normalizedText.includes(term) ? 1 : 0), 0);
}

export function answerFromKnowledgeBase(query: string): AssistantAnswer {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return {
      answer: "Ask me about Sumanth's experience, projects, skills, resume, or contact details.",
      sources: ["Local knowledge base"]
    };
  }

  const combined = [
    knowledgeBase.summary,
    knowledgeBase.contact,
    knowledgeBase.location,
    ...knowledgeBase.experience.flatMap((item) => [item.company, item.role, item.duration, ...item.highlights]),
    ...knowledgeBase.skills,
    ...knowledgeBase.projects.flatMap((project) => [project.title, project.description, project.tech.join(" ")]),
    ...knowledgeBase.achievements.map((item) => `${item.title} ${item.issuer} ${item.description}`)
  ];

  const ranked = combined
    .map((text) => ({ text, score: scoreText(text, normalized) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0);

  const top = ranked.slice(0, 3).map((item) => item.text);
  const answer =
    top.length > 0
      ? top.join(" ")
      : "I can help with Sumanth's AI engineering background, projects, skills, achievements, and contact details.";

  return {
    answer,
    sources: ["Local JSON knowledge base"]
  };
}

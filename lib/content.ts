export const siteConfig = {
  name: "Sumanth Reddy",
  title:
    "AI Engineer | Generative AI Engineer | LLM Applications | RAG Systems | Workflow Automation",
  description:
    "Premium personal portfolio for Sumanth Reddy, an AI Engineer building LLM apps, RAG systems, AI agents, workflow automation, and machine learning products.",
  location: "India",
  email: "sumanthreddyncc@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumanth-reddy-840472272/",
  github: "https://github.com/SumanthReddy2001",
  whatsapp: "https://wa.me/919962909606",
  whatsappRaw: "9962909606",
  resumeUrl: "/resume"
};

export const heroSummary =
  "Building AI-powered applications using LLMs, RAG architectures, AI Agents, Workflow Automation, and Machine Learning to solve real-world business problems.";

export const aboutText =
  "I am an AI Engineer and Data Science enthusiast with 3+ years of IT experience. My work focuses on Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, Workflow Automation, and Machine Learning solutions. I enjoy building intelligent systems that solve real-world business problems using technologies such as Python, LangChain, LangGraph, FastAPI, Pinecone, n8n, and Cloud Platforms. I am continuously exploring emerging AI technologies and developing scalable applications that bridge the gap between business needs and artificial intelligence.";

export const experience = [
  {
    company: "Anubavam Technology",
    role: "AI Engineer",
    duration: "2023 - Present",
    highlights: [
      "Designed and developed LLM-powered applications using RAG architectures.",
      "Built enterprise chatbot solutions using LangChain, LangGraph, and Pinecone.",
      "Developed AI-powered document processing and knowledge retrieval systems.",
      "Implemented vector search, embeddings, and semantic retrieval pipelines.",
      "Built FastAPI-based backend services for AI applications.",
      "Developed workflow automation solutions using n8n and LLM integrations.",
      "Worked on OCR and Intelligent Document Processing systems.",
      "Designed prompt engineering and context management strategies for enterprise use cases.",
      "Collaborated with business teams to identify AI use cases and automate workflows.",
      "Supported testing and validation activities for AI-based applications."
    ]
  }
];

export const skillGroups = [
  {
    category: "Generative AI",
    items: ["LLMs", "Prompt Engineering", "RAG", "AI Agents", "LangChain", "LangGraph"]
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "FastAPI"]
  },
  {
    category: "Vector Databases",
    items: ["Pinecone"]
  },
  {
    category: "Workflow Automation",
    items: ["n8n"]
  },
  {
    category: "Cloud",
    items: ["AWS", "Oracle Cloud"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code"]
  }
];

export const achievements = [
  {
    title: "Sharp Tester Award",
    issuer: "Anubavam Technology",
    description:
      "Recognized for quality, attention to detail, and reliability in AI application testing and validation."
  }
];

export const projects = [
  {
    slug: "multi-tenant-rag-chatbot",
    title: "LLM-Powered Multi-Tenant RAG Chatbot",
    tech: ["LangChain", "LangGraph", "Pinecone", "Python", "n8n"],
    description:
      "Built a scalable multi-tenant chatbot system using RAG architecture with PDF ingestion, embedding generation, and semantic search using Pinecone. Implemented LangChain and LangGraph for orchestrating multi-step reasoning and context-aware responses across different tenants. Designed optimized chunking and retrieval strategies to improve response accuracy and relevance. Integrated automated workflows using n8n for document ingestion and pipeline orchestration.",
    architecture:
      "Tenant-aware ingestion → document parsing → chunking → embeddings → Pinecone namespace indexing → LangGraph orchestration → answer generation → workflow automation via n8n.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    demo: "#"
  },
  {
    slug: "meeting-minutes-generator",
    title: "AI-Powered Meeting Minutes Generator",
    tech: ["FastAPI", "AWS", "OpenAI API"],
    description:
      "Developed a full-stack system to generate structured Minutes of Meeting from raw meeting transcripts using LLMs. Built REST APIs using FastAPI and deployed on AWS. Implemented summarization, action-item extraction, and structured formatting pipelines.",
    architecture:
      "Transcript ingestion → preprocessing → LLM summarization → action extraction → structured MOM output → API delivery through FastAPI.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    demo: "#"
  },
  {
    slug: "ocr-document-processing",
    title: "OCR + Intelligent Document Processing System",
    tech: ["Python", "OCR", "NLP", "Pinecone"],
    description:
      "Built OCR-based pipelines to extract text from scanned PDFs and images. Integrated embeddings and vector storage using Pinecone for semantic document search. Enabled intelligent querying using LLM-based retrieval.",
    architecture:
      "Scanned files → OCR extraction → cleanup and normalization → embedding creation → vector indexing → semantic retrieval.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    demo: "#"
  },
  {
    slug: "llm-text-to-sql",
    title: "LLM-Based Text-to-SQL Engine",
    tech: ["Python", "LLM", "SQL"],
    description:
      "Developed a system to convert natural language queries into optimized SQL queries. Enabled conversational database interactions and improved accuracy through prompt engineering and schema-aware parsing.",
    architecture:
      "Natural language prompt → schema awareness → query generation → validation layer → SQL execution → results explanation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    demo: "#"
  },
  {
    slug: "ai-workflow-automation",
    title: "AI-Driven Workflow Automation",
    tech: ["n8n", "LLM", "Python"],
    description:
      "Designed and implemented HR and business workflow automation solutions. Automated resume parsing, candidate screening, and document processing using AI-powered pipelines.",
    architecture:
      "Trigger events → document intake → AI extraction/classification → decision routing → automated business workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    github: "#",
    demo: "#"
  }
];

export const learningItems = [
  "Agentic AI",
  "Multi-Agent Systems",
  "MCP",
  "Advanced RAG",
  "AI Infrastructure",
  "Enterprise AI Systems"
];

export const stats = [
  { label: "Years Experience", value: 3 },
  { label: "AI Projects", value: 5 },
  { label: "AI Solutions Built", value: 12 },
  { label: "AI Portfolio Growth", value: 100 }
];

export const blogPosts = [
  {
    slug: "building-rag-systems-for-enterprise-ai",
    title: "Building RAG Systems for Enterprise AI",
    excerpt:
      "A practical look at how to design retrieval pipelines that stay accurate, scalable, and easy to maintain.",
    category: "RAG",
    tags: ["RAG", "LangChain", "Pinecone", "Enterprise AI"],
    date: "2026-05-28",
    content: `
# Building RAG Systems for Enterprise AI

Retrieval-Augmented Generation works best when the retrieval layer is treated like a product, not a script. In enterprise settings, the important questions are:

- How do we keep document ingestion reliable?
- How do we enforce tenant-level isolation?
- How do we measure retrieval quality over time?

## Core Principles

1. Normalize content before chunking.
2. Use metadata aggressively.
3. Keep retrieval evaluation in the loop.

## Practical Stack

In many projects, I use Python, LangChain, LangGraph, and Pinecone with a FastAPI backend.

## Takeaway

The strongest RAG systems are built around clean data contracts, observable pipelines, and tight feedback loops.
`
  },
  {
    slug: "designing-ai-agents-that-actually-work",
    title: "Designing AI Agents That Actually Work",
    excerpt:
      "What separates a demo agent from a production agent in the real world.",
    category: "Agents",
    tags: ["AI Agents", "LangGraph", "Workflow Automation"],
    date: "2026-05-14",
    content: `
# Designing AI Agents That Actually Work

AI agents become valuable when they can reason through bounded workflows, call tools safely, and fail gracefully.

## What I look for

- Clear tool contracts
- Guardrails for execution
- State management across steps

## Production Mindset

LangGraph is useful when orchestration matters more than free-form chaining.
`
  },
  {
    slug: "workflow-automation-for-business-teams",
    title: "Workflow Automation for Business Teams",
    excerpt:
      "How LLMs and automation tools can remove repetitive work from HR, operations, and support.",
    category: "Automation",
    tags: ["n8n", "Automation", "FastAPI"],
    date: "2026-04-30",
    content: `
# Workflow Automation for Business Teams

Automation works best when it is invisible to the user and measurable to the business.

## Examples

- Resume parsing
- Candidate screening
- Document classification
- Knowledge retrieval

## Result

The goal is not just speed. It is consistency, traceability, and better decisions.
`
  }
];

export const aiKnowledgeBase = {
  name: siteConfig.name,
  title: siteConfig.title,
  summary: heroSummary,
  email: siteConfig.email,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github,
  location: siteConfig.location,
  experience,
  skills: skillGroups,
  projects: projects.map(({ title, tech, description, architecture }) => ({
    title,
    tech,
    description,
    architecture
  })),
  achievements,
  contact:
    "You can reach Sumanth through email, LinkedIn, GitHub, or WhatsApp for AI engineering opportunities."
} as const;

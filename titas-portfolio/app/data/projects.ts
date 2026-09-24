export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Aaheli'r Aahar",
    category: "FOOD / BRAND / WEB",
    description:
      "A digital experience for a homemade food business, designed to bring the warmth of a home kitchen into a modern web experience.",
    role: "UI/UX · Frontend · Backend · Deployment",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Netlify"],
    featured: true,
  },

  {
    number: "02",
    title: "Hostel Management System",
    category: "SYSTEM / WEB / DJANGO",
    description:
      "A hostel management platform designed to simplify room allocation, payments, complaints and communication.",
    role: "Development · UI · Backend",
    technologies: ["Django", "Python", "JavaScript", "SQLite"],
  },

  {
    number: "03",
    title: "Our Space",
    category: "PRIVATE / SOCIAL / WEB",
    description:
      "A private digital space built around conversations, stories and memories.",
    role: "Design · Frontend · Backend",
    technologies: ["Firebase", "Firestore", "JavaScript", "Vercel"],
  },

  {
    number: "04",
    title: "Book to Screen",
    category: "UI/UX / VISUAL / WEB",
    description:
      "A visual web experience exploring the relationship between books and their screen adaptations.",
    role: "UI/UX · Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
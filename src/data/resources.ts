export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  type: string;
  filePath: string;
  image: string;
  featured?: boolean;
};

export const resources: Resource[] = [
  {
    slug: "beginner-guide",
    title: "Beginner Guide",
    description:
      "A practical starter guide for developers who want a clearer path into modern software development.",
    category: "Frontend",
    type: "PDF Guide",
    filePath: "/ebooks/beginner-guide.pdf",
    image: "/images/SD.jpg",
    featured: true,
  },
  {
    slug: "typescript-foundations",
    title: "TypeScript Foundations",
    description:
      "Core TypeScript concepts, patterns, and structure for building scalable frontend applications.",
    category: "TypeScript",
    type: "PDF Guide",
    filePath: "/ebooks/beginner-guide.pdf",
    image: "/images/cosmic-library-hero.svg",
  },
  {
    slug: "nextjs-architecture-notes",
    title: "Next.js Architecture Notes",
    description:
      "A clean breakdown of routing, layouts, reusable patterns, and production-minded structure.",
    category: "Next.js",
    type: "PDF Guide",
    filePath: "/ebooks/beginner-guide.pdf",
    image: "/images/cosmic-library-hero.svg",
  },
];
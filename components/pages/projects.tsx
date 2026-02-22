import Image from "next/image";
import Link from "next/link";
import { SkillTag } from "@/components/ui/skilltag";
import { ProjectTag } from "@/components/ui/projectTag";

type Project = {
  name: string;
  date: string;
  description: string;
  image: string;
  skills: string[];
  website: string;
};

const projects: Project[] = [
  {
    name: "ERP Management Dashboard",
    date: "August 2025",
    description: "Comprehensive enterprise resource planning system with visual project management features.",
    image: "/project1.png",
    skills: ["Next.js", "TypeScript", "Firebase"],
    website: "https://aedasdashboardlatestbuild.netlify.app/"
  },
    {
    name: "AI Mock Interview Platform",
    date: "April 2025",
    description: "A platform that uses AI to simulate mock interviews, providing feedback and performance analysis.",
    image: "/project2.png",
    skills: ["Next.js", "TypeScript", "NeonDB", "Gemini API"],
    website: "https://ai-interview-mocker-two-blush.vercel.app/"
  },
    {
    name: "Smart Bookmark Manager",
    date: "December 2025",
    description: "A platform to manage and organize bookmarks efficiently with real-time features.",
    image: "/project3.png",
    skills: ["Next.js", "TypeScript", "Supabase", "Google OAuth"],
    website: "https://smart-bookmark-three-lilac.vercel.app/"
  },
];

function ProjectCard({ name, date, description, image, skills, website }: Project) {
  return (
    <div
      className="flex flex-col rounded-md border border-border overflow-hidden"
    >
      <Link
        href={website}
        target="_blank"
      >
      <Image
        src={image}
        alt={name}
        width={600}
        height={150}
        className="w-full object-cover cursor-pointer"
      />
      </Link>
      <div className="flex flex-col gap-1 p-4 bg-muted-foreground/5  hover:opacity-80 transition-opacity">
        <span className="font-bold">{name}</span>
        <span className="text-xs text-primary">{date}</span>
        <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <ProjectTag key={skill} name={skill} />
            ))}
          </div>
          <Link href={website} target="_blank">
            <SkillTag name="Website" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto px-4 py-4 sm:py-6">
      <div className="flex flex-col justify-center gap-2 sm:gap-4 text-center py-3">
        <div className="flex justify-center">
          <SkillTag name="My Projects" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Check out my latest work</h1>
        <p className="text-md sm:text-2xl text-muted-foreground">
          Here’s a list of projects I’ve worked on
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-7">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
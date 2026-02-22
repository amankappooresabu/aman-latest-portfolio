import { SkillTag } from "@/components/ui/skilltag";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Bun.js",
  "Git",
  "Supabase",
  "Express.js",
];

export function Skills() {
  return (
    <section className="mx-auto px-4 py-4 sm:py-6">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
import { SkillTag } from "@/components/ui/skilltag";

const skills = [
  "Js & Ts",
  "Python",
  "React",
  "AI/ML",
  "Langchain",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "MongoDB",
  "Bun.js",
  "Git",
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
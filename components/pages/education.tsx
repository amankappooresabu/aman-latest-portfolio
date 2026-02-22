import { InfoCard } from "@/components/ui/infocard";

const education = [
  {
    logo: "/logo3.png",
    name: "St. Joseph's College of Engineering and Technology, Palai",
    subtext: "B.Tech Computer Science Engineering",
    duration: "2021 - 2025",
    location: "Palai, Kerala",
  },
];

export function Education() {
  return (
    <section className="mx-auto px-4 py-4 sm:py-6">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Education</h2>
      <div className="flex flex-col gap-3">
        {education.map((edu) => (
          <InfoCard key={edu.name} {...edu} />
        ))}
      </div>
    </section>
  );
}
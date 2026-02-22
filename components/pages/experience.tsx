import { InfoCard } from "@/components/ui/infocard";

type Experience = {
    logo: string;
    company: string;
    position: string;
    duration: string;
    location: string;
};

const experiences: Experience[] = [
    {
        logo: "/logo2.png",
        company: "Oronium",
        position: "SDE Intern",
        duration: "Dec 2025 - Present",
        location: "Remote",
    },
    {
        logo: "/logo1.png",
        company: "Aabasoft",
        position: "Front-end Development Intern",
        duration: "Jul 2024 - Dec 2025",
        location: "Ernakulam, Kerala, India",
    },
];


export function Experience() {
    return (
        <section className="mx-auto px-4 py-4 sm:py-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Work Experience</h2>
            <div className="flex flex-col gap-3">
                {experiences.map((exp) => (
                    <InfoCard
                        key={exp.company}
                        logo={exp.logo}
                        name={exp.company}
                        subtext={exp.position}
                        duration={exp.duration}
                        location={exp.location}
                    />
                ))}
            </div>
        </section>
    );
}
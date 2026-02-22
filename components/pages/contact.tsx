import Link from "next/link";
import { SkillTag } from "@/components/ui/skilltag";

export function Contact() {
  return (
    <section className="mx-auto px-4 py-4 sm:py-6">
      <div className="flex flex-col justify-center gap-4 text-center py-3">
        <div className="flex justify-center">
          <SkillTag name="Contact" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-md sm:text-xl text-muted-foreground mx-auto">
          Have a question or want to connect? Reach out via <Link href="mailto:amansabu99@gmail.com" target="_blank" className="underline text-blue-500 hover:text-blue-400">
            email
          </Link>{" "} 
          and I shall respond when I can.
        </p>
        <p className="text-sm text-muted-foreground italic">I prioritize meaningful conversations
          and may not respond to unsolicited messages.</p>
      </div>
    </section>
  );
}
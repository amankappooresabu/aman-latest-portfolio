import Image from "next/image";

export function Intro() {
  return (
    <section id="home" className="flex items-center justify-between mx-auto px-4 py-4 sm:py-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">Hi,I&apos;m Aman 👋</h1>
        <p className="text-md md:text-lg">
          Software developer based in India
        </p>
      </div>
      <div className="shrink-0">
        <Image
          src="/photo.jpeg"
          alt="Aman"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}
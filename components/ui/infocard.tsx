import Image from "next/image";

type InfoCardProps = {
  logo: string;
  name: string;
  subtext: string;
  duration: string;
  location: string;
};

export function InfoCard({ logo, name, subtext, duration, location }: InfoCardProps) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={logo}
        alt={name}
        width={40}
        height={40}
        className="rounded-full object-cover mt-1 shrink-0"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-base font-medium">{name}</span>
          <span className="text-xs text-right sm:text-sm text-muted-foreground">{duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-90 font-semibold">{subtext}</span>
          <span className="text-xs sm:text-sm text-muted-foreground text-right">{location}</span>
        </div>
      </div>
    </div>
  );
}

type ProjectTagProps = {
  name: string;
};

export function ProjectTag({ name }: ProjectTagProps) {
  return (
    <span className="text-[10px] font-bold px-3 py-1 rounded-sm border border-border text-black bg-white dark:text-white dark:bg-black">
      {name}
    </span>
  );
}
type SkillTagProps = {
  name: string;
};

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="text-xs font-bold px-3 py-1 rounded-sm border border-border text-muted bg-foreground">
      {name}
    </span>
  );
}
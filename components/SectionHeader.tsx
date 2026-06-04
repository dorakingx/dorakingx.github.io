type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-teal-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-zinc-300">{description}</p> : null}
    </div>
  );
}

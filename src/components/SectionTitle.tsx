interface SectionTitleProps {
  id?: string
  title: string
  subtitle?: string
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-5 text-center">
      <h2 id={id} className="inline-block -skew-x-6 font-display text-3xl font-extrabold text-lime-brand">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-acai-100/80">{subtitle}</p>}
    </div>
  )
}

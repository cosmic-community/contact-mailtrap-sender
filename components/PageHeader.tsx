interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
        Contact
      </span>
      <h1 className="text-4xl font-semibold text-slate-900">{title}</h1>
      <p className="text-base text-slate-600">{description}</p>
    </header>
  )
}
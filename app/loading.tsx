export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-16">
      <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
      <div className="h-4 w-72 animate-pulse rounded bg-slate-200" />
      <div className="h-64 w-full animate-pulse rounded bg-slate-200" />
    </div>
  )
}
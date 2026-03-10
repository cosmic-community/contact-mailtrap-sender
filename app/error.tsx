'use client'

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">Something went wrong</h1>
      <p className="text-slate-600">{error.message}</p>
      <p className="text-slate-500">Please refresh the page or try again later.</p>
    </div>
  )
}
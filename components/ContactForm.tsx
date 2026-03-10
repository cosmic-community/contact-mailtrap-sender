'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string }
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      setFormState({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send message.'
      setErrorMessage(message)
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/50"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onChange={handleChange('name')}
          placeholder="Your name"
          className="rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange('email')}
          placeholder="you@email.com"
          className="rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          value={formState.message}
          onChange={handleChange('message')}
          placeholder="Tell us how we can help..."
          className="min-h-[140px] rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
          Thanks! Your message has been sent successfully.
        </p>
      )}

      {status === 'error' && (
        <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
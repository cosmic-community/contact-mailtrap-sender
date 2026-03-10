import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  message: string
}

function isValidPayload(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== 'object') return false
  const data = payload as Record<string, unknown>
  return (
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.message === 'string' &&
    data.name.trim().length > 0 &&
    data.email.trim().length > 0 &&
    data.message.trim().length > 0
  )
}

function getRequiredEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()

    if (!isValidPayload(body)) {
      return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 })
    }

    const host = getRequiredEnv('MAILTRAP_HOST')
    const portValue = getRequiredEnv('MAILTRAP_PORT')
    const user = getRequiredEnv('MAILTRAP_USER')
    const pass = getRequiredEnv('MAILTRAP_PASS')
    const from = getRequiredEnv('MAILTRAP_FROM')
    const to = getRequiredEnv('MAILTRAP_TO')

    const port = Number.parseInt(portValue, 10)

    if (Number.isNaN(port)) {
      return NextResponse.json({ error: 'Invalid Mailtrap port.' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass
      }
    })

    const subject = `New Contact Form Submission from ${body.name}`

    await transporter.sendMail({
      from,
      to,
      subject,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to send email.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
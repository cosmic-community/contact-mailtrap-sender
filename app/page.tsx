import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/PageHeader'

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-16">
      <PageHeader
        title="Contact Us"
        description="Send us a message and we will get back to you within 1–2 business days."
      />
      <ContactForm />
    </main>
  )
}
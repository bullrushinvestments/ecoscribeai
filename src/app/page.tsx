import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoScribeAI',
  description: 'EcoScribeAI is an AI-driven content automation tool that helps businesses write climate-focused SEO articles and blog posts. It combines the power of natural language processing with data on sustainability to provide unique, optimized content.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoScribeAI</h1>
      <p className="mt-4 text-lg">EcoScribeAI is an AI-driven content automation tool that helps businesses write climate-focused SEO articles and blog posts. It combines the power of natural language processing with data on sustainability to provide unique, optimized content.</p>
    </main>
  )
}

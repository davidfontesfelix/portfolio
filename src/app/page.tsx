'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/inicio')
    }, 3000)
  }, [router])

  return (
    <section className="fade-in flex h-screen w-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl phone:text-2xl">
        Portfolio de <strong>David Fontes</strong>
      </h1>
      <h2 className="text-3xl text-neutral-500 phone:text-xl">
        Por favor beba <span className="font-semibold text-blue-400">Agua</span>
      </h2>
    </section>
  )
}

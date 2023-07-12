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
    <section className="fade-in w-screen h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-4xl phone:text-2xl">
        Portfolio de <strong>David Fontes</strong>
      </h1>
      <h2 className="text-3xl phone:text-xl text-neutral-500">
        Por favor beba <span className="text-blue-400 font-semibold">Agua</span>
      </h2>
    </section>
  )
}

import { MyContextAsideProvider } from '@/context/MyContexAside'
import Aside from '../Aside'
import ButtonAside from '../Aside/ButtonAside'
import React from 'react'
import ButtonLayout from './ButtonLayout'
import Link from 'next/link'

interface layoutProps {
  local: string
  children: React.ReactElement
}

export default function Layout({ local, children }: layoutProps) {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <MyContextAsideProvider>
        <div className="h-[calc(100vh-20px)] w-[calc(100vw-20px)] bg-white rounded-xl flex items-center relative justify-center overflow-hidden">
          {children}
          <div className="absolute left-0">
            <ButtonLayout />
          </div>
          <div className="absolute bottom-9 flex gap-3">
            <Link
              href={'/inicio'}
              className={`w-9 h-2 cursor-pointer ${
                local === 'inicio' ? 'bg-black' : 'bg-neutral-300'
              }`}
            ></Link>
            <Link
              href={'/sobre mim'}
              className={`w-9 h-2 cursor-pointer ${
                local === 'sobre mim' ? 'bg-black' : 'bg-neutral-300'
              }`}
            ></Link>
            <Link
              href={'/projetos'}
              className={`w-9 h-2 cursor-pointer ${
                local === 'projetos' ? 'bg-black' : 'bg-neutral-300'
              }`}
            ></Link>
            <Link
              href={'/contato'}
              className={`w-9 h-2 cursor-pointer ${
                local === 'contato' ? 'bg-black' : 'bg-neutral-300'
              }`}
            ></Link>
          </div>
        </div>
        <ButtonAside />
        <Aside local={local} />
      </MyContextAsideProvider>
    </div>
  )
}

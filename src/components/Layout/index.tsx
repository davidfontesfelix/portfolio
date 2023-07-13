import { MyContextAsideProvider } from '@/context/MyContexAside'
import Aside from '../Aside'
import ButtonAside from '../Aside/ButtonAside'
import React from 'react'
import ButtonLayout from './ButtonLayout'

interface layoutProps {
  local: string
  children?: React.ReactElement
}

export default function Layout({ local, children }: layoutProps) {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <MyContextAsideProvider>
        <div className="h-[calc(100vh-20px)] w-[calc(100vw-20px)] bg-white rounded-xl flex items-center relative justify-center">
          {children}
          <div className="absolute left-0">
            <ButtonLayout />
          </div>
        </div>
        <ButtonAside />
        <Aside local={local} />
      </MyContextAsideProvider>
    </div>
  )
}

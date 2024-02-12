import { MyContextAsideProvider } from '@/context/MyContexAside'
import Aside from '../screens/Aside'
import React from 'react'
import FooterLocate from './FooterLocate'
import ButtonAsidePhone from './ButtonAsidePhone'

interface layoutProps {
  local: string
  children: React.ReactElement
}

export default function Layout({ local, children }: layoutProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <MyContextAsideProvider>
        <div className="relative flex h-[calc(100vh-20px)] w-[calc(100vw-20px)] items-center justify-center overflow-hidden rounded-xl bg-white">
          {children}
          <FooterLocate local={local} />
        </div>
        <ButtonAsidePhone />
        <Aside local={local} />
      </MyContextAsideProvider>
    </div>
  )
}

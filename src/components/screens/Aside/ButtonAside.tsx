'use client'
import { MyContextAside } from '@/context/MyContexAside'
import { useContext } from 'react'

export default function ButtonLayout() {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <button
      aria-label="Botão para fechar ou abrir aside"
      onClick={() => setShowAside(!showAside)}
      className="z-20 flex h-[200px] w-8 items-center justify-center rounded-r-lg bg-black phone:hidden
      "
    >
      <div className="-ml-1 flex flex-col">
        <div
          className={`-mb-[1px] h-20 w-[2px] bg-white transition-transform duration-500 ${
            showAside ? 'rotate-[10deg]' : '-rotate-[10deg]'
          } `}
        ></div>
        <div
          className={`-mt-[1px] h-20 w-[2px] bg-white transition-transform duration-500 ${
            showAside ? '-rotate-[10deg]' : 'rotate-[10deg]'
          } `}
        ></div>
      </div>
    </button>
  )
}

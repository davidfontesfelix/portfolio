'use client'
import { MyContextAside } from '@/context/MyContexAside'
import { useContext } from 'react'

export default function ButtonAsidePhone() {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <button
      aria-label="Botão para fechar ou abrir aside"
      onClick={() => setShowAside(!showAside)}
      className="absolute right-5 top-8 z-50 hidden h-16 w-16 rounded-lg  bg-black phone:block"
    >
      {showAside ? (
        <div className="flex items-center justify-center">
          <div className="-mr-1 h-10 w-1 rotate-45 bg-white"></div>
          <div className="h-10 w-1 -rotate-45 bg-white"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="h-1 w-3/5 bg-white"></div>
          <div className="h-1 w-3/5 bg-white"></div>
          <div className="h-1 w-3/5 bg-white"></div>
        </div>
      )}
    </button>
  )
}

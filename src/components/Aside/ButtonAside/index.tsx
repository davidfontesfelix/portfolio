'use client'
import { MyContextAside } from '@/context/MyContexAside'
import { useContext } from 'react'

export default function ButtonAside() {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <button
      onClick={() => setShowAside(!showAside)}
      className={`${
        showAside === true && '-translate-x-10 phoneDetails:-translate-x-4'
      } w-16 h-16 bg-black absolute z-50 right-8 top-8 rounded-lg transition-transform duration-500 hidden phone:block`}
    >
      {showAside ? (
        <div className="flex items-center justify-center">
          <div className="h-10 w-1 bg-white rotate-45 -mr-1"></div>
          <div className="h-10 w-1 bg-white -rotate-45"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="w-3/5 h-1 bg-white"></div>
          <div className="w-3/5 h-1 bg-white"></div>
          <div className="w-3/5 h-1 bg-white"></div>
        </div>
      )}
    </button>
  )
}

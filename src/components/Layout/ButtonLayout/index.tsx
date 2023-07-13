'use client'
// interface ButtonLayoutProps {}
import { MyContextAside } from '@/context/MyContexAside'
import { useContext } from 'react'

export default function ButtonLayout(/* props: ButtonLayoutProps */) {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <button
      onClick={() => setShowAside(!showAside)}
      className="w-8 h-[200px] z-20 bg-black phone:hidden flex justify-center items-center rounded-r-lg
      "
    >
      <div className="flex flex-col -ml-1">
        <div
          className={`h-20 w-[2px] -mb-[1px] bg-white transition-transform duration-500 ${
            showAside ? 'rotate-[10deg]' : '-rotate-[10deg]'
          } `}
        ></div>
        <div
          className={`h-20 w-[2px] -mt-[1px] bg-white transition-transform duration-500 ${
            showAside ? '-rotate-[10deg]' : 'rotate-[10deg]'
          } `}
        ></div>
      </div>
    </button>
  )
}

'use client'
import { MyContextAside } from '@/context/MyContexAside'
import { useContext, useEffect, useState } from 'react'
interface ButtonHeaderProps {
  title: string
  icon?: string
  iconWhite?: string
}

interface ArrowProps {
  color: string
}
export function Arrow({ color }: ArrowProps) {
  return (
    <div className="flex flex-col items-end">
      <div
        className={`mb-[2px] h-[2px] w-4 translate-x-1 bg-${color} rotate-[35deg]`}
      ></div>
      <div className={`h-[2px] w-6 bg-${color}`}></div>
      <div
        className={`mt-[2px] h-[2px] w-4 translate-x-1 bg-${color} -rotate-[35deg]`}
      ></div>
    </div>
  )
}
export default function ButtonHeader(props: ButtonHeaderProps) {
  const { setShowAside } = useContext(MyContextAside)
  const [hover, setHover] = useState(false)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (hover) {
      timeoutId = setTimeout(() => {
        setShowAside(true)
      }, 3800)
    }
    return () => clearTimeout(timeoutId)
  }, [hover, setShowAside])

  return (
    <button
      onClick={() => setShowAside(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex w-[400px] items-center justify-center gap-3 overflow-hidden border-2 border-black py-3 shadow-xl"
    >
      <span className="text-xl font-medium ">{props.title}</span>
      <Arrow color="black" />

      <div
        className={`absolute flex h-full w-[400px] items-center justify-center overflow-hidden bg-black transition-transform duration-[4s] ease-in-out phone:hidden tablet:hidden ${
          hover ? '-translate-x-[0px]' : '-translate-x-[400px]'
        }`}
      >
        <span
          className={`fixed flex gap-3 text-xl font-medium text-white transition-transform duration-[4s] ease-in-out ${
            hover ? 'translate-x-[0px]' : 'translate-x-[400px]'
          }`}
        >
          {props.title}
          <div className="mt-2">
            <Arrow color="white" />
          </div>
        </span>
      </div>
    </button>
  )
}

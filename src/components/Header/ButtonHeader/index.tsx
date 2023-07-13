import { useState } from 'react'
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
    <div className="flex items-end flex-col">
      <div
        className={`w-4 h-[2px] mb-[2px] translate-x-1 bg-${color} rotate-[35deg]`}
      ></div>
      <div className={`w-6 h-[2px] bg-${color}`}></div>
      <div
        className={`w-4 h-[2px] mt-[2px] translate-x-1 bg-${color} -rotate-[35deg]`}
      ></div>
    </div>
  )
}
export default function ButtonHeader(props: ButtonHeaderProps) {
  const [hover, setHover] = useState(false)
  return (
    <button
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="w-[400px] py-3 border-2 shadow-2xl overflow-hidden relative border-black flex items-center justify-center gap-3"
    >
      <span className="text-xl font-medium ">{props.title}</span>
      <Arrow color="black" />

      <div
        className={`w-[400px] h-full flex overflow-hidden items-center phone:hidden tablet:hidden justify-center bg-black absolute ease-in-out transition-transform duration-[4s] ${
          hover ? '-translate-x-[0px]' : '-translate-x-[400px]'
        }`}
      >
        <span
          className={`text-xl flex gap-3 fixed transition-transform duration-[4s] font-medium ease-in-out text-white ${
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

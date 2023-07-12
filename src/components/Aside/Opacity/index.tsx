'use client'

type opacityProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Opacity({ show, setShow }: opacityProps) {
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div
      onClick={handleClick}
      className={`absolute z-0 w-screen h-screen bg-black/40 transition-transform duration-500 -translate-x-[100vw] ${
        show ? 'translate-x-[0vw]' : '-translate-x-[100vw] '
      }`}
    ></div>
  )
}

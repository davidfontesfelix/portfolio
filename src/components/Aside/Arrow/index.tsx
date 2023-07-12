interface ArrowProps {
  leftOrRight: boolean
}

export default function Arrow({ leftOrRight }: ArrowProps) {
  return (
    <div className="flex flex-col -ml-1">
      <div
        className={`h-20 w-[2px] -mb-[1px] bg-white transition-transform duration-500 ${
          leftOrRight ? 'rotate-[10deg]' : '-rotate-[10deg]'
        } `}
      ></div>
      <div
        className={`h-20 w-[2px] -mt-[1px] bg-white transition-transform duration-500 ${
          leftOrRight ? '-rotate-[10deg]' : 'rotate-[10deg]'
        } `}
      ></div>
    </div>
  )
}

import Link from 'next/link'

interface navigationProps {
  local: string
  nav?: string
}

export default function Navigation({ local, nav }: navigationProps) {
  if (local === 'sobreMim') {
    return (
      <Link href={'/' + local} className="relative">
        <span className=" flex w-full flex-auto py-4 text-3xl font-medium capitalize text-blueProject after:absolute after:bottom-0 after:left-[0%] after:inline-block after:h-1 after:w-[0] after:bg-blueProject after:transition-[width] after:content-[''] hover:after:w-[100%]">
          {nav}
        </span>
      </Link>
    )
  }
  return (
    <Link href={'/' + nav} className="relative">
      <span className="flex flex-auto py-4 text-3xl font-medium capitalize duration-1000 after:absolute after:bottom-0 after:left-[0%] after:inline-block after:h-1 after:w-[0] after:bg-blueProject after:transition-[width] after:content-[''] hover:after:w-[100%]">
        {nav}
      </span>
    </Link>
  )
}

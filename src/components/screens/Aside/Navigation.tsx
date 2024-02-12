import Link from 'next/link'

interface navigationProps {
  local: string
  nav?: string
}

export default function Navigation({ local, nav }: navigationProps) {
  return (
    <Link href={'/' + nav} className="relative">
      <span
        className={`flex flex-auto py-4 text-3xl ${
          local === nav ? 'text-blueProject' : ''
        } font-medium uppercase tracking-wider duration-1000 after:absolute after:bottom-0 after:left-[0%] after:inline-block after:h-1 after:w-[0] after:bg-blueProject after:transition-[width] after:content-[''] hover:after:w-[100%]`}
      >
        {nav}
      </span>
    </Link>
  )
}

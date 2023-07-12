import Link from 'next/link'

interface navigationProps {
  local: string
  nav: string
}

export default function Navigation({ local, nav }: navigationProps) {
  if (local === nav) {
    return (
      <Link
        href={'/' + local}
        className="w-full hover:border-r-4 border-blueProject flex py-4 font-medium text-blueProject text-3xl capitalize"
      >
        {nav}
      </Link>
    )
  }
  return (
    <Link
      href={'/' + nav}
      className="w-full flex py-4 font-medium text-3xl hover:border-r-4 border-blueProject capitalize"
    >
      {nav}
    </Link>
  )
}

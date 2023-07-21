import Image from 'next/image'

interface LinkProps {
  href: string
  src: string
  alt: string
}

export default function Link(props: LinkProps) {
  return (
    <a target="_blanl" href={props.href} className="text-3xl text-blueProject">
      <Image width={40} height={40} src={props.src} alt="string" />
    </a>
  )
}

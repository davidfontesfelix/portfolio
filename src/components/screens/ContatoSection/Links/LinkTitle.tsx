interface LinkProps {
  href: string
  children: React.ReactNode
}

export default function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-3xl text-blueProject phone:text-2xl"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

interface headingProps {
  children: React.ReactNode
}

export default function Heading({ children }: headingProps) {
  return (
    <h2 className=" text-6xl font-bold uppercase tracking-wider smHeight:text-5xl phoneSm:text-3xl phone:text-4xl tablet:text-5xl">
      {children}
    </h2>
  )
}

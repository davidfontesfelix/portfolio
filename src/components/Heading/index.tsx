interface headingProps {
  children: React.ReactNode
}

export default function Heading({ children }: headingProps) {
  return (
    <h1 className=" text-6xl font-bold uppercase tracking-wider phoneSm:text-3xl phone:text-4xl tablet:text-5xl">
      {children}
    </h1>
  )
}

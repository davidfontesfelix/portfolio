interface headingProps {
  children: React.ReactNode
}

export default function Heading({ children }: headingProps) {
  return (
    <h1 className="text-6xl font-bold phone:text-4xl tablet:text-4xl desktops:text-5xl laptops:text-4xl">
      {children}
    </h1>
  )
}

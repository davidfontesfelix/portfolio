import Image from 'next/image'

interface techProps {
  src: string
  alt: string
  animation?: boolean
}

export default function Tech({ src, alt, animation }: techProps) {
  return (
    <Image
      width={64}
      height={64}
      src={src}
      alt={alt}
      className={`w-16 phone:w-10 tablet:w-12 ${
        animation
          ? 'animate-[spin_4s_linear_infinite] transition-transform'
          : ''
      }`}
    />
  )
}

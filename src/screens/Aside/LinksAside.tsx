import Image from 'next/image'

type LinksAsideProps = {
  icon: string
  URL: string
  arialLabel: string
}

export default function LinksAside({ icon, URL, arialLabel }: LinksAsideProps) {
  return (
    <a
      href={URL}
      aria-label={arialLabel}
      target="_blank"
      className=" flex h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-black shadow-lg shadow-black/40 transition-colors duration-200  hover:bg-neutral-600 phone:h-16 phone:w-16"
      rel="noreferrer"
    >
      <Image
        width={32}
        height={32}
        alt="icon do whatsapp ou linkedin"
        src={icon}
        className="w-10 "
      />
    </a>
  )
}

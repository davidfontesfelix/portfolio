import Image from 'next/image'

type LinksAsideProps = {
  icon: string
  URL: string
  downloadName?: string
  arialLabel: string
}

export default function LinksAside({
  icon,
  URL,
  downloadName,
  arialLabel,
}: LinksAsideProps) {
  if (downloadName) {
    return (
      <a
        href={URL}
        aria-label={arialLabel}
        download="Curriculo-david.pdf"
        target="_blank"
        className=" flex h-16 w-16 cursor-pointer items-center justify-center rounded-lg bg-black shadow-lg shadow-black/40 phone:h-[70px] phone:w-[70px]"
        rel="noreferrer"
      >
        <Image
          width={40}
          height={40}
          alt="icon de curriculo"
          src={icon}
          className="w-10 phone:w-12"
        />
      </a>
    )
  } else {
    return (
      <a
        href={URL}
        aria-label={arialLabel}
        target="_blank"
        className=" flex h-16 w-16 cursor-pointer items-center justify-center rounded-lg bg-black shadow-lg shadow-black/40 phone:h-[70px] phone:w-[70px]"
        rel="noreferrer"
      >
        <Image
          width={40}
          height={40}
          alt="icon do whatsapp ou linkedin"
          src={icon}
          className="w-10 phone:w-12"
        />
      </a>
    )
  }
}

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
        className=" flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-neutral-400 bg-black shadow-md shadow-black/40 hover:border-2 phone:h-16 phone:w-16"
        rel="noreferrer"
      >
        <Image
          width={32}
          height={32}
          alt="icon de curriculo"
          src={icon}
          className="w-10 "
        />
      </a>
    )
  } else {
    return (
      <a
        href={URL}
        aria-label={arialLabel}
        target="_blank"
        className=" flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg border-neutral-400 bg-black shadow-lg shadow-black/40 hover:border-2 phone:h-16 phone:w-16"
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
}

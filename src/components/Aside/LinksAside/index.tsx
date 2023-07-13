import Image from 'next/image'

type LinksAsideProps = {
  icon: string
  URL: string
  downloadName?: string
}

export default function LinksAside({
  icon,
  URL,
  downloadName,
}: LinksAsideProps) {
  if (downloadName) {
    return (
      <a
        href={URL}
        download="Curriculo-david.pdf"
        target="_blank"
        className=" cursor-pointer w-16 h-16 phone:w-[70px] phone:h-[70px] bg-black rounded-lg flex justify-center items-center"
        rel="noreferrer"
      >
        <Image alt="" src={icon} className="w-10 phone:w-12" />
      </a>
    )
  }

  return (
    <a
      href={URL}
      target="_blank"
      className=" cursor-pointer w-16 h-16 phone:w-[70px] phone:h-[70px] bg-black rounded-lg flex justify-center items-center"
      rel="noreferrer"
    >
      <Image alt="" src={icon} className="w-10 phone:w-12" />
    </a>
  )
}

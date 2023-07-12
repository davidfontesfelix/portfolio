import Image from 'next/image'

type LinksAsideProps = {
  icon: string
  URL: string
}

export default function LinksAside({ icon, URL }: LinksAsideProps) {
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

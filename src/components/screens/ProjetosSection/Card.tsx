import Category from './Category'

import Image from 'next/image'
import DesktopAndMobileScreens from './DesktopAndMobileScreens'

interface CardProps {
  show?: boolean
  data: any
}

export default function Card({ show, data }: CardProps) {
  return (
    <div
      className={` ${
        show ? '' : 'scale-90 phone:opacity-0 tablet:opacity-0'
      } h-[600px] w-[400px] min-w-[400px] rounded-lg bg-black text-left transition-all duration-1000 phone:h-[600px] phone:w-[290px] phone:min-w-[290px] tablet:h-[600px] tablet:w-[290px] tablet:min-w-[290px] details:h-[75vh] detailsSmall:h-[70vh] detailsSmall:w-[320px] detailsSmall:min-w-[320px]`}
    >
      <div className="flex h-[45%] w-full items-center justify-center rounded-t-lg bg-[#282828] phone:h-[33%] tablet:h-[33%] detailsSmall:h-[40%]">
        <DesktopAndMobileScreens
          desktop={data?.desktop}
          mobile={data?.mobile}
        />
      </div>
      <div className="relative ml-6 mr-6 h-[55%] text-white">
        <h2 className="mt-4 text-3xl font-bold">{data?.title}</h2>
        <div className="mt-2 flex flex-wrap gap-4">
          {data?.techs.map((tech: string) => (
            <Category key={tech} title={tech} />
          ))}
        </div>
        <p className="mt-4 text-base leading-[125%]">{data?.description}</p>
        <div className=" absolute bottom-10 flex w-full justify-center phone:-bottom-10 tablet:-bottom-10 detailsSmall:bottom-0">
          <a
            href={data?.link}
            target="_blank"
            className="flex gap-2 py-3 text-2xl text-blueProject"
            rel="noreferrer"
          >
            <Image
              width={30}
              height={30}
              src="/assets/svgs/Link.svg"
              alt="link do site"
            />
            Link do projeto
          </a>
        </div>
      </div>
    </div>
  )
}
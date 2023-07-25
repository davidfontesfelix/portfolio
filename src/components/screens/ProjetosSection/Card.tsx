/* eslint-disable @typescript-eslint/no-explicit-any */
import Category from './Category'

import Image from 'next/image'
import DesktopAndMobileScreens from './DesktopAndMobileScreens'

interface CardProps {
  show?: boolean
  data: any
  loading: boolean
}

export default function Card({ show, data, loading }: CardProps) {
  return (
    <div
      className={` ${
        show ? '' : ' scale-90 phoneSm:opacity-0 phone:opacity-0'
      }  h-[600px] w-[400px] rounded-lg bg-black text-left transition-all duration-1000 phoneSm:h-[420px] phoneSm:w-[260px] phone:h-[520px] phone:w-[290px] tablet:h-[600px] tablet:w-[340px]`}
    >
      <div className=" flex h-[45%] w-full items-center justify-center rounded-t-lg bg-[#282828] phoneSm:h-[40%] phone:h-[37%] tablet:h-[37%]">
        <DesktopAndMobileScreens
          loading={loading}
          desktop={data?.desktop}
          mobile={data?.mobile}
        />
      </div>
      <div className=" ml-6 mr-6 text-white phoneSm:ml-4 phoneSm:mr-4">
        {loading ? (
          <div className="mt-4 h-6 w-48 bg-neutral-300" />
        ) : (
          <h2 className="mt-4 text-3xl font-bold">{data?.title}</h2>
        )}
        <div className="mt-2 flex flex-wrap gap-4">
          {data?.techs.map((tech: string) => (
            <Category key={tech} title={tech} />
          ))}
        </div>
        {loading ? (
          <>
            <div className="mt-4 h-6 w-full bg-neutral-300" />
            <div className="mt-4 h-6 w-2/4 bg-neutral-300" />
          </>
        ) : (
          <p className="mt-4 text-base leading-[125%] opacity-90 phoneSm:hidden">
            {data?.description}
          </p>
        )}
        <div className=" absolute bottom-6 flex justify-center ">
          {loading ? (
            <div className="h-8 w-56 bg-neutral-300 phoneSm:w-44" />
          ) : (
            <a
              href={data?.link}
              target="_blank"
              className="flex gap-2 text-2xl text-blueProject"
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
          )}
        </div>
      </div>
    </div>
  )
}

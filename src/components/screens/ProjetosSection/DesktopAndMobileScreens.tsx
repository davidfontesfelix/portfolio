import Image from 'next/image'

interface DesktopAndMobileScreensProps {
  desktop: string
  mobile: string
  loading: boolean
  blackOrWhite: string
}

export default function DesktopAndMobileScreens({
  desktop,
  mobile,
  loading,
  blackOrWhite,
}: DesktopAndMobileScreensProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className={`h-[60%] w-[70%] rounded-t-md border-4 ${
            blackOrWhite === 'black' ? 'border-black' : 'border-white'
          }`}
        >
          <div className="h-full w-full">
            <div className="h-full w-full bg-white">
              {loading ? (
                <div className="h-full w-full bg-neutral-300" />
              ) : (
                <Image
                  className="h-full w-full"
                  src={desktop}
                  width={272}
                  height={154}
                  alt="Imagem do projeto desktop"
                />
              )}
            </div>
          </div>
        </div>
        <div className="h-[5%] w-[70%] rounded-b-md bg-white" />
        <div
          className="h-[15%] w-[10%] bg-white"
          style={{ boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.25) inset' }}
        />
        <div className="h-[2%] w-[30%] rounded-lg bg-gray-200" />
      </div>
      <div
        className={`absolute bottom-6 right-12 flex h-[110px] w-[65px] justify-center rounded-md border-2 ${
          blackOrWhite === 'black' ? 'border-black' : 'border-white'
        } shadow-lg shadow-black phoneSm:bottom-3 phoneSm:right-5 phoneSm:h-[80px] phoneSm:w-[50px] phone:bottom-3 phone:right-5 phone:h-[80px] phone:w-[50px] tablet:bottom-3 tablet:right-5 tablet:h-[80px] tablet:w-[50px]`}
      >
        <div
          className={`absolute flex h-1 w-6 justify-center gap-[2px] rounded-b-full ${
            blackOrWhite === 'black' ? 'bg-black' : 'bg-white'
          }`}
        >
          <div className="h-[1px] w-[10px] bg-gray-600"></div>
          <div className="h-[1px] w-[2px] bg-gray-600"></div>
        </div>
        <div className="h-full w-full">
          <div
            className={`h-full w-full  ${
              blackOrWhite === 'black' ? 'bg-black' : 'bg-white'
            }`}
          >
            {loading ? (
              <div className="h-full w-full bg-neutral-300" />
            ) : (
              <Image
                className="h-full w-full rounded-md"
                src={mobile}
                width={57}
                height={102}
                alt="Imagem do projeto mobile"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

interface DesktopAndMobileScreensProps {
  desktop: string
  mobile: string
}

export default function DesktopAndMobileScreens({
  desktop,
  mobile,
}: DesktopAndMobileScreensProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="h-[60%] w-[70%] rounded-t-md border-4 border-white">
          <div className="h-full w-full">
            <Image
              className="h-full w-full"
              src={desktop}
              width={272}
              height={154}
              alt="Imagem do projeto desktop"
            />
          </div>
        </div>
        <div className="h-[5%] w-[70%] rounded-b-md bg-white" />
        <div
          className="h-[15%] w-[10%] bg-gray-200"
          style={{ boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.25) inset' }}
        />
        <div className="h-[2%] w-[30%] rounded-lg bg-white" />
      </div>
      <div className="absolute bottom-6 right-12 flex h-[110px] w-[65px] justify-center rounded-md border-4 border-white shadow-lg shadow-black phone:bottom-3 phone:right-5 phone:h-[80px] phone:w-[50px] tablet:bottom-3 tablet:right-5 tablet:h-[80px] tablet:w-[50px]">
        <div className="absolute h-1 w-12 rounded-b-full bg-white" />
        <div className="h-full w-full bg-slate-500">
          <Image
            className="h-full w-full"
            src={mobile}
            width={57}
            height={102}
            alt="Imagem do projeto mobile"
          />
        </div>
      </div>
    </div>
  )
}

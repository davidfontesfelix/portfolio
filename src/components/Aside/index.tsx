'use client'
import { useContext } from 'react'
import Opacity from './Opacity'
import Arrow from './Arrow'
import LinksAside from './LinksAside'
import Whatsapp from '../../assets/whatsapp.svg'
import CV from '../../assets/cv.svg'
import Linkedin from '../../assets/Linkedin.svg'
import { MyContextAside } from '@/context/MyContexAside'
import Navigation from './Navigation'

interface asideProps {
  local: string
}

export default function Aside({ local }: asideProps) {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <>
      <aside className=" z-10 absolute left-0">
        <div
          className={` ${
            showAside
              ? 'translate-x-0'
              : '-translate-x-[350px] phone:-translate-x-[calc(100vw-10px)]'
          } flex items-center transition-transform duration-500 relative`}
        >
          <div className="flex justify-center w-[360px] phone:w-screen h-screen bg-white border-r-[12px] border-black">
            <div className="mt-9 grid grid-rows-[12vh_140px_57vh_5vh]">
              <div>
                <div>
                  <h2 className="text-3xl tracking-wider font-bold phone:text-3xl">
                    David Fontes
                  </h2>
                </div>
                <p className="text-slate-600 text-lg phone:text-sm">
                  Bem-vindo ao meu portfolio.
                </p>
              </div>
              <div>
                <div className="flex gap-8 phone:gap-10">
                  <LinksAside
                    URL="https://wa.me/5579999634862"
                    icon={Whatsapp}
                  />
                  <LinksAside
                    URL="https://docs.google.com/document/d/1ZOU1i7Y7IPNC_e_oJIk_Pyy70fbe3RDK/edit?usp=sharing&ouid=111993502324322830477&rtpof=true&sd=true"
                    icon={CV}
                  />
                  <LinksAside
                    URL="https://www.linkedin.com/in/david-fontes-9b84a4201/"
                    icon={Linkedin}
                  />
                </div>
                <div className="w-full h-[2px] bg-black mt-6" />
              </div>
              <div className="flex flex-col">
                <Navigation local={local} nav="inicio" />
                <Navigation local={local} nav="sobre mim" />
                <Navigation local={local} nav="projetos" />
                <Navigation local={local} nav="contato" />
              </div>
              <div className="noPhone:absolute bottom-6 text-sm text-slate-600">
                <p>©davidfontesfelix</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowAside(!showAside)}
            className="w-8 h-[200px] bg-black flex transition-all duration-300 justify-center items-center rounded-r-lg phone:hidden"
          >
            <Arrow leftOrRight={showAside} />
          </button>
        </div>
      </aside>
      <Opacity show={showAside} setShow={setShowAside} />
    </>
  )
}

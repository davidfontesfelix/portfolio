'use client'
import { useContext } from 'react'
import Opacity from './Opacity'
import LinksAside from './LinksAside'
import { MyContextAside } from '@/context/MyContexAside'
import Navigation from './Navigation'
import ButtonAside from './ButtonAside'

interface asideProps {
  local: string
}

export default function Aside({ local }: asideProps) {
  const { showAside, setShowAside } = useContext(MyContextAside)
  return (
    <>
      <aside
        className={`absolute left-0 z-10 transition-transform duration-500 ${
          showAside ? 'translate-x-[0px]' : '-translate-x-[350px]'
        }`}
      >
        <div className="relative flex items-center">
          <div className="flex h-screen w-[360px] justify-center border-r-[12px] border-black bg-white">
            <div className="mt-9 grid grid-rows-[12vh_140px_50vh]">
              <div>
                <div>
                  <h2 className="text-3xl font-bold tracking-wider phone:text-3xl">
                    David Fontes
                  </h2>
                </div>
                <p className="text-lg text-slate-600 phone:text-sm">
                  Bem-vindo ao meu portfolio.
                </p>
              </div>
              <div>
                <div className="flex gap-8 phone:gap-10">
                  <LinksAside
                    arialLabel="botão para ir para o meu whatsapp"
                    URL="https://wa.me/5579999634862"
                    icon="/assets/svgs/Whatsapp.svg"
                  />
                  <LinksAside
                    arialLabel="botão para baixar meu curriculo"
                    URL="https://firebasestorage.googleapis.com/v0/b/portfolio-820d8.appspot.com/o/docs%2FCURRICULO-DAVIDFONTES.docx?alt=media&token=d692de5d-e045-44a4-985e-ec1e3ccb4647"
                    icon="/assets/svgs/Cv.svg"
                    downloadName="Curriculo-DavidFontes.pdf"
                  />
                  <LinksAside
                    arialLabel="botão para ir para o meu linkedin"
                    URL="https://www.linkedin.com/in/david-fontes-9b84a4201"
                    icon="/assets/svgs/Linkedin.svg"
                  />
                </div>
                <div className="mt-6 h-[2px] w-full bg-black" />
              </div>
              <div className="relative flex flex-col">
                <Navigation local={local} nav="inicio" />
                <Navigation local={local} nav="sobre" />
                <Navigation local={local} nav="projetos" />
                <Navigation local={local} nav="contato" />
              </div>
              <footer className="absolute bottom-6 text-sm text-slate-600">
                <p>©davidfontesfelix</p>
              </footer>
            </div>
          </div>
          <ButtonAside />
        </div>
      </aside>
      <Opacity show={showAside} setShow={setShowAside} />
    </>
  )
}

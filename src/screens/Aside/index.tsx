'use client'
import { useContext, useEffect, useState } from 'react'
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
  const [curriculum, setCurriculum] = useState<string>('')

  useEffect(() => {
    const getCurriculum = async () => {
      try {
        const response = await fetch(
          'https://backend-portfolio-one.vercel.app/curriculum',
        )
        const data = await response.json()
        setCurriculum(data.src)
      } catch (error) {
        console.error(error)
      }
    }
    getCurriculum()
  }, [])

  const asideLinks = [
    {
      arialLabel: 'botão para ir para o meu whatsapp',
      URL: 'https://wa.me/5579999634862',
      icon: '/assets/icons/Whatsapp.svg',
    },
    {
      arialLabel: 'botão para ver meu curriculo',
      URL: curriculum,
      icon: '/assets/icons/Cv.svg',
    },
    {
      arialLabel: 'botão para ir para o meu linkedin',
      URL: 'https://www.linkedin.com/in/david-fontes-9b84a4201',
      icon: '/assets/icons/Linkedin.svg',
    },
  ]

  return (
    <>
      <aside
        className={`absolute left-0 z-10 transition-transform duration-500  ${
          showAside ? '' : '-translate-x-[350px]'
        }`}
      >
        <div className="flex items-center">
          <div className="flex h-screen w-[360px] justify-center border-r-[12px] border-black bg-white horizontal:fixed">
            <div className="mt-8">
              <div className="horizontal:hidden">
                <h2 className="text-3xl font-bold tracking-wider phone:text-3xl">
                  David Fontes
                </h2>
                <p className="text-lg text-slate-600 phone:text-sm">
                  Bem-vindo ao meu portfolio.
                </p>
              </div>
              <ul className="mt-8 flex gap-8 phone:gap-10 horizontal:hidden">
                {asideLinks.map((element, index) => (
                  <li key={index}>
                    <LinksAside
                      arialLabel={element.arialLabel}
                      URL={element.URL}
                      icon={element.icon}
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-[2px] w-full bg-black horizontal:hidden" />

              <ul className="mt-6 flex flex-col horizontal:mt-0">
                <li>
                  <Navigation local={local} nav="inicio" />
                </li>
                <li>
                  <Navigation local={local} nav="sobre" />
                </li>
                <li>
                  <Navigation local={local} nav="projetos" />
                </li>
                <li>
                  <Navigation local={local} nav="contato" />
                </li>
              </ul>
              <footer className="absolute bottom-6 text-sm text-slate-600 horizontal:hidden">
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

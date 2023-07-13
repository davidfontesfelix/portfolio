// interface SobreMimSectionProps {}

import Image from 'next/image'
import Informations from './Informations'

export default function SobreMimSection(/* props: SobreMimSectionProps */) {
  return (
    <div className="flex ml-[5vw] flex-wrap justify-center items-center">
      <div className="z-10 max-w-6xl phone:mr-[3vw]">
        <div>
          <h1 className="text-6xl font-bold mb-[2vh] phone:text-3xl desktops:text-5xl laptops:text-3xl mt-6">
            Sobre:
          </h1>
          <h2 className="flex text-8xl gap-2 font-medium phone:text-2xl desktops:text-7xl laptops:text-5xl">
            Olá, meu nome é
            <span>
              <h2>David</h2>
              <h3 className="text-2xl phone:hidden desktops:text-lg text-center font-normal tracking-[0.12em] laptops:text-xs">
                David Fontes Felix
              </h3>
            </span>
          </h2>
          <p className="text-2xl leading-relaxed mt-[2vh] phone:mt-[1vh] tracking-wider phone:text-base desktops:max-w-[90vw] laptops:max-w-[80vw]">
            Desde que me lembro, sempre estive fascinado pelo mundo digital e
            pela possibilidade de criar coisas incríveis através da programação.
            A minha jornada no mundo da tecnologia começou quando eu era apenas
            uma criança curiosa, desmontando dispositivos eletrônicos só para
            descobrir como funcionavam. Essa curiosidade me impulsionou a
            explorar diferentes linguagens de programação e a mergulhar de
            cabeça em projetos desafiadores.
          </p>
        </div>
        <div className="mt-[5vh] mb-[5vh] phone:flex-wrap laptops:hidden details:hidden flex gap-[4vh] desktops:gap-[2vh] phone:mt-[3vh]">
          <Informations title="Idade" response="17 Anos" />
          <Informations title="Ingles" response="Intermediario" />
          <Informations title="Cargo Atual" response="Freelancer" />
        </div>
      </div>
      <div className="animation-bounce details:mt-[5vh] laptops:mt-[5vh] -z-0 phone:w-full phone:-ml-[5vw]">
        <Image
          width={400}
          height={400}
          className="w-full phone:max-w-xl"
          src={'/assets/arte.png'}
          alt=""
        />
      </div>
    </div>
  )
}

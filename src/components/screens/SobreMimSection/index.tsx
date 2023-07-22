import Image from 'next/image'
import Informations from './Informations'
import Heading from '@/components/Heading'

export default function SobreMimSection() {
  return (
    <div className="ml-[5vw] flex flex-wrap items-center justify-center">
      <div className="z-10 max-w-6xl phone:mr-[3vw]">
        <div>
          <Heading>Sobre</Heading>
          <h2 className="mt-6 flex gap-2 text-8xl font-medium phone:text-2xl tablet:text-3xl desktops:text-7xl laptops:text-5xl">
            Olá, meu nome é
            <span>
              <h2>David</h2>
              <h3 className="text-center text-2xl font-normal tracking-[0.12em] phone:hidden tablet:hidden desktops:text-lg laptops:text-xs">
                David Fontes Felix
              </h3>
            </span>
          </h2>
          <p className="mt-4 text-2xl leading-relaxed phone:mt-[1vh] phone:text-base tablet:max-w-[80vw] tablet:text-xl tablet:tracking-normal desktops:max-w-[90vw] laptops:max-w-[80vw] ">
            Desde que me lembro, sempre estive fascinado pelo mundo digital e
            pela possibilidade de criar coisas incríveis através da programação.
            A minha jornada no mundo da tecnologia começou quando eu era apenas
            uma criança curiosa, desmontando dispositivos eletrônicos só para
            descobrir como funcionavam. Essa curiosidade me impulsionou a
            explorar diferentes linguagens de programação e a mergulhar de
            cabeça em projetos desafiadores.
          </p>
        </div>
        <div className="mb-8 mt-10 flex gap-[4vh] phone:mt-[3vh] phone:flex-wrap phone:justify-center tablet:hidden details:hidden desktops:gap-[2vh] laptops:hidden">
          <Informations title="Idade" response="17 Anos" />
          <Informations title="Ingles" response="Intermediario" />
          <Informations title="Cargo Atual" response="Freelancer" />
        </div>
      </div>
      <div className="animation-bounce -z-0 phone:-ml-[5vw] phone:w-full tablet:mt-[5vh] details:mt-[5vh] laptops:mt-[5vh]">
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

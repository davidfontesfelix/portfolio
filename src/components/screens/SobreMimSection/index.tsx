import Image from 'next/image'
import Informations from './Informations'
import Heading from '@/components/Heading'

export default function SobreMimSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 phoneSm:ml-4 phoneSm:mr-4 phone:ml-4 phone:mr-4 tablet:ml-4 laptops:ml-14">
      <div className="z-10 max-w-[60rem]">
        <div>
          <Heading>Sobre</Heading>
          <h2 className="mt-4 flex gap-2 font-medium phoneSm:text-2xl phone:text-3xl tablet:text-5xl laptops:text-7xl">
            Olá, meu nome é
            <span>
              <h2>David</h2>
              <h3 className="text-center text-2xl font-normal phoneSm:hidden phone:hidden tablet:text-sm laptops:text-lg laptops:tracking-[0.12em] ">
                David Fontes Felix
              </h3>
            </span>
          </h2>
          <p className="mt-2 max-w-[95%] phone:text-base tablet:max-w-xl tablet:text-xl tablet:tracking-normal laptops:text-2xl  ">
            Desde que me lembro, sempre estive fascinado pelo mundo digital e
            pela possibilidade de criar coisas incríveis através da programação.
            A minha jornada no mundo da tecnologia começou quando eu era apenas
            uma criança curiosa, desmontando dispositivos eletrônicos só para
            descobrir como funcionavam. Essa curiosidade me impulsionou a
            explorar diferentes linguagens de programação e a mergulhar de
            cabeça em projetos desafiadores.
          </p>
        </div>
        <div className="mb-6 mt-10 flex gap-6 smHeight:hidden phoneSm:mt-4 phoneSm:flex-wrap phoneSm:gap-4 phone:mt-4 phone:flex-wrap phone:gap-4 tablet:max-w-[34rem] tablet:flex-wrap">
          <Informations title="Idade" response="17 Anos" />
          <Informations title="Ingles" response="Intermediário" />
          <Informations title="Cargo Atual" response="Freelancer" />
        </div>
      </div>
      <div className="animation-bounce -z-0">
        <Image
          width={400}
          height={400}
          className="w-full phone:max-w-xl"
          src={'/assets/arte.png'}
          alt=""
        />
      </div>
    </section>
  )
}

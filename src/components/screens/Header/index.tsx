import ButtonHeader from './ButtonHeader'
import Tech from './Tech'

export default function Header() {
  return (
    <div className="max-w-[33em] phone:max-w-xs tablet:max-w-sm">
      <h2 className="text-3xl font-medium tracking-[0.15em] phone:text-lg tablet:text-xl tablet:tracking-[0.22em]">
        Olá, sou o David
      </h2>
      <div className="flex">
        <h1 className="flex flex-col text-8xl font-semibold phone:text-6xl tablet:text-7xl">
          REACT
        </h1>
        <div className="flex gap-4 phone:gap-2">
          <Tech
            animation={true}
            src="/assets/svgs/React.svg"
            alt="icone do React"
          />
          <Tech src="/assets/svgs/Typescript.svg" alt="icone do TypeScript" />
          <Tech src="/assets/svgs/Javascript.svg" alt="icone do JavaScript" />
        </div>
      </div>
      <h1 className="flex flex-col text-8xl font-semibold phone:text-6xl tablet:text-7xl">
        DEVELOPER
      </h1>
      <p className="ml-36 mt-2 text-sm phone:ml-0 tablet:ml-0">
        Tenho 17 anos e sou desenvolvedor front end com 7 meses de experiencia
        trabalhando como freelancer.
      </p>
      <div className="z-10 mt-[8vh] flex justify-center">
        <ButtonHeader title="click para navegar" />
      </div>
    </div>
  )
}

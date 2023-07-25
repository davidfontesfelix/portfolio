import ButtonHeader from './ButtonHeader'
import Tech from './Tech'

export default function Header() {
  return (
    <header className="ml-[20%] mr-[20%]">
      <h2 className="text-4xl font-medium tracking-wide phoneSm:text-lg phone:text-xl phone:tracking-widest">
        Olá, sou o David
      </h2>
      <div className="flex">
        <h1 className="flex text-5xl font-semibold phone:text-6xl horizontal:text-6xl tablet:text-8xl laptops:text-8xl">
          REACT
        </h1>
        <div className="flex gap-4 phoneSm:gap-2 phone:gap-2">
          <Tech
            animation={true}
            src="/assets/svgs/React.svg"
            alt="icone do React"
          />
          <Tech src="/assets/svgs/Typescript.svg" alt="icone do TypeScript" />
          <Tech src="/assets/svgs/Javascript.svg" alt="icone do JavaScript" />
        </div>
      </div>
      <h1 className="flex flex-col text-5xl font-semibold phone:text-6xl horizontal:text-6xl tablet:text-8xl laptops:text-8xl">
        DEVELOPER
      </h1>
      <div className="flex tablet:justify-end laptops:justify-end">
        <p className="w-full max-w-xs leading-5 phone:max-w-none tablet:max-w-md laptops:max-w-md">
          Tenho 17 anos e sou desenvolvedor front-end com 7 meses de experiência
          trabalhando como freelancer.
        </p>
      </div>
      <div className="z-10 mt-12 flex justify-center">
        <ButtonHeader>Clique para navegar</ButtonHeader>
      </div>
    </header>
  )
}

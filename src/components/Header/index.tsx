'use client'
import ReactIcon from '../../assets/React.svg'
import TypeScriptIcon from '../../assets/typescript1.svg'
import JavaScriptIcon from '../../assets/javascript.svg'

// interface HeaderProps {}

import Image from 'next/image'
import ButtonHeader from './ButtonHeader'

export default function Header(/* props: HeaderProps */) {
  return (
    <div className="max-w-[33em] tablet:max-w-sm phone:max-w-xs">
      <h2 className="text-3xl tablet:text-xl phone:text-lg font-medium tracking-[0.15em] tablet:tracking-[0.22em]">
        Olá, sou o David
      </h2>
      <div className="flex">
        <h1 className="text-8xl tablet:text-7xl phone:text-6xl flex flex-col font-semibold">
          REACT
        </h1>
        <div className="flex gap-3 phone:gap-2">
          <Image
            className="flex w-16 tablet:w-12 phone:w-10 animate-[spin_4s_linear_infinite] transition-transform"
            src={ReactIcon}
            alt="react"
          />
          <Image
            className="flex w-16 tablet:w-12 phone:w-10"
            src={TypeScriptIcon}
            alt="react"
          />
          <Image
            className="flex w-16 tablet:w-12 phone:w-10"
            src={JavaScriptIcon}
            alt="react"
          />
        </div>
      </div>
      <h1 className="text-8xl tablet:text-7xl phone:text-6xl flex flex-col font-semibold">
        DEVELOPER
      </h1>
      <p className="ml-36 tablet:ml-0 phone:ml-0 text-sm">
        Tenho 17 anos, sou desenvolvedor front end com 7 meses de experiencia
        trabalhando como freelancer.
      </p>
      <div className="flex mt-[8vh] z-10 justify-center">
        <ButtonHeader title="click para navegar" />
      </div>
    </div>
  )
}

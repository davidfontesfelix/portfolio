'use client'
import Heading from '@/components/Heading'
import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

interface projetoDataType {
  desktop: string
  mobile: string
  title: string
  techs: Array<string>
  description: string
  link: string
  blackOrWithe: string
}

interface projetos {
  projeto1: projetoDataType
  projeto2: projetoDataType
  projeto3: projetoDataType
}

export default function Carousel() {
  const [showCard1, setShowCard1] = useState(false)
  const [showCard2, setShowCard2] = useState(true)
  const [showCard3, setShowCard3] = useState(false)
  const [dataProjetos, setDataProjetos] = useState<projetos>()
  const [load, setLoad] = useState(true)

  useEffect(() => {
    axios
      .get('https://backend-portfolio-one.vercel.app/projects')
      .then((response) => {
        setDataProjetos(response.data)
        setLoad(false)
      })
  }, [])

  const previousProject = () => {
    if (showCard1) {
      return 0
    } else {
      if (!showCard2) {
        setShowCard2(true)
        setShowCard3(false)
      } else {
        setShowCard1(true)
        setShowCard2(false)
      }
    }
  }
  const nextProject = () => {
    if (showCard3) {
      return 0
    } else {
      if (!showCard2) {
        setShowCard1(false)
        setShowCard2(true)
      } else {
        setShowCard3(true)
        setShowCard2(false)
      }
    }
  }

  return (
    <>
      <Heading>Projetos</Heading>
      <div className="flex items-center smHeight:mt-0 phoneSm:mt-0 phone:mt-2">
        <button
          aria-label="voltar projeto"
          onClick={() => previousProject()}
          className=" z-10 -mr-9 hidden flex-col items-center justify-center phoneSm:mr-2 phoneSm:flex phone:flex"
        >
          <div className="-mb-1 h-10 w-1 rotate-[20deg] bg-black"></div>
          <div className="h-10 w-1 -rotate-[20deg] bg-black"></div>
        </button>
        <div className="relative flex w-[82vw] max-w-[900px] justify-center overflow-hidden phone:w-[400px] tablet:w-[85vw]">
          <div
            onClick={() => previousProject()}
            className={`${
              showCard1 && 'opacity-0'
            } absolute left-0 z-10 h-full w-[200px] transition-all duration-500 phoneSm:hidden  phone:hidden laptops:w-[150px]`}
            style={{
              background:
                'linear-gradient(90deg, rgba(28, 28, 28, 0.70) 0%, rgba(217, 217, 217, 0.00) 100%)',
            }}
          />
          <div
            onClick={() => nextProject()}
            className={`${
              showCard3 && 'opacity-0'
            } absolute right-0 z-10 h-full w-[200px] transition-all duration-500 phoneSm:hidden phone:hidden laptops:w-[150px]`}
            style={{
              background:
                'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, rgba(28, 28, 28, 0.71) 92.19%)',
            }}
          />
          <div
            className={`flex ${
              showCard1 &&
              'translate-x-[400px] smHeight:translate-x-[320px] phoneSm:translate-x-[260px] phone:translate-x-[300px] tablet:translate-x-[300px]'
            } ${
              showCard2 &&
              'translate-x-[0px] smHeight:-translate-x-[0px] phoneSm:translate-x-[0px] phone:translate-x-[10px] tablet:translate-x-[0px]'
            } ${
              showCard3 &&
              '-translate-x-[400px] smHeight:-translate-x-[320px] phoneSm:-translate-x-[260px] phone:-translate-x-[280px] tablet:-translate-x-[300px]'
            } transition-transform duration-1000 `}
          >
            <Card
              show={showCard1}
              data={dataProjetos?.projeto1}
              loading={load}
            />
            <Card
              show={showCard2}
              data={dataProjetos?.projeto2}
              loading={load}
            />
            <Card
              show={showCard3}
              data={dataProjetos?.projeto3}
              loading={load}
            />
          </div>
        </div>
        <button
          aria-label="proximo projeto"
          onClick={() => nextProject()}
          className=" z-10 -ml-5 hidden flex-col items-center justify-center phoneSm:ml-2 phoneSm:flex phone:flex"
        >
          <div className="-mb-1 h-10 w-1 -rotate-[20deg] bg-black"></div>
          <div className="h-10 w-1 rotate-[20deg] bg-black"></div>
        </button>
      </div>
    </>
  )
}

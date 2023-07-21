'use client'
import Heading from '@/components/Heading'
import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

interface projeto {
  desktop: string
  mobile: string
  title: string
  techs: Array<string>
  description: string
  link: string
}

export default function Carousel() {
  const [showCard1, setShowCard1] = useState(false)
  const [showCard2, setShowCard2] = useState(true)
  const [showCard3, setShowCard3] = useState(false)
  const [dataProjeto1, setDataProjeto1] = useState<projeto>()
  const [dataProjeto2, setDataProjeto2] = useState<projeto>()
  const [dataProjeto3, setDataProjeto3] = useState<projeto>()
  const [load, setLoad] = useState(false)

  const dataFetch = async () => {
    const response = await axios.get(
      'https://backend-portfolio-one.vercel.app/projects',
    )

    setDataProjeto1(response.data.projeto1)
    setDataProjeto2(response.data.projeto2)
    setDataProjeto3(response.data.projeto3)
    setLoad(true)
  }
  useEffect(() => {
    dataFetch()
  }, [])

  const backProject = () => {
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
  if (!load) {
    return (
      <div className="flex h-full w-full items-center justify-center  bg-white">
        <div className="h-16 w-16 animate-spin rounded-[50%] border-4 border-b-blueProject "></div>
      </div>
    )
  } else {
    return (
      <>
        <Heading>Projetos</Heading>
        <div className="flex items-center">
          <button
            aria-label="voltar projeto"
            onClick={() => backProject()}
            className=" z-10 -mr-9 hidden flex-col items-center justify-center phone:flex phoneSm:-mr-[52px] tablet:flex"
          >
            <div className="-mb-1 h-10 w-1 rotate-[20deg] bg-black"></div>
            <div className="h-10 w-1 -rotate-[20deg] bg-black"></div>
          </button>
          <div className="relative flex w-[82vw] max-w-[900px] justify-center overflow-hidden phone:w-[400px] tablet:w-[400px]">
            <div
              onClick={() => backProject()}
              className={`${
                showCard1 && 'opacity-0'
              } absolute left-0 z-10 h-full w-[300px] transition-all duration-500 phone:hidden tablet:hidden laptops:w-[150px]`}
              style={{
                background:
                  'linear-gradient(90deg, rgba(28, 28, 28, 0.70) 0%, rgba(217, 217, 217, 0.00) 100%)',
              }}
            />
            <div
              onClick={() => nextProject()}
              className={`${
                showCard3 && 'opacity-0'
              } absolute right-0 z-10 h-full w-[300px] transition-all duration-500 phone:hidden tablet:hidden laptops:w-[150px] `}
              style={{
                background:
                  'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, rgba(28, 28, 28, 0.71) 92.19%)',
              }}
            />
            <div
              className={`flex ${
                showCard1 &&
                'translate-x-[400px] phone:translate-x-[300px] tablet:translate-x-[300px]'
              } ${
                showCard2 &&
                'translate-x-[0px] phone:translate-x-[10px] tablet:translate-x-[10px]'
              } ${
                showCard3 &&
                '-translate-x-[400px] phone:-translate-x-[280px] tablet:-translate-x-[280px]'
              } transition-transform duration-1000 `}
            >
              <Card show={showCard1} data={dataProjeto1} />
              <Card show={showCard2} data={dataProjeto2} />
              <Card show={showCard3} data={dataProjeto3} />
            </div>
          </div>
          <button
            aria-label="proximo projeto"
            onClick={() => nextProject()}
            className=" z-10 -ml-5 hidden flex-col items-center justify-center phone:flex phoneSm:-ml-8 tablet:flex"
          >
            <div className="-mb-1 h-10 w-1 -rotate-[20deg] bg-black"></div>
            <div className="h-10 w-1 rotate-[20deg] bg-black"></div>
          </button>
        </div>
      </>
    )
  }
}

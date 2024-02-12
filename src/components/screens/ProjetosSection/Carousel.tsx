'use client'
import Heading from '@/components/Heading'
import { useEffect, useReducer, useState } from 'react'
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

interface Projetos {
  projeto1: projetoDataType
  projeto2: projetoDataType
  projeto3: projetoDataType
}

interface AppState {
  cardSelected: number
}

type Action = { type: 'nextProject' } | { type: 'previousProject' }

const reducer = (selectCard: AppState, action: Action) => {
  switch (action.type) {
    case 'nextProject':
      return {
        cardSelected: selectCard.cardSelected + 1,
      }
    case 'previousProject':
      return {
        cardSelected: selectCard.cardSelected - 1,
      }
    default:
      return selectCard
  }
}

export default function Carousel() {
  const [selectCard, dispatch] = useReducer(reducer, { cardSelected: 2 })
  const [dataProjetos, setDataProjetos] = useState<Projetos>()
  const [load, setLoad] = useState(true)

  useEffect(() => {
    axios
      .get('https://backend-portfolio-one.vercel.app/projects')
      .then((response) => {
        setDataProjetos(response.data.Projects)
        setLoad(false)
      })
  }, [])

  return (
    <>
      <Heading>Projetos</Heading>
      <div className="flex items-center smHeight:mt-0 phoneSm:mt-0 phone:mt-2">
        <button
          aria-label="voltar projeto"
          onClick={() => dispatch({ type: 'previousProject' })}
          className={` ${
            selectCard.cardSelected === 1 && 'invisible opacity-0'
          } z-10 -mr-9 hidden flex-col items-center justify-center phoneSm:mr-2 phoneSm:flex phone:flex`}
        >
          <div className="-mb-1 h-10 w-1 rotate-[20deg] bg-black"></div>
          <div className="h-10 w-1 -rotate-[20deg] bg-black"></div>
        </button>
        <div className="relative flex w-[82vw] max-w-[900px] justify-center overflow-hidden phone:w-[400px] tablet:w-[85vw]">
          <div
            onClick={() => dispatch({ type: 'previousProject' })}
            className={`${
              selectCard.cardSelected === 1 && 'invisible opacity-0'
            } absolute left-0 z-10 h-full w-[200px] transition-all duration-500 phoneSm:hidden  phone:hidden laptops:w-[150px]`}
            style={{
              background:
                'linear-gradient(90deg, rgba(28, 28, 28, 0.70) 0%, rgba(217, 217, 217, 0.00) 100%)',
            }}
          />
          <div
            onClick={() => dispatch({ type: 'nextProject' })}
            className={`${
              selectCard.cardSelected === 3 && 'invisible opacity-0'
            } absolute right-0 z-10 h-full w-[200px] transition-all duration-500 phoneSm:hidden phone:hidden laptops:w-[150px]`}
            style={{
              background:
                'linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, rgba(28, 28, 28, 0.71) 92.19%)',
            }}
          />
          <div
            className={`flex ${
              selectCard.cardSelected === 1 &&
              'translate-x-[400px] smHeight:translate-x-[320px] phoneSm:translate-x-[260px] phone:translate-x-[300px] tablet:translate-x-[300px]'
            } ${
              selectCard.cardSelected === 2 &&
              'translate-x-[0px] smHeight:-translate-x-[0px] phoneSm:translate-x-[0px] phone:translate-x-[10px] tablet:translate-x-[0px]'
            } ${
              selectCard.cardSelected === 3 &&
              '-translate-x-[400px] smHeight:-translate-x-[320px] phoneSm:-translate-x-[260px] phone:-translate-x-[280px] tablet:-translate-x-[300px]'
            } transition-transform duration-1000 `}
          >
            <Card
              show={selectCard.cardSelected}
              data={dataProjetos?.projeto1}
              loading={load}
              id={1}
            />
            <Card
              show={selectCard.cardSelected}
              data={dataProjetos?.projeto2}
              loading={load}
              id={2}
            />
            <Card
              show={selectCard.cardSelected}
              data={dataProjetos?.projeto3}
              loading={load}
              id={3}
            />
          </div>
        </div>
        <button
          aria-label="proximo projeto"
          onClick={() => dispatch({ type: 'nextProject' })}
          className={`${
            selectCard.cardSelected === 3 && 'invisible opacity-0'
          } z-10 -ml-5 hidden flex-col items-center justify-center phoneSm:ml-2 phoneSm:flex phone:flex`}
        >
          <div className="-mb-1 h-10 w-1 -rotate-[20deg] bg-black"></div>
          <div className="h-10 w-1 rotate-[20deg] bg-black"></div>
        </button>
      </div>
    </>
  )
}

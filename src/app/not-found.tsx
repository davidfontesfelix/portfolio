'use client'
import { useEffect, useState } from 'react'
// eslint-disable-next-line camelcase
import { Press_Start_2P } from 'next/font/google'
import './404.css'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })

export default function NotFound() {
  const [say, setSay] = useState(false)
  const [nervous, setNervous] = useState(false)
  const [rabid, setRabid] = useState(false)
  const [rabid2, setRabid2] = useState(false)

  const [sentence, setSentence] = useState(
    'Ei, como você veio parar nesse lugar? Deseja voltar para o início?',
  )

  const speech = (temp: number) => {
    setTimeout(() => {
      setSay(true)
      setTimeout(() => {
        setSay(false)
      }, temp)
    }, 1000)
  }

  useEffect(() => {
    speech(4000)
  }, [])

  const handleClickYes = () => {
    if (
      sentence ===
      'Ei, como você veio parar nesse lugar? Deseja voltar para o início?'
    ) {
      window.location.href = '/inicio'
    } else if (
      sentence === 'Não? Acho que não foi isso que você quis dizer...'
    ) {
      setSentence('Encaminharei você para o inicio')
      speech(3000)
      setNervous(false)
      setTimeout(() => {
        window.location.href = '/inicio'
      }, 3000)
    }
  }
  const handleClickNot = () => {
    if (
      sentence ===
      'Ei, como você veio parar nesse lugar? Deseja voltar para o início?'
    ) {
      setSentence('Não? Acho que não foi isso que você quis dizer...')
      speech(4000)
      setNervous(true)
    } else if (
      sentence === 'Não? Acho que não foi isso que você quis dizer...'
    ) {
      setSentence('NÃO??')
      speech(2000)
      setRabid(true)
      setTimeout(() => {
        setSentence('VOCÊ NÃO TEM ESCOLHA!!!')
        speech(4000)
        setRabid2(true)
        setTimeout(() => {
          window.location.href = '/inicio'
        }, 2000)
      }, 1000)
    }
  }
  return (
    <div
      className={` ${pressStart2P.className} flex h-screen w-screen flex-col items-center justify-center bg-[#000]`}
    >
      <h1 className="mb-6 text-8xl text-white/90">404</h1>
      <div className="relative h-[max(24vh,_260px)] w-[80vw] overflow-hidden border-4 border-white/90 text-white/90 phone:w-[90vw]">
        <p className="pl-6 pt-6">{sentence}</p>
        <div
          className={`absolute bottom-8 flex w-full justify-center gap-16 text-5xl phoneSm:text-3xl phone:mt-6  phone:text-3xl`}
        >
          <button onClick={() => handleClickYes()} className="hover:opacity-70">
            Sim
          </button>
          <button onClick={() => handleClickNot()} className="hover:opacity-70">
            Não
          </button>
        </div>
      </div>
      <div className="frame1">
        <div
          className={`${
            rabid2
              ? 'frame5'
              : rabid
              ? 'frame4'
              : say
              ? nervous
                ? 'frame3'
                : 'frame2'
              : nervous
              ? 'frame3'
              : ''
          }`}
        ></div>
      </div>
    </div>
  )
}

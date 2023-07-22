'use client'
import { useEffect, useState } from 'react'
// eslint-disable-next-line camelcase
import { Press_Start_2P } from 'next/font/google'
import './404.css'
import { useRouter } from 'next/navigation'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })

export default function PageNotFound() {
  const [say, setSay] = useState(false)
  const [nervous, setNervous] = useState(false)
  const [rabid, setRabid] = useState(false)
  const [rabid2, setRabid2] = useState(false)

  const router = useRouter()

  const [sentence, setSentence] = useState(
    'Ei, como você veio parar nesse lugar?, deseja voltar para o inicio?',
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
      'Ei, como você veio parar nesse lugar?, deseja voltar para o inicio?'
    ) {
      window.location.href = '/inicio'
    } else if (sentence === 'Não?, acho que não foi isso que você quis dizer') {
      setNervous(false)
      setSentence('Encaminharei você para o inicio')
      speech(3000)
      setTimeout(() => {
        window.location.href = '/inicio'
      }, 3000)
    }
  }
  const handleClickNot = () => {
    if (
      sentence ===
      'Ei, como você veio parar nesse lugar?, deseja voltar para o inicio?'
    ) {
      setNervous(true)
      setSentence('Não?, acho que não foi isso que você quis dizer')
      speech(4000)
    } else if (sentence === 'Não?, acho que não foi isso que você quis dizer') {
      setRabid(true)
      setSentence('NÃO??')
      speech(2000)
      setTimeout(() => {
        setRabid2(true)
        setSentence('VOCÊ NÃO TEM ESCOLHA!!!')
        speech(4000)
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
      <div className=" relative h-[25vh] w-[80vw] overflow-hidden border-4 border-white/90 text-white/90 phone:w-[90vw] details:h-[30vh] desktops:w-[85vw]">
        <p className="pl-6 pt-6">{sentence}</p>
        <div
          className={`${
            say
              ? 'hidden'
              : sentence === 'NÃO??' || sentence === 'VOCÊ NÃO TEM ESCOLHA!!!'
              ? 'hidden'
              : 'flex'
          } mt-14 w-full justify-center gap-16 text-5xl phone:mt-6 phone:text-3xl tablet:mt-10`}
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

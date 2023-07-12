import { MyContextAsideProvider } from '@/context/MyContexAside'
import Aside from '../Aside'
import ButtonAside from '../Aside/ButtonAside'

interface layoutProps {
  local: string
}

export default function Layout({ local }: layoutProps) {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="h-[calc(100vh-20px)] w-[calc(100vw-20px)] bg-white rounded-xl"></div>
      <MyContextAsideProvider>
        <ButtonAside />
        <Aside local={local} />
      </MyContextAsideProvider>
    </div>
  )
}

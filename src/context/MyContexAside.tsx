'use client'
import React, { createContext, useState } from 'react'

interface MyContextProps {
  showAside: boolean
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>
}

const MyContextAside = createContext<MyContextProps>({
  showAside: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowAside: () => {},
})

const MyContextAsideProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [showAside, setShowAside] = useState(false)

  return (
    <MyContextAside.Provider value={{ showAside, setShowAside }}>
      {children}
    </MyContextAside.Provider>
  )
}

export { MyContextAside, MyContextAsideProvider }

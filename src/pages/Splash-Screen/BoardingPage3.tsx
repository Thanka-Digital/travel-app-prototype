import { SplashScreen3Info } from '@/utils/splashScreenInfo';
import { useState } from 'react';
import { BoardingPageLayout } from './components/BoardingPageLayout';

export default function BoardingPage3() {
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <BoardingPageLayout
      bg='bg-splash1'
      handleAction={handleClick}
      link='/4'
      splashInfo={SplashScreen3Info}
      steps='3 of 4 steps'
      disabled={toggledArr.length <= 0}
      titles={title}
    />
  )
}

const title = [
  { titleO: "What kind of weathers", titleT: "you prefer?" }
]
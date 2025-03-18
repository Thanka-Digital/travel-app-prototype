import { SplashScreen1Info } from '@/utils/splashScreenInfo';
import { useState } from 'react';
import { BoardingPageLayout } from './components/BoardingPageLayout';

export default function BoardingPage2() {
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
      link='/2'
      splashInfo={SplashScreen1Info}
      steps='1 of 4 steps'
      disabled={toggledArr.length <= 0}
      titles={title}
    />
  )
}

const title = [
  { titleO: "What kind of traveler", titleT: "are you?" }
]
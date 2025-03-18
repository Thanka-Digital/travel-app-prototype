import { SplashScreen4Info } from '@/utils/splashScreenInfo';
import { useState } from 'react';
import { BoardingPageLayout } from './components/BoardingPageLayout';

export default function BoardingPage4() {
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
      link='/explore-page/all'
      splashInfo={SplashScreen4Info}
      steps='Last step to go'
      disabled={toggledArr.length <= 0}
      titles={title}
    />
  )
}

const title = [
  { titleO: "How often do you", titleT: "travel?" }
]
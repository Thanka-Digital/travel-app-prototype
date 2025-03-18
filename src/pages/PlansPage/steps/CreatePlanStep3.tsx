import { SplashScreen3Info } from '@/utils/splashScreenInfo';
import { useState } from 'react';
import { BoardingPageLayout } from '@/pages/Splash-Screen/components/BoardingPageLayout';

export default function CreatePlanStep1() {
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <BoardingPageLayout
      bg='bg-splash3'
      handleAction={handleClick}
      link='/trip-plan/create/step-4'
      splashInfo={SplashScreen3Info}
      steps='3 of 6 steps'
      disabled={toggledArr.length <= 0}
      titles={title}
    />
  )
}

const title = [
  { titleO: "What sort of weather", titleT: "are you looking at?" }
]
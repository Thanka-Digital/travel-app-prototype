import { SplashScreen2Info } from '@/utils/splashScreenInfo';
import { useState } from 'react';
import { BoardingPageLayout } from '@/pages/Splash-Screen/components/BoardingPageLayout';
import CancelButton from '../components/CancelButton';

export default function CreatePlanStep1() {
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <div>
      <CancelButton />
      <BoardingPageLayout
        bg='bg-splash2'
        handleAction={handleClick}
        link='/trip-plan/create/step-3'
        splashInfo={SplashScreen2Info}
        steps='2 of 6 steps'
        disabled={toggledArr.length <= 0}
        titles={title}
      />
    </div>
  )
}

const title = [
  { titleO: "What type of place", titleT: "you like to visit?" }
]
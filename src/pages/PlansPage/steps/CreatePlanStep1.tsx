import { SplashScreen1Info } from '@/utils/splashScreenInfo';
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
        bg='bg-splash1'
        handleAction={handleClick}
        link='/trip-plan/create/step-2'
        splashInfo={SplashScreen1Info}
        steps='1 of 6 steps'
        disabled={toggledArr.length <= 0}
        titles={title}
      />
    </div>
  )
}

const title = [
  { titleO: "What kind of travel", titleT: "are you planning?" }
]
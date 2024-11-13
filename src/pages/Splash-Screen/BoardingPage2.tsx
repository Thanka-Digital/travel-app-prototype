import Button from '@/components/form/button/Button'
import { SplashScreen2Info } from '@/utils/splashScreenInfo';
import { ChevronsRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashScreenHeader, SplashScreenTags } from './Splash-Screen/BoardingPage1';

export default function BoardingPage2() {
  const navigate = useNavigate();
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <main className='bg-splash2 h-screen'>
      <div className='mask-gradient flex flex-col gap-10 absolute bottom-0 bg-white py-12 px-8'>
        <section className='flex flex-col items-center'>
          <SplashScreenHeader
            text='What Kind of Places'
          />
          <SplashScreenHeader
            text='you like to visit?'
          />
        </section>
        <section className='flex items-center justify-center flex-wrap gap-3 mb-20'>
          {
            SplashScreen2Info.map((object) => (
              <SplashScreenTags
                icon={object.icon}
                text={object.text}
                key={object.id}
                handleClick={handleClick}
              />
            ))
          }
        </section>
      </div>

      <section className='flex w-full px-8 justify-between items-center absolute bottom-2'>
        <p className='text-secondary'>1 of 4 steps</p>
        <Button
          className='rounded-3xl'
          disabled={toggledArr.length <= 0}
          onClick={() => {
            navigate('/3')
          }}
        >Next <ChevronsRight /></Button>
      </section>
    </main>
  )
}
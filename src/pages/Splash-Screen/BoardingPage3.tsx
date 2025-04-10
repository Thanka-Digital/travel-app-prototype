import Button from '@/components/form/button/Button'
import { SplashScreen3Info } from '@/utils/splashScreenInfo';
import { ChevronsRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashScreenHeader, SplashScreenTags } from './BoardingPage1';

export default function BoardingPage3() {
  const navigate = useNavigate();
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <main className='bg-splash3 h-screen'>
      <div className='mask-gradient flex flex-col gap-10 absolute bottom-0 bg-white py-12 px-8'>
        <section className='flex flex-col items-center'>
          <SplashScreenHeader
            text='What Kind of weathers'
          />
          <SplashScreenHeader
            text='you prefer?'
          />
        </section>
        <section className='flex items-center justify-center flex-wrap gap-3 mb-20'>
          {
            SplashScreen3Info.map((object) => (
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
        <p className='text-secondary'>3 of 4 steps</p>
        <Button
          className='rounded-3xl'
          disabled={toggledArr.length <= 0}
          onClick={() => {
            navigate('/4')
          }}
        >Next <ChevronsRight /></Button>
      </section>
    </main>
  )
}
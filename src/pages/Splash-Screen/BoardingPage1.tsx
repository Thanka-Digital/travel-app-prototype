import Button from '@/components/form/button/Button'
import { SplashScreen1Info } from '@/utils/splashScreenInfo';
import { ChevronsRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SplashScreenProps {
  icon?: React.ReactNode;
  text: string;
  handleClick: (val: string, isSelected: boolean) => void;
}

export const SplashScreenHeader = ({ text }: { text: string }) => {
  return (
    <p className='text-2xl font-medium text-black'>
      {text}
    </p>
  )
}

export const SplashScreenTags = (props: SplashScreenProps) => {
  const {
    icon,
    text,
    handleClick
  } = props;
  return (
    <label className="inline-flex">
      <input type="checkbox" className="hidden peer" onClick={(e) => handleClick(text, e.currentTarget.checked)} />
      <div className="p-2 rounded-lg bg-white text-secondary border-2 peer-checked:border-primary peer-checked:text-primary transition duration-200">
        <span className='flex gap-1 items-center'>
          {icon}
          <p className='text-sm'>
            {text}
          </p>
        </span>
      </div>
    </label>
  )
}

export default function BoardingPage1() {
  const navigate = useNavigate();
  const [toggledArr, setToggleArr] = useState<string[]>([])

  function handleClick(val: string, isSelected: boolean) {
    isSelected ?
      setToggleArr(prev => ([...prev, val]))
      :
      setToggleArr((prev) => prev.filter(t => t !== val))
  }

  return (
    <main className='bg-splash1 h-screen'>
      <div className='mask-gradient flex flex-col gap-10 absolute bottom-0 bg-white py-12 px-8'>
        <section className='flex flex-col items-center'>
          <SplashScreenHeader
            text='What Kind of traveler'
          />
          <SplashScreenHeader
            text='are you?'
          />
        </section>
        <section className='flex items-center justify-center flex-wrap gap-3 mb-20'>
          {
            SplashScreen1Info.map((object) => (
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
            navigate('/2')
          }}
        >Next <ChevronsRight /></Button>
      </section>
    </main>
  )
}
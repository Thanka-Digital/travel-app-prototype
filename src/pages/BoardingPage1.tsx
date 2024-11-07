import Button from '@/components/form/button/Button'
import { SplashScreen1Info } from '@/utils/splashScreenInfo';

interface SplashScreenProps {
  icon?: React.ReactNode;
  text: string;
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
    text
  } = props;
  return (
    <label className="inline-flex">
      <input type="checkbox" className="hidden peer" />
      <div className="px-4 py-2 rounded-lg bg-white text-secondary border-2 peer-checked:border-primary peer-checked:text-primary transition duration-200">
        <span className='flex gap-2 items-center'>
          {icon}
          <p>
            {text}
          </p>
        </span>
      </div>
    </label>
  )
}

export default function BoardingPage1() {
  return (
    <main className='bg-splash1 h-screen'>
      <SplashScreenHeader
        text='What Kind of traveeler are you?'
      />
      <Button
        className='rounded-3xl'
        onClick={() => {
        }}
      >Next</Button>
      <section className='grid grid-cols-3 gap-4'>
        {
          SplashScreen1Info.map((object) => (
            <SplashScreenTags
              icon={object.icon}
              text={object.text}
              key={object.id}
            />
          ))
        }
      </section>
    </main>
  )
}
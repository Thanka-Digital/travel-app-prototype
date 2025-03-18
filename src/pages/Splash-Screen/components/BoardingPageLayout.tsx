import Button from '@/components/form/button/Button'
import { ChevronsRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type splashTypes = {
  id: number;
  text: string;
  icon?: React.ReactNode
}

type title = {
  titleO: string;
  titleT: string;
}

interface BoardingPageLayoutProps {
  steps: string;
  link: string;
  titles: title[];
  bg: string;
  splashInfo: splashTypes[];
  disabled: any;
  handleAction: (val: string, isSelected: boolean) => void;
}

export const BoardingPageLayout = (props: BoardingPageLayoutProps) => {
  const {
    link,
    steps,
    splashInfo,
    titles,
    bg,
    handleAction,
    disabled,
  } = props;

  const navigate = useNavigate();

  return (
    <main className={`relative ${bg} h-screen`}>
      <div className='absolute bottom-0'>
        <div className='mask min-h-[100px] bg-white' />
        <div className='flex flex-col gap-10 bg-white pb-10 px-8'>
          {
            titles.map((t, i) => (
              <section className='flex flex-col items-center' key={i}>
                <p className='text-2xl font-medium text-black'>
                  {t.titleO}
                </p>
                <p className='text-2xl font-medium text-black'>
                  {t.titleT}
                </p>
              </section>
            )
            )
          }
          <section className='flex items-center justify-center flex-wrap gap-2 mb-24'>
            {
              splashInfo.map((object) => (
                <label className="inline-flex" key={object.id}>
                  <input type="checkbox" className="hidden peer" onClick={(e) => handleAction(object.text, e.currentTarget.checked)} />
                  <div className="p-2 rounded-lg bg-white text-secondary border-2 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 transition duration-200">
                    <span className='flex gap-1 items-center'>
                      {object.icon}
                      <p className='text-sm'>
                        {object.text}
                      </p>
                    </span>
                  </div>
                </label>
              ))
            }
          </section>
        </div>

        <section className='flex w-full px-8 justify-between items-center absolute bottom-3'>
          <p className='text-secondary'>{steps}</p>
          <Button
            className='rounded-3xl'
            disabled={disabled}
            onClick={() => {
              navigate(link)
            }}
          >Next <ChevronsRight /></Button>
        </section>
      </div>
    </main>
  )
}
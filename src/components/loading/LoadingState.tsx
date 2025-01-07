import { useEffect, useState } from "react"

interface LoadingStateProps {
  children: React.ReactNode
}

export const LoadingState = (props: LoadingStateProps) => {
  const {
    children
  } = props;

  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(handleLoad, [])

  return (
    <div>
      {
        loading ?
          <div className="relative h-[40vh] rounded-md bg-gray-300">
            <div className="animate-pulse flex space-x-4">
              <div className="absolute top-3 left-3 rounded-full bg-white w-32 h-10 opacity-70">
              </div>
              <div className="absolute bottom-5 left-0 flex flex-col gap-5">
                <div
                  className="rounded-full bg-white w-20 h-2 opacity-70"
                />
                <div
                  className="rounded-full bg-white w-16 h-2 opacity-70"
                />
              </div>
              <div
                className="absolute bottom-6 right-5 rounded-full bg-white w-28 h-10 opacity-70"
              />
            </div>
          </div>
          :
          <>{children}</>
      }
    </div>
  )
}
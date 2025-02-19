import { useEffect, useState } from "react"

interface LoadingStateProps {
  children: React.ReactNode
}

export const AddPostLoadingState = (props: LoadingStateProps) => {
  const {
    children
  } = props;

  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }

  useEffect(handleLoad, [])

  return (
    <div>
      {
        loading ?
          <div className="relative h-[40vh] rounded-md bg-gray-300">
            Uploading
          </div>
          :
          <>{children}</>
      }
    </div>
  )
}
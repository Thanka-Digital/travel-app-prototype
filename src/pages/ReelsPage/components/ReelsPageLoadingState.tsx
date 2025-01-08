import { Loader } from "lucide-react";
import { useEffect, useState } from "react"

interface LoadingStateProps {
  children: React.ReactNode
}

export const ReelsPageLoadingState = (props: LoadingStateProps) => {
  const {
    children
  } = props;

  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

  useEffect(handleLoad, [])

  return (
    <div>
      {
        loading ?
          <div className="bg-transparent flex items-center justify-center">
            <Loader />
          </div>
          :
          <>{children}</>
      }
    </div>
  )
}
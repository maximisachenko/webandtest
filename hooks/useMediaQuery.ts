import { useEffect, useState } from "react"


const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const updateMatch = () => setMatches(mediaQueryList.matches)

    updateMatch() // проверяем при монтировании компонента

    mediaQueryList.addEventListener('change', updateMatch)

    return () => {
      mediaQueryList.removeEventListener('change', updateMatch)
    }
  }, [query])

  return matches
}

export default useMediaQuery

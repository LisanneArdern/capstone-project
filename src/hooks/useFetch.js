import { useEffect, useState } from 'react'
import { searchCrops } from '../utils/cropsApi'

export default function useFetch(searchTerm) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const isQuerying = data === null

  useEffect(() => {
    let isMounted = true

    setData(null)
    setError(null)

    searchCrops(searchTerm).then(result => {
      if (!isMounted) return
      setData(result.data)
      setError(result.error)
    })

    return () => {
      isMounted = false
    }
  }, [searchTerm])

  return { data, isQuerying, error }
}

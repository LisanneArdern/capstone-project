import { useEffect, useState } from 'react'
import { getCropDetails } from '../utils/cropsApi'

export default function useCropDetails(id) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const isQuerying = data === null

  useEffect(() => {
    let isMounted = true

    setData(null)
    setError(null)

    getCropDetails(id).then(result => {
      if (!isMounted) return
      setData(result.data)
      setError(result.error)
    })

    return () => {
      isMounted = false
    }
  }, [id])

  return { data, isQuerying, error }
}

import { useEffect, useState } from 'react'
import { fetchCrops } from '../services/cropsApi'

export default function useFetch(searchTerm) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const isQuerying = data === null && error === null

  useEffect(() => {
    setData(null)
    setError(null)
    fetchCrops(searchTerm)
      .then(data => setData(data))
      .catch(error => setError(error.message))
  }, [searchTerm])

  return { data, error, isQuerying }
}

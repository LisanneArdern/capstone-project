import { useEffect, useState } from 'react'
import { fetchCrop } from '../services/cropsApi'

export default function useCropDetails(id) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const isQuerying = data === null && error === null

  useEffect(() => {
    setData(null)
    setError(null)
    fetchCrop(id)
      .then(data => setData(data))
      .catch(error => setError(error.message))
  }, [id])

  return { data, error, isQuerying }
}

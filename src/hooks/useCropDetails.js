import { useEffect, useState } from 'react'

export default function useCropDetails(id) {
  const [data, setData] = useState(null)
  const isQuerying = data === null

  useEffect(() => {
    fetch(`https://openfarm.cc/api/v1/crops/${id}/`)
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(error => console.error(error))
  }, [id])

  return { data, isQuerying }
}

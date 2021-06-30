import { useEffect, useState } from 'react'

export default function useFetch(searchTerm) {
  const [data, setData] = useState(null)
  const isQuerying = data === null

  useEffect(() => {
    fetch(`https://openfarm.cc/api/v1/crops/?filter=${searchTerm}`)
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(error => console.error(error))
  }, [searchTerm])

  return { data, isQuerying }
}

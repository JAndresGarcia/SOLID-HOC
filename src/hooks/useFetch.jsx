import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Failed Fetch')
                }
                const fetchData = await response.json()
                setData(fetchData)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        };

        getData()
    }, [url])


    return { data, error, loading }
}
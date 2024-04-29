import { useState, useEffect, Fragment } from "react"
import Loader from "./Ui/Loader"

function DataLoader({ url, children }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error("Fehler beim Verbinden zu den Daten")
                const json = await response.json()
                setData(json)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    if (loading) return <Loader />
    if (error) return <p>Fehler: {error}</p>
    return (
        <Fragment>
            {data && data.map((item, index) => (
                <Fragment key={index}>{children(item)}</Fragment>
            ))}
        </Fragment>
    )
}

export default DataLoader

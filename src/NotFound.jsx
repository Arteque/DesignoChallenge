import { useRouteError } from "react-router-dom"
function NotFound() {

    const error = useRouteError()
    console.error(error)

  return (
    <div className="wrapper">
        <h1>Oulla!!!</h1>
        <p>
            Sorry, an unexpected error has occurred.
        </p>
        <i>
            {error.statusText || error.message}
        </i>
    </div>
  )
}

export default NotFound
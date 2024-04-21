import { Link } from "react-router-dom"
function Buttons({variant, children, ...props}) {

    switch(variant){
        case "dark" : variant = "dark"
        break

        case "light": variant = "light"
        break

        default : variant = "dark"
    }

  return (
    <Link  
    className={`btn btn-call radius ${variant == 'dark' ? "dark" : "light"}`} 
    {...props}>{children}</Link>
  )
}
export default Buttons
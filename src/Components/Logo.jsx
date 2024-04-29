import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import './Styling/Logo.scss'
function Logo({location}) {

    useEffect(()=>{
    
        switch(location){
            case "header" : location ="header"
            break

            case "footer": location = "footer"
            break

            default: location = "header"
        }
    
    },[location])

    if(location == "header"){
        return <Link to="/" className="logo" location={location}>
            <img src="./public/shared/desktop/logo-dark.png" alt="Designo" />
      </Link>
    } else{
        return <Link to="/" className="logo" location={location}>
        <img src="./public/shared/desktop/logo-light.png" alt="Designo" />
  </Link>
    }

}
Logo.propTypes = {
    location: PropTypes.string
}
export default Logo
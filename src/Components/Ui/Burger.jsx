import PropTypes from 'prop-types'
import "../Styling/Burger.scss"
import {motion} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Burger({status, handleClick, ...props}) {

    return <motion.button 
    whileTap={{ scale:0.9 }}
    className={`burger ${status}`} 
    onClick={handleClick} 
    {...props}>
    {
        status == "open" ? (
            <FontAwesomeIcon 
            
            icon={faBars} />
        ) : (
            <FontAwesomeIcon 
            icon={faXmark} />
        )
    }
    </motion.button>
 
}



Burger.defaultProps = {
    status: "open"
}


Burger.propTypes = {
    status: PropTypes.oneOf(['open', 'close']).isRequired,
    handleClick: PropTypes.func
}



export default Burger
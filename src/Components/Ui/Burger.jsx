import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
function Burger({status, handleClick, ...props}) {
    return <button className={`burger ${status}`} onClick={(e) => {handleClick(e)}} {...props}>
    {
        status == "open" ? (
            <FontAwesomeIcon icon={faBars} />
        ) : (
            <FontAwesomeIcon icon={faXmark} />
        )
    }
    </button>
 
}



Burger.defaultProps = {
    status: "open"
}


Burger.propTypes = {
    status: PropTypes.oneOf(['open', 'close']).isRequired
}

export default Burger
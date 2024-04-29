import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "../Styling/FullCard.scss"
function FullCard({bgImg, cardTitle, url, urlTitle, ...props}) {
  return (
    <div className={`card-container full-card ${bgImg}`} {...props}>
         <div className="content">
             <h2 className="txt-light-100">{cardTitle}</h2>
             <Link to={url}>
                 <span className="text">
                     {urlTitle}
                 </span>
                 <span className="icon">
                     <FontAwesomeIcon icon={faAngleRight} />
                 </span>
             </Link>
         </div>
     </div>
  )
}
FullCard.propTypes = {
    bgImg: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    url:PropTypes.string,
    urlTitle:PropTypes.string,
}
export default FullCard
import  PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import "./Styling/Card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



function Card({variant, bgImg, cardTitle, cardText, url, urlTitle, imgSrc, imgAlt, ...props}) {
  return<> 
  { variant == 'full' ? (
    
    <div className={`card-container ${bgImg}`} {...props}>
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
   
):(
    <div className={`card-container img-as-header`} {...props}>
         <div className="card-header">
            <img src={imgSrc} alt={imgAlt} />
         </div>
         <div className="card-body">
            <h2>
                {cardTitle}
            </h2>
            <p>
                {cardText}
            </p>
         </div>
     </div>   
)}

  
  </>

}

Card.propTypes = {
    variant: PropTypes.string,
    bgImg: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    url:PropTypes.string,
    urlTitle:PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string
}

export default Card
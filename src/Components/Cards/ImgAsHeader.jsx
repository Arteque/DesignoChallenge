import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ImgAsHeader({imgSrc, imgAlt, cardTitle, cardText, ...props}) {
  return (
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
  )
}

export default ImgAsHeader
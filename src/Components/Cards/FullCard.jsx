import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function FullCard({bgImg, cardTitle, url, urlTitle, ...props}) {
  return (
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
  )
}

export default FullCard
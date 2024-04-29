import PropTypes from 'prop-types'
import "../Styling/ImgAsHeader.scss"
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

ImgAsHeader.propTypes = {
  bgImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}

export default ImgAsHeader
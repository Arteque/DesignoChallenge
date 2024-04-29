import  PropTypes from 'prop-types'
import "./Styling/Card.scss"

import ImgAsHeader from './Cards/ImgAsHeader';
import FullCard from './Cards/FullCard';


function Card({variant, bgImg, cardTitle, cardText, url, urlTitle, imgSrc, imgAlt, ...props}) {
  return<> 
{ 
  variant == 'full' ? (
        <FullCard bgImg={bgImg} url={url} urlTitle={urlTitle} cardTitle={cardTitle}{...props}/>  
    )
     :(
        <ImgAsHeader cardTitle={cardTitle} cardText={cardText} imgSrc={imgSrc} imgAlt={imgAlt} />
  )
}
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
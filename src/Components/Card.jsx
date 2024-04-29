import  PropTypes from 'prop-types'
import "./Styling/Card.scss"
import ImgAsHeader from './Cards/ImgAsHeader';
import FullCard from './Cards/FullCard';


function Card({variant, bgImg, cardTitle, cardText, url, urlTitle, imgSrc, imgAlt, ...props}) {
  if(variant == 'full') {
    return <FullCard bgImg={bgImg} url={url} urlTitle={urlTitle} cardTitle={cardTitle}{...props}/>  
  }
  else if(variant == "imgAsHeader"){
    return  <ImgAsHeader cardTitle={cardTitle} cardText={cardText} imgSrc={imgSrc} imgAlt={imgAlt} {...props}/>
  }
  else{
    return <FullCard bgImg={bgImg} url={url} urlTitle={urlTitle} cardTitle={cardTitle}{...props}/>  
  }
    

}

Card.defaultProps = {
  variant: "full"
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
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import {MotionConfig, motion} from "framer-motion"
import "./Styling/Nav.scss"


function Nav({burgerStatus}) {

const drt = 0.2

    const navData = [
        {
            id:1,
            name:"Our Company",
            url:"about",
            path:"About",
        },
        {
            id:2,
            name:"Locations",
            url:"locations",
            path:"Locations",
        },
        {
            id:3,
            name:"Contact",
            url:"contact",
            path:"Contact",
        },

    ]

  
    if(burgerStatus == "close"){
        
           return <MotionConfig>
                <motion.nav
                    initial={{opacity:0,y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:drt}}
                >
                    <ul>
                        {
                            navData.map((item, index) => (
                                <motion.li key={item.id}
                                    initial={{y:50,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{ delay: drt + (index * 0.2) }}
                                >
                                    <Link to={item.url}>{item.name}</Link>        
                                </motion.li>
                            ))
                        }
                    </ul>
                </motion.nav>
            </MotionConfig>
          
        }

}

Nav.propTypes = {
    burgerStatus: PropTypes.oneOf(['open', 'close']).isRequired,
}

export default Nav
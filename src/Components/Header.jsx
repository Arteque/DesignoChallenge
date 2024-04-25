import Logo from "./Logo"
import Wrapper from "./Ui/Wrapper"
import { Link } from "react-router-dom"
import Burger from "./Ui/Burger"
import { useState } from "react"

function Header() {

const [burgerStatus, setBurgerStatus] = useState("open")

  const handleClick = () => {
    setBurgerStatus(prevStatus => prevStatus === "open" ? "close" : "open");
  }

  return (
    <header>
        <Wrapper>
          <Logo location="header" />
          <nav>
            <Burger status={burgerStatus} handleClick={handleClick} />
            <ul className={burgerStatus}> 
              <li>
                <Link className="btn" to="/about">Our Company</Link>
              </li>
              <li>
                <Link className="btn" to="/locations">Locations</Link>
              </li>
              <li>  
                <Link className="btn" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </Wrapper>
      </header>
  )
}


export default Header
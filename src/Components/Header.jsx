import Logo from "./Logo"
import Wrapper from "./Ui/Wrapper"
import { Link } from "react-router-dom"
import Burger from "./Ui/Burger"

function Header() {
  return (
    <header>
        <Wrapper>
          <Logo location="header" />
          <nav>
            <Burger status="close" />
            <ul>
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
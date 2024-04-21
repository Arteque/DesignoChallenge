import { Outlet, Link } from "react-router-dom"
import Wrapper from "../Components/Ui/Wrapper"
import Logo from "../Components/Logo"
import Buttons from "../Components/Ui/Buttons"
function Root() {
  return (
    <>
      <header>
        <Wrapper>
          <Logo location="header" />
          <nav>
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

          <Buttons variant="light" to="/">Test</Buttons>
          <Buttons variant="dark" to="/">Test</Buttons>
          <h1 className="heading big">lorem10</h1>
          <h2 className="heading medium">lorem10</h2>
          <h3 className="heading small uppercase">lorem10</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti itaque exercitationem nihil maiores quidem amet iusto neque nulla eaque libero sit enim nemo aspernatur tempora accusantium nam, sequi autem obcaecati adipisci. Ratione odio possimus corporis quis ut quam autem, eius assumenda magni debitis in est fugiat nihil libero culpa?
          </p>
        </Wrapper>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Root
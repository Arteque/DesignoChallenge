import { Link } from "react-router-dom"
import Logo from "./Logo"
import Nav from "./Nav"
import Buttons from "./Ui/Buttons"
import Wrapper from "./Ui/Wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faYoutube, faSquareXTwitter,faPinterest,faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Styling/Footer.scss"
function Footer() {
  return (
    <>
        <section className="pre-footer">
          <Wrapper classes="bg-call-100 txt-light-100">
            <h2>Let&apos;s talk about your project</h2>
            <p>
              Ready to talk it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
            <Buttons variant="light" to="/contact">Get in Touch</Buttons>
          </Wrapper>
        </section>
        <footer className="bg-dark-100">
            <Wrapper>
                <div className="footer-header">
                    <Logo location="footer" />
                    <Nav navPosition="footer" />
                </div>
                <div className="address">
                  <address>
                    <strong>
                       Designo Central Office <br />
                    </strong>
                    <span>
                      3886 Wellington Street <br />
                      Toronto, Ontario M9C 3J5
                    </span>
                  </address>
                </div>
                <div className="contact">
                    <strong>Contact us (Central Office)</strong>
                    <ul>
                      <li>
                        <Link to="tel:+12538638967">P:+1 253-863-8967</Link>
                      </li>
                      <li>
                        <Link to="mailto:contact@design.co">M: contact@designo.co</Link>
                      </li>
                    </ul>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com" target="_blanc">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com" target="_blanc">
                          <FontAwesomeIcon icon={faYoutube} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.twitter.com" target="_blanc">
                          <FontAwesomeIcon icon={faSquareXTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.pinterest.com" target="_blanc">
                          <FontAwesomeIcon icon={faPinterest} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.pinterest.com" target="_blanc">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                  </ul>
                </div>
            </Wrapper>
        </footer>
    </>
  )
}

export default Footer
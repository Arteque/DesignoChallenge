import Wrapper from "../Ui/Wrapper"
import Buttons from "../Ui/Buttons"
import "../Styling/Hero.scss"
function Hero() {
  return (
    <section id="hero-section" className="home">
      <Wrapper classes="bg-call-100 txt-light-100">
          <div className="content">
          <h2>
            Award-winning custom designs and digital branding solutions
          </h2>
          <p>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
          <Buttons variant="light" to="/" title="learn more!" role="button">Learn more</Buttons> 
          </div>
          <div className="media">
            <img src="/home/desktop/image-hero-phone.png" alt="Image Hero Phone" />
          </div>
      </Wrapper>
    </section>
  )
}

export default Hero
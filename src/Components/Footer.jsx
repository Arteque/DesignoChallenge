import Logo from "./Logo"
import Buttons from "./Ui/Buttons"
import Wrapper from "./Ui/Wrapper"
function Footer() {
  return (
    <>
        <section className="pre-footer">
          <Wrapper classes="bg-call-100 txt-light-100">
            <h2>Let's talk about your project</h2>
            <p>
              Ready to talk it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
            <Buttons variant="light" to="/contact">Get in Touch</Buttons>
          </Wrapper>
        </section>
        <footer className="bg-dark-100">
            <Wrapper>
                <Logo location="footer" />
            </Wrapper>
        </footer>
    </>
  )
}

export default Footer
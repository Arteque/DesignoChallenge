import Wrapper from "../Components/Ui/Wrapper"
import Buttons from '../Components/Ui/Buttons'
import Card from "../Components/Card"
function Home() {

  const designCards = [
    {
      id:1,
      title:"Web design",
      url:"webdesign",
      urlText:"View projects"
    },
    
    {
      id:2,
      title:"App design",
      url:"appdesign",
      urlText:"View projects"
    },
    {
      id:3,
      title:"Graphic design",
      url:"graphicdesign",
      urlText:"View Projects"
    },

  ]

  return (
    <>
      <section id="hero-section" className="home">
      <Wrapper>
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
    <section>
        <Wrapper>
            <div className="grid">
                {
                  designCards.map((item) => {
                    return <Card variant="full" key={item.id} bgImg={item.url} cardTitle={item.title} url={item.url} urlTitle={item.urlText}/>
                  })
                }
            </div>
        </Wrapper>
    </section>
    </>
  )
}

export default Home
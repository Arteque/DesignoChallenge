import Wrapper from "../Components/Ui/Wrapper"
import Buttons from '../Components/Ui/Buttons'
import Card from "../Components/Card"
import DataLoader from "../Components/DataLoader"
function Home() {

  const designsUrl = "./JSONS/Designs.json"
  const aboutURl = "./JSONS/AboutHome.json"

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
    <section className="service-section">
        <Wrapper>
            <div className="grid"> 
            <DataLoader url={designsUrl}>
                  {(item) => <Card key={item.id} variant="full" cardTitle={item.title} url={item.url} urlTitle={item.urlText} bgImg={item.url}/>}
               </DataLoader>
            </div>
        </Wrapper>
    </section>

    <section className="about-section">
      <Wrapper>
         <div className="flex">
               <DataLoader url={aboutURl}>
                  {(item) => <Card variant="imgAsHeader" key={item.id}  imgSrc={item.img} imgAlt={item.title} cardTitle={item.title} cardText={item.text} />}
               </DataLoader>
         </div>       
      </Wrapper>
    </section>
    </>
  )
}

export default Home
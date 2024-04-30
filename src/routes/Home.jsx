import Wrapper from "../Components/Ui/Wrapper"
import Hero from "../Components/Parts/Hero"
import Card from "../Components/Card"
import DataLoader from "../Components/DataLoader"
function Home() {

  const designsUrl = "./JSONS/Designs.json"
  const aboutURl = "./JSONS/AboutHome.json"

  return (
    <>
    <Hero />
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
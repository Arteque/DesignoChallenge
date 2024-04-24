import { Outlet, Link } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
function Root() {
  console.log(ReactDOM)
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}

export default Root
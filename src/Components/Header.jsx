import Logo from "./Logo"
import Wrapper from "./Ui/Wrapper"
import { useState, useEffect } from "react"
import Nav from "./Nav"
import Burger from "./Ui/Burger"

function Header() {

const [burgerStatus, setBurgerStatus] = useState("open")

const handleClick = () => {
  setBurgerStatus(prevStatus => prevStatus === "open" ? "close" : "open");
  
}

useEffect(()=>{
  document.body.classList.value = burgerStatus
}, [burgerStatus])
  return (
    <header>
        <Wrapper>
          <Logo location="header" />
          <Burger handleClick={handleClick} status={burgerStatus}/>
          <Nav burgerStatus={burgerStatus}/>
        </Wrapper>
      </header>
  )
}


export default Header
import "./logo.scss"
import logo from "../../../assets/images/m1.png"
import {  useRef } from "react"


function Logo() {
    const bgRef = useRef()
    const logoRef = useRef()


    

  return (
    <div className="logo-container" ref={bgRef}>

        <img className="solid-logo" ref={logoRef} src={logo} alt="M" />
      
    </div>
  )
}

export default Logo

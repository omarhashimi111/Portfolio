import "./logo.scss"
import logo from "../../../assets/images/m1.png"
import { useEffect, useRef } from "react"
import gsap from "gsap-trial"
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin"

function Logo() {
    const bgRef = useRef()
    const logoRef = useRef()


    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })

        gsap.fromTo(
            logoRef.current,{
                opacity: 0
            },{
                opacity: 1,
                duration: 4,
                delay: 4
            }
        )
    },[])

  return (
    <div className="logo-container" ref={bgRef}>

        <img className="solid-logo" ref={logoRef} src={logo} alt="M" />
      
    </div>
  )
}

export default Logo

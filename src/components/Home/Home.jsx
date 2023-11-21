import "./home.scss";
import logo from "../../assets/images/m.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Animited from "../AnimitaedLetter/Animited";
import Logo from "./logo/Logo";
import Loader from "react-loaders";


function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ['e','h','e','r',' ','A', 'f','s','h','a','n']
  const jobArray = ["W",'e','b',' ','D','e','v','e','l','o','p','e','r']

  useEffect(() => {
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },4000)

  },[])


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
        <img src={logo} alt="Developer" />
        <Animited letterClass={letterClass}
         strArray={nameArray} index={15}/>
        <br />
        <Animited letterClass={letterClass}
         strArray={jobArray} index={22}/></h1>
        <h2>Frontend Developer / Youtuber</h2>
        <Link to="/Portfolio/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home

import { useEffect, useState } from "react";
import Animited from "../AnimitaedLetter/Animited"
import "./about.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
              <Animited letterClass={letterClass} strArray={['A','b','o','u','t',' ','M','e']} index={15}/>
          </h1>
          <p>
              I'm very ambitious Frontend Developer Looking for a role in 
              an IT company with opportunity to work with the latest technologies
              on challenageing and diverse projects
          </p>
          <p>I'm confident, naturally curious, and continually working on improving
              my desiging skills at a time.
          </p>
          <p>
              If I need to define myself in one sentence that would be a family person,
              honest, a sport fanatic, and tech-obessed!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About

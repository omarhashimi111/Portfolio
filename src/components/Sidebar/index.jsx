import "./index.scss"
import Logos from  "../../assets/images/m.png"
import Logosub from  "../../assets/images/logo_sub.png"
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faSkype, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
 
const Sidebar = () => {
    const [active ,setActive] = useState("active")
    return (
        <div className='nav-bar'>
           <Link className="logo" to="/Portfolio/">
            <img src={Logos} alt="logo" />
            <div className="sub-logo">eher Afshan</div>
           </Link>
           <nav>
                <NavLink exact="true" activeclassname="active" end to="/Portfolio">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/Portfolio/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/Portfolio/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
           </nav>
           <ul>
            <li>
                <a target="_blank" href="#" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#" rel="noreferrer">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
           </ul>
        </div>
    )
}

export default Sidebar
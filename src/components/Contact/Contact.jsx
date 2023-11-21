import { useEffect, useState } from "react"
import Animited from "../AnimitaedLetter/Animited"
import "./contact.scss"
import {Loader} from "react-loaders"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Contact = () => {
    const [letterClass , setLetterClass] = useState("text-animate")


    useEffect(()=>{
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        },3000)
    },[])
     const position = [34.543896,69.160652]
  return (
    <>
        <div className="contact-page container">
            <div className="text-zone">
                <h1>
                    <Animited strArray={["C",'o','n','t','a','c',' ','M','e']}
                    index={15} letterClass={letterClass}/>
                </h1>
                <p>
                    I'm interested in freelance opportunities - Specially large projects,
                    however if you have other request or question, do not hesitate to contact me ;)
                </p>
                <div className="contact-form">
                    <form action="">
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" name="subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="Send"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Meher Afshar 
                <br />
                Afghanistan,
                <br />
                Kabul<br />
                <span>Example@email.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={position} zoom={13}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        Here I live :)
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
      
    </>
  )
}

export default Contact

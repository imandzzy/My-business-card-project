import React from "react"
import Picture from "../pics/myPhoto.jpg"

export default function Info() {
    return (
        <nav className="nav--info">
            <img src={Picture} alt="profile_photo" className="profile--photo"/>
            <h1> Musteață Andrei </h1>
            <h4> Frontend & Backend Developer | React </h4>
            <a href="mailto: andrei_musteata@yahoo.com" rel="noopener noreferrer" target="_blank" className="info--email">
                <span>
                    <ion-icon name="mail"></ion-icon>
                </span>
                <span>
                    E-mail
                </span>
            </a>
            <a href="https://www.linkedin.com/in/andrei-m-146608127/" rel="noopener noreferrer" target="_blank" className="info--linkedin">
                <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span>
                    LinkedIn
                </span>
            </a>
        </nav>
    )
}
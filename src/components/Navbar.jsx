import React from "react";
import "./navbar.css";
import "./responsive.css";


export class Navbar extends React. Component {

    render() {
        return (
        <div className="navcontainer">
            <nav className="navbar">
                <div> <img src="./logo.png" className="navimg"></img> </div>
                <div>
                    <ul className="ulnav">
                        <a href="#Sobre mi"><li>SOBRE MI</li></a>
                        <a href="#Videos"><li>VIDEOS</li></a>
                        <a href="https://www.youtube.com/channel/UCEjTU5V5LiwUJaqBMKlw-PQ" target="_blank"><li>YOUTUBE</li></a>
                        <a href="https://www.twitch.tv/miguelcuervo20" target="_blank"><li>TWITCH</li></a>
                </ul>
                </div>

                <a className="ocultar">
                    .
                </a>
            </nav>
            
        </div> 
        )

    }
}
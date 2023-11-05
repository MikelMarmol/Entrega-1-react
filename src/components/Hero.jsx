import React from "react";
import "./hero.css";
import "./responsive.css";


export class Hero extends React. Component {

    render() {
        return (
        <div className="herocontainer"  id="Sobre mi" >
            
            <div className="herofondo">
                <h1></h1>
                <p></p>
            </div>
            <div className="containerherocard">
                <div className="herocard"> 
                    <h1 className="titulo">¿Quien es MiguelCuervo20?</h1>
                    <p className="parrafo">Mi nombre es Mikel Marmol tengo 20 años y actualmente me encuentro estudiando programacion. 
                        Como hobbie soy youtuber, mi canal es <span>"MiguelCuervo20"</span>, un canal de videojuegos 
                        y entretenimiento. En el que normlamente jugamos un juego de celular 
                        llamado <span>Clash of clans</span> que vendria a ser el nicho del canal. <br></br>
                        Inicie a hacer videos ya que me gustaba editar tanto videos como imagenes, de esta
                        forma ademas de divertirme podia practicar y mejorar mis habilidades en estos ambitos . <br></br>
                        Actualmente mi canal de youtube cuenta con mas de 800 suscriptores y con mas de 70 video subidos.
                    </p>
                </div>
            </div>
        </div> 
        
        )
    }
}
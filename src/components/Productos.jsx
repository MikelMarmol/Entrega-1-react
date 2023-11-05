import React from "react";
import "./Productos.css";
import "./responsive.css";


export class Productos extends React. Component {

    render() {
        return (
        <div className="productos_container" id="Videos">
            <div className="productos_card">
                <div className="producto">
                    <img src="./MINIATURA 48.jpg" className="card_img"></img>
                    <h3>¿QUE ESTA PASANDO CON LOS ALMACENES de ELIXIR ÁCIDO? 🎃Clash-o-ween 💀</h3>
                    <a href="https://www.youtube.com/watch?v=fVNHgyxuli8&t=20s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 49.jpg" className="card_img"></img>
                    <h3>USO la PEOR TROPA DEL EVENTO de Halloween 🎃 MAGO-MONTAPUERCO 🐖🧙‍♂️</h3>
                    <a href="https://www.youtube.com/watch?v=_G8dRdO4pRE&t=11s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 50.jpg" className="card_img"></img>
                    <h3>Ataqué CON MAS DE 1000 ESQUELETOS en Clash of clans y pasó esto 💀</h3>
                    <a href="https://www.youtube.com/watch?v=pmEwh9isEFk&t=10s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>
            </div>
            
            <div className="productos_card">
                <div className="producto">
                    <img src="./MINIATURA 52.jpg" className="card_img"></img>
                    <h3>Los TH12 te pedirán POR FAVOR que pares ¡El ATAQUE MAS EPICO de Clash of clans!</h3>
                    <a href="https://www.youtube.com/watch?v=IiOCz7WX1ZI&t=30s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 53.jpg" className="card_img"></img>
                    <h3>Mis GLOBOS MAGMATICOS van directo al AYUNTAMIENTO - La MEJOR ESTRATEGIA</h3>
                    <a href="https://www.youtube.com/watch?v=NFrWmxGl_Rc&t=2s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 54.jpg" className="card_img"></img>
                    <h3>Desatando la MAGIA en Clash of Clans ¡Solo TROPAS MAGICAS!</h3>
                    <a href="https://www.youtube.com/watch?v=yMn6l851x5Q&t=47s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>
            </div>

            <div className="productos_card">
                <div className="producto">
                    <img src="./MINIATURA 55.jpg" className="card_img"></img>
                    <h3>MEJORO mi CENTINELA 6 niveles en un SOLO VÍDEO - De Centinela ordinario a uno extraordinario 🧙‍♂️📈</h3>
                    <a href="https://www.youtube.com/watch?v=caSFNSC4OgA&t=9s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 56.jpg" className="card_img"></img>
                    <h3>6 TRUCOS para subir a LIGA LEYENDA siendo TH BAJO 🔝🏆 - FÁCIL Y RAPIDO</h3>
                    <a href="https://www.youtube.com/watch?v=DHS1TZaibOU&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>

                <div className="producto">
                    <img src="./MINIATURA 57.jpg" className="card_img"></img>
                    <h3>El CALENDARIO DE NOVIEMBRE ya esta AQUÍ - ¿Nos regalan un skin? Clash of clans</h3>
                    <a href="https://www.youtube.com/watch?v=UzP4uzG14kU&t=57s&ab_channel=MiguelCuervo20" target="_blank">Ver video</a>
                </div>
            </div>

            <a href="#" target="_blank" className="btn_mas">CARGAR MAS VIDEOS</a>
        </div> 
        )

    }
}
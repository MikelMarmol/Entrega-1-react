import React from "react";
import "./footer.css";
import "./responsive.css";



export class Footer extends React. Component {
    render() {
        return (
            
            <footer>
                <hr></hr>
                <div className="container-footer">
                    <div className="footer-politicas">
                        <h3>INFORMACION</h3> <br></br>
                        
                        <a href="#">Politicas de Cookies</a> <br></br> <br></br>
                        <a href="#">Politica de Privacidad</a> <br></br> <br></br>
                        <a href="#">Terminos y condiciones</a> <br></br> <br></br>
                        <a href="#">Informacion de envios</a> <br></br> <br></br>
                        <a href="#">Reclamos</a> 
                    </div>

                    <div className="text-footer-information">
                        <h3>ACERCA DE <i>MiguelCuervo20</i></h3>
                        <br></br>
                            <a href="#">Nostros</a> <br></br> <br></br>
                            <a href="#">Ayuda</a> <br></br> <br></br>
                            <a href="#">Novedades</a> <br></br> <br></br>
                            <a href="#">Nuestros Datos</a>  
                    </div>

                    <div className="text-footer-redes">
                        <div className="footer-icons">
                            <a href="https://www.instagram.com/miguelcuervo20/" target="_blank"><img src="./instagram.webp" className="img_footer"></img></a>
                            <a href="https://www.facebook.com/mikel.marmol/" target="_blank"><img src="./Facebook.png" className="img_footer"></img></a>
                            <a href="https://www.tiktok.com/@miguelcuervo20" target="_blank"><img src="./tiktok.webp" className="img_footer"></img></a>
                        </div>
                    </div>
                </div>
                <br></br>
                    <hr></hr>
                <br></br>
                <div className="footer-info">
                    <p>© 2023 MiguelCuervo20</p>
                    <p>Desarrollado por Mikel Marmol</p>
                </div>
            </footer>
        )

    }
}

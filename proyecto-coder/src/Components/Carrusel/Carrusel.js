import Carousel  from "react-bootstrap/Carousel"
import { Link } from "react-router-dom"

function Carrusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                <Link to="/categoria/escritorios">
                    <img
                    className="d-block w-100 im"
                    src="https://m.media-amazon.com/images/S/aplus-media/vc/27fcb26c-404d-45f0-a2e6-7fc4f7f75b41.__CR0,0,970,300_PT0_SX970_V1___.jpg"
                    alt="First slide"
                    />
                    </Link>
                    <Carousel.Caption>
                    <h3>Escritorios Industriales</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>    
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/mesas">
                    <img
                    className="d-block w-100 im"
                    src="https://apilables.es/wp-content/uploads/2019/05/decoracion-industrial.jpg"
                    alt="Second slide"
                    />
                </Link>
                    <Carousel.Caption>
                    <h3>Mesas Industriales</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Link to="/categoria/sillas">    
                    <img
                    className="d-block w-100 im"
                    src="https://www.benedettis.com/wp-content/uploads/2020/02/R5-970x300.jpg"
                    alt="Third slide"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>Sillas Industriales</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrusel

import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel"
const AboutUs = () => {
    return (
        <>
            <div className="aboutus">
                <div className="aboutus-inner row">
                    <div className="col-6 left">
                        <div className="text-wrap">
                            <h1 className="text">SIMPLE<p className="text-stroke">RIGS</p></h1>
                            <h2>ALL ABOUT WHO WE ARE</h2>
                        </div>
                        <div className="img-wrap">
                            <img className="tractor-drag" src="image/8.png" alt="tractor-drag" />

                        </div>
                    </div>
                    <div className="col-6 right">
                        <div className="right-inner">
                            <h2>about us</h2>

                            <Carousel>
                                <Carousel.Item >
                                    <Carousel.Caption>
                                        <ul>
                                            <li><p>To yeild the maxium coins.Neque porro</p></li>
                                            <li><p>Quisquam est qui dolorem</p></li>
                                            <li><p>Ipsum quia dolor sit amet, consectetur,</p></li>
                                            <li><p>Adipisci veli, porro quisquam</p></li>
                                            <li><p>Lorem ipsum quia dolor sit amet</p></li>
                                        </ul>
                                    </Carousel.Caption>
                                </Carousel.Item  >
                                <Carousel.Item >
                                    <Carousel.Caption>
                                        <div>
                                            <ul>
                                                <li><p>To yeild the maxium coins.Neque porro</p></li>
                                                <li><p>Quisquam est qui dolorem</p></li>
                                                <li><p>Ipsum quia dolor sit amet, consectetur,</p></li>
                                                <li><p>Adipisci veli, porro quisquam</p></li>
                                                <li><p>Lorem ipsum quia dolor sit amet</p></li>
                                            </ul>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <Carousel.Caption>
                                        <ul>
                                            <li><p>To yeild the maxium coins.Neque porro</p></li>
                                            <li><p>Quisquam est qui dolorem</p></li>
                                            <li><p>Ipsum quia dolor sit amet, consectetur,</p></li>
                                            <li><p>Adipisci veli, porro quisquam</p></li>
                                            <li><p>Lorem ipsum quia dolor sit amet</p></li>
                                        </ul>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="tractor-drag-mobile-wrap">
                            <img className="tractor-drag-mobile" src="image/7.png" alt="tractor-drag-mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs
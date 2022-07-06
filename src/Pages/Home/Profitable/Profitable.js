import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css"
import SingleTractor from "../../../component/SingleTractor/SingleTractor";
const Profitable = () => {
    const tractorList = [
        {
            image: "tractor1.png",
            status: "STARTER",
            price: 250,
        }, {
            image: "tractor2.png",
            status: "ADVANCE",
            price: 1000
        }, {
            image: "tractor3.png",
            status: "PREMIUM",
            price: 5000
        }, {
            image: "tractor4.png",
            status: "PROFESSIONAL",
            price: 10000,
        }, {
            image: "tractor5.png",
            status: "BOSS",
            price: 50000
        }];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2000 },
            items: 5,
        },
        largeDesktop: {
            breakpoint: { max: 2000, min: 1500 },
            items: 4,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 70
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 100
        }
    };
    return (
        <>
            <div className="profitable">
                <img src="image/3.png" className="profitable-top" alt="img3" />
                <div className="profitable-header">
                    <p className="takeaction">TAKE ACTION</p>
                    <h1 className="title" >SELECT THE MOST PROFITABLE <label>TRACTOR</label></h1>
                </div>
                <div className="tractor-list">
                    <Carousel partialVisible={true} autoPlay={false} autoPlaySpeed={3000} responsive={responsive}>
                        {tractorList.map((item, index) => <SingleTractor data={item} key={index} />)}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Profitable
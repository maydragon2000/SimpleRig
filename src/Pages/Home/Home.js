import React, { useState, useEffect } from "react";
import "./style.css";
import Register from "./Register/Register";
import CheckMining from "./CheckMining/CheckMining";
import Profitable from "./Profitable/Profitable";
import Investor from "./Investor/Investor";
import WalletConnection from "./WalletConnection/WallerConnection"
import AboutUs from "./AboutUs/AboutUs"
import Footer from "../../component/Footer/Footer"
import Loading from "../../component/Loading/Loading";
import SingleButton from "../../component/SingleButton/SingleButton";
import { Link } from "react-router-dom";
import LoginModal from "../../component/LoginModal/LoginModal";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        handleLoading();
    })
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    return !isLoading ? (
        <>
            <div>
                <div className="background">
                    <div className="header">
                        <div className="header-inner">
                            <SingleButton onClick={() => modalShow()} className="login-button" to="" value="LOGIN" image="" />
                        </div>
                    </div>
                    <div className="interface">
                        <div className="interface-inner-left">
                            <div className="title">
                                <h1>SIMPLE<p className="title-stroke">RIGS</p></h1>
                            </div>
                            <div className="sub-title">
                                <h3>
                                    <div className="d-flex">THE BEST <p>CLOUD MINING</p></div> <div> COMPANY</div>
                                </h3>
                            </div>
                            <div className="description">
                                <p>We offer the most easy cloud mining process
                                    on cutting edge technology equipment</p>
                            </div>
                        </div>
                        <div className="interface-inner-right" style={{ right: "0px" }}>
                            <div className="mining-button-wrap">
                                <button><Link onClick={() => modalShow()} to=""> START MINING</Link></button>
                            </div>
                        </div>
                    </div>
                    <LoginModal show={show} setShow={setShow} />
                </div>
                <CheckMining />
                <Register />

                <div className="content">
                    <Profitable />
                    <Investor />
                    <WalletConnection />
                    <AboutUs />
                </div>
                <Footer backgroundImage="footer.png" />
            </div>
        </>
    )
        : (
            <Loading />
        )
}
export default Home;
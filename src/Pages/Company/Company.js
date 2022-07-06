import React, { useState, useEffect } from "react";
import Footer from "../../component/Footer/Footer";
import "./style.css";
import SingleButton from "../../component/SingleButton/SingleButton";
import { useLoginContext } from "../../context/Logincontexr";
import LoginModal from "../../component/LoginModal/LoginModal";
const Company = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { isLogin } = useLoginContext();
    console.log(isLogin, "isLogin");
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="company">
                <div>
                    <div className="company-header">
                        <div className="company-header-top" style={{ display: isLogin ? "none" : "flex" }}>
                            <SingleButton onClick={() => modalShow()} to="" className="login-button" value="login" image="" />
                        </div>
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="company-content">
                        <div className="company-contact">
                            <div className="left">
                                <h1 className="company-text">COMPANY&</h1>
                                <h1 className="contacts-text">CONTACTS</h1>
                            </div>
                            <div className="right">
                                <p>Learn more about company’s startup research and
                                    investments, guarantees and attitude to ecology
                                    issues & security matter.</p>
                                <p>    Our company was founded in 2017 during the original mining boom and rapid private mining farms development.</p>
                                <p>   Regular mining requires certain knowledge and know-how and large starting investments, so it was pretty hard for ordinary persons to start from a scratch.</p>
                                <p> All these settings with software and hardware were looking scary and annoying. </p>
                                <p>    That's why we've decided to make it simple. You're just a few clicks from Your first mining rig.</p>
                                <p> The main idea was to make mining accessible to anyone - from a guy who was just starting his research and a way into the cryptocurrencies world, to a major investor who is looking to multiply his capital.</p>
                                <p> We do care about the environment.</p>
                                <p>    We are using 100% renewable energy sources.</p>
                                <p> Our data centers are located at Linde in the Northern Cape and Dreunberg in the Eastern Cape, both sun drenched regions boasting one of the best conditions for solar power in the world.</p>
                                <p> We cooperate only with the largest suppliers.</p>
                                <p> Procurement of equipment is calculated in the tens of millions.</p>
                                <p> For all those reasons, we can guarantee our customers high income and low costs.</p>
                            </div>
                        </div>
                        <div className="company-information">
                            <div className="left">
                                <h2>SUPPORT 24/7</h2>
                            </div>
                            <div className="right">
                                <h2 className="information-text">INFORMATION</h2>
                                <h2>ADDRESS</h2>
                                <h4>Rm 1408 14/f 248 Queen's Rd E Wan Chai, Hong Kong, Mining IT Limited</h4>
                                <h2>DATE OF INCORPORATION</h2>
                                <h4>07/09/2017</h4>
                                <h2>CR NO.</h2>
                                <h4>2576021</h4>
                            </div>
                        </div>
                    </div>
                    <Footer backgroundImage="company-footer.png" />
                    <LoginModal show={show} setShow={setShow} />
                </div>
            </div>
        </>
    )
}
export default Company;
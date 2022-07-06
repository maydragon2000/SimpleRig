import React, { useState } from "react";
import "./style.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
const Footer = ({ backgroundImage }) => {
    var dt = new Date();
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="footer" style={{ backgroundImage: `url(image/${backgroundImage})` }}>
                <div className="footer-inner">
                    <div className="footer-title">
                        <h1>Simple<p>rigs</p></h1>
                    </div>
                    <div className="footer-description">
                    </div>
                    <div className="footer-connect">
                        <div className="footer-connect-left">
                            <h1>WE ACCEPT</h1>
                            <div className="d-flex">
                                <img className="visa" src="image/visa.png" alt="visa" />
                                <img className="mastercard" src="image/mastercard.png" alt="mastercard" />
                                <img className="bitcoin" src="image/bitcoin2.png" alt="bitcoin" />
                            </div>
                        </div>
                        <div className="footer-connect-middle">
                            <Link to="/COMPANY">Company & Contacts</Link>
                            <Link to="/TERMS">Terms of use</Link>
                            <Link to="/FAQ">Questions & Answers</Link>
                        </div>
                        <div className="footer-content-right">
                            <button><Link onClick={() => modalShow()} to="">START MINING<AiOutlineArrowRight className="arrow-icon" /></Link></button>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>{`© ${dt.getFullYear()}`} Simple Rig. All rights reserved.</p>
                    </div>
                </div>
                <LoginModal show={show} setShow={setShow} />
            </div>
        </>
    )
}
export default Footer;

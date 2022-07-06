import React, { useState } from "react";
import { Modal } from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useLoginContext } from "../../context/Logincontexr";
import { Link } from "react-router-dom";
import SingleButton from "../SingleButton/SingleButton";
import "./style.css"
const LoginModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    const [phoneValue, setPhoneValue] = useState();
    const { setIsLogin } = useLoginContext();
    const phoneNumberChange = (e) => {
        setPhoneValue();
    }
    const clickLogin = () => {
        setIsLogin(true);
    }
    return (
        <>
            <Modal show={show} className="login" onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="login-header">
                        <h1>SIMPLE <p>RIG</p></h1>
                        <h4>YOU ARE JUST ONE STEP AWAY FROM MINING</h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="login-content">
                        <div className="login-content-left">
                            {/* <img alt="" src="image/login.png" /> */}
                        </div>
                        <div className="login-content-right">
                            <Tabs default={1}>
                                <TabList>
                                    <Tab>Register</Tab>
                                    <p>|</p>
                                    <Tab>Login</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="register-content">
                                        <div className="first row">
                                            <div className="col-6">
                                                <p>NAME</p>
                                                <div className="name-wrap">
                                                    <input />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <p>SURNAME</p>
                                                <div className="surname-wrap">
                                                    <input />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="second">
                                            <p>Email ID</p>
                                            <div className="Email-wrap">
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="second">
                                            <p>Password</p>
                                            <div className="Email-wrap">
                                                <input type="password" />
                                            </div>
                                        </div>
                                        <div className="third">
                                            <p>Phone No.</p>

                                            <PhoneInput
                                                country={'us'}
                                                value={phoneValue}
                                                onChange={() => phoneNumberChange()}
                                            />
                                        </div>
                                        <div className="register-button-wrap">
                                            <SingleButton onClick={() => clickLogin()} className="register-button" to="/DASHBOARD" value="REGISTER" image="" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="register-content">
                                        <div className="second">
                                            <p>Email ID</p>
                                            <div className="Email-wrap">
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="second">
                                            <p>PASSWORD</p>
                                            <div className="Email-wrap">
                                                <input type="password" />
                                            </div>
                                        </div>
                                        <Link to="ForgotPassword" className="forgot-password">Forgot Password?</Link>
                                        <div className="register-button-wrap">
                                            <SingleButton onClick={() => clickLogin()} className="register-button" to="/DASHBOARD" value="Login" image="" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default LoginModal;
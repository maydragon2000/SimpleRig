import React, { useState } from "react";
import "./style.css"
import SingleButton from "../../../component/SingleButton/SingleButton";
import LoginModal from "../../../component/LoginModal/LoginModal";
const Register = () => {
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="Register">
                <div className="img-wrap">
                </div>
                <div className="Register-inner">
                    <div className="content-wrap">
                        <h2>YOU’RE JUST 30 SEC AWAY</h2>
                        <h1><label>START</label><p>MINING <label>NOW </label></p></h1>
                        <SingleButton onClick={() => modalShow()} to="" value="REGISTER" image="" />
                    </div>
                </div>
                <LoginModal show={show} setShow={setShow} />
            </div>
        </>
    )
}
export default Register;
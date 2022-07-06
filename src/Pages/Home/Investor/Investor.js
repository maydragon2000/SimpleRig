import React, { useState } from "react";
import SingleButton from "../../../component/SingleButton/SingleButton";
import "./style.css";
import LoginModal from "../../../component/LoginModal/LoginModal";
const Investor = () => {
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="investore ">
                <div className="investore-inner row">
                    <div className="col-7" style={{ display: "flex" }}>
                        <div className="investore-left col-6">
                            <div className="d-flex" style={{ justifyContent: "end" }}>
                                <img alt="" src="image/4.png" />
                                <div className="d-flex" style={{ flexDirection: "column", justifyContent: "end" }}>
                                    <h1>652</h1>
                                    <h1>1.12X</h1>
                                </div>
                            </div>
                            <div className="d-flex" style={{ justifyContent: "end" }}>
                                <h1>$478.100</h1>
                            </div>
                        </div>
                        <div className="investor-middle col-6 d-flex">
                            <h2 className="first" >INVESTORS JOINED TODAY</h2>
                            <h2 className="second" >AVERAGE INCOMEPER MONTH</h2>
                            <h2 className="third" >TODAY PAYOUTS</h2>
                        </div>
                    </div>
                    <div className="col-5" style={{ display: "flex" }}>
                        <div className="investor-right col-10 d-flex">
                            <h2>DAILY BTC PAYOUTS. NO DELAY. NO HOLDS.</h2>
                            <SingleButton onClick={() => modalShow()} value="TRY NOW" to="" image="" />
                        </div>
                        <div className="investor-tree col-2">
                            <img alt="" src="image/5.png" />
                        </div>
                    </div>
                </div>
                <LoginModal show={show} setShow={setShow} />
            </div>
        </>
    )
}
export default Investor;
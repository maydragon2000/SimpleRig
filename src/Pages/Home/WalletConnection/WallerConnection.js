import React, { useEffect, useState } from "react";
import "./style.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { Slider } from "@mui/material";
import SingleButton from "../../../component/SingleButton/SingleButton";
const WalletConnection = () => {
    const [slideValue, setSlideValue] = useState(0);
    const sliderChange = (e) => {
        setSlideValue(e.target.value);
    }
    const [showTractor, setShowTractor] = useState(1);
    useEffect(() => {
        if (slideValue <= 1000) {
            setShowTractor(1);
        }
        else if (slideValue <= 5000) {
            setShowTractor(2);
        }
        else if (slideValue <= 10000) {
            setShowTractor(3);
        }
        else if (slideValue <= 50000) {
            setShowTractor(4);
        }
        else {
            setShowTractor(5);
        }
    }, [slideValue])
    return (
        <>
            <div className="walletConnection">
                <div className="walletConnection-inner row">
                    <div className="left col-5">
                        <h2>CHOOSE YOUR DESIRED TRACTOR</h2>
                        <div className="walletonnection-left-inner">
                            <div>
                                <h3>INVESTMENT IN $</h3>
                                <div className="input-wrap">
                                    <input type="text" placeholder="$ 250" />
                                </div>
                            </div>
                            <div>
                                <h3>POWER</h3>
                                <div className="input-wrap">
                                    <input type="text" placeholder="4019 GH/s" />
                                </div>
                            </div>
                        </div>
                        <div className="rangeslider-wrap">
                            <Slider value={slideValue} onChange={(e) => sliderChange(e)} min={250} max={100000} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </div>
                    </div>
                    <div className="right col-7">
                        <div className="right-inner">

                            <div className="d-flex calculator">
                                <div >
                                    <h3>CALCULTATOR</h3>
                                    <ul>
                                        <li>
                                            <h3>Daily Income</h3>
                                            <h1>$1.80</h1>
                                        </li>
                                        <li>
                                            <h3>Monthly Income</h3>
                                            <h1>$11.80</h1>
                                        </li>
                                        <li>
                                            <h3>Yearly Income</h3>
                                            <h1>$131.80</h1>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <img alt="" className="green-tractor" src="image/green-tractor.png" style={{ display: showTractor === 1 ? "block" : "none" }} />
                                    <img alt="" className="green-tractor" src="image/yellow-tractor1.png" style={{ display: showTractor === 2 ? "block" : "none" }} />
                                    <img alt="" className="green-tractor" src="image/red-tractor1.png" style={{ display: showTractor === 3 ? "block" : "none" }} />
                                    <img alt="" className="green-tractor" src="image/yellow-tractor2.png" style={{ display: showTractor === 4 ? "block" : "none" }} />
                                    <img alt="" className="green-tractor" src="image/red-tractor2.png" style={{ display: showTractor === 5 ? "block" : "none" }} />
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <SingleButton image="card.png" value="CREDIT CARD" to="/CREDITCARDCHECK" />
                            <SingleButton image="bitcoin.png" value="BITCOIN" to="/BITCOINCHECK" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WalletConnection;
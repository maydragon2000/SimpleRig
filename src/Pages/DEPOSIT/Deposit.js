import React, { useEffect, useState } from "react";
import SingleButton from "../../component/SingleButton/SingleButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { Slider } from "@mui/material";
import "./style.css";
import { useSubpageContext } from "../../context/SubpageContext";
import Loading from "../../component/Loading/Loading";

const Deposit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        handleLoading();
    })
    const { setActiveId } = useSubpageContext();
    useEffect(() => {
        setActiveId(2);
    })
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
    return !isLoading ? (
        <>
            <div className="Deposit">
                <div className="top">
                </div>
                <div className="title">
                    <h2>BUY PLANS</h2>
                </div>
                <div className="wallet-address">
                    <h2>Deposit</h2>
                </div>

                <div className="buy-plan">
                    <div className="buy-plan-inner row">
                        <div className="left col-5">
                            <h2>CHOOSE YOUR DESIRED TRACTOR</h2>
                            <h3>INVESTMENT IN $</h3>
                            <div className="input-wrap">
                                <input type="text" placeholder="$ 250" />
                            </div>
                            <h3>POWER</h3>
                            <div className="input-wrap">
                                <input type="text" placeholder="4019 GH/s" />
                            </div>
                            <div className="rangeslider-wrap">

                                <Slider value={slideValue} onChange={(e) => sliderChange(e)} min={250} max={100000} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                            </div>

                        </div>
                        <div className="right col-7">
                            <div className="right-inner">
                                <div className="d-flex calculator">
                                    <div>
                                        <h3 className="sub-title">CALCULTATOR</h3>
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
                                    <div className="green-tractor-wrap">
                                        <img alt="" className="green-tractor" src="image/green-tractor.png" style={{ display: showTractor === 1 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src="image/yellow-tractor1.png" style={{ display: showTractor === 2 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src="image/red-tractor1.png" style={{ display: showTractor === 3 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src="image/yellow-tractor2.png" style={{ display: showTractor === 4 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src="image/red-tractor2.png" style={{ display: showTractor === 5 ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deposit-button-wrap">
                    <div className="link-wrap">
                        <SingleButton to="/CREDITCARDCHECK" image="card.png" value="CREDIT CARD" />
                    </div>
                    <div className="link-wrap">
                        <SingleButton to="/BITCOINCHECK" image="bitcoin.png" value="BITCOIN" />
                    </div>
                </div>
            </div>
        </>
    )
        : (
            <Loading />
        )
}
export default Deposit;
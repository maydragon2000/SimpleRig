import React, { useEffect, useState } from "react";
import SingleButton from "../../component/SingleButton/SingleButton";
import "./style.css"
import { useSubpageContext } from "../../context/SubpageContext";
import Loading from "../../component/Loading/Loading";

const Withdrawal = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        handleLoading();
    })
    const { setActiveId } = useSubpageContext();
    useEffect(() => {
        setActiveId(3);
    })
    return !isLoading ? (
        <>
            <div className="Withdrawal">
                <div className="top">
                </div>
                <div className="title">
                </div>
                <div className="wallet-address">

                </div>
                <h2 className="sub-title">BALANCE</h2>

                <div className="balance row">
                    <div className="left col-5">
                        <div className="input-wrap">
                            <input placeholder="0.0002541010 " />
                            <button>BTC</button>
                        </div>
                        <div className="input-wrap">
                            <input placeholder="127" />
                            <button>USD</button>
                        </div>
                    </div>
                    <div className="right col-7">
                        <div className="description">
                            <h4>1 BTC = $14307.35</h4>
                            <p>*Bitcoin prices has all conversion rate fees included</p>
                        </div>
                    </div>
                </div>
                <SingleButton value="WITHDRAW" image="" className="withdraw-button" />
                <div className="previous-transaction">
                    <h3>Previous transactions</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>AMT(USD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="first-field">$8.1023</td>
                                <td>$8.1023</td>
                            </tr>
                            <tr>
                                <td className="first-field">11/03/2022</td>
                                <td>$8.1023</td>
                            </tr>
                            <tr>
                                <td className="first-field">15/02/2022</td>
                                <td>$8.1023</td>
                            </tr>
                            <tr>
                                <td className="first-field">$8.1023</td>
                                <td>$8.1023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
        : (
            <Loading />
        )
}
export default Withdrawal;
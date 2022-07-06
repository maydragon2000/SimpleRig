import React, { useEffect, useState } from "react";
import "./style.css";
import { useSubpageContext } from "../../context/SubpageContext";
import Loading from "../../component/Loading/Loading";

const Referrals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        handleLoading();
    })
    const { setActiveId } = useSubpageContext();
    useEffect(() => {
        setActiveId(4);
    })
    return !isLoading ? (
        <>
            <div className="Referrals">
                <div className="top">
                </div>
                <div className="title">
                    <h2>Your referral link</h2>
                </div>
                <div className="wallet-address">

                </div>
                <h2 className="sub-title">BALANCE</h2>
                <div className="invite-friend">
                    <p>Tell your friends about the SIMPLERIGS and get a reward from the platform. SIMPLERIGS Referral Program gives you the opportunity to earn 20% from the deposits of people you have invited to the platform.</p>
                    <p>You invited a friend who then bought a miner contract for $1,000, so you get a $200 reward.</p>
                </div>
                <div className="total-list row">
                    <div className="total-list-item col-4">
                        <div className="total-click-wrap">
                            <h5>TOTAL CLICKS</h5>
                            <div className="total-click">
                                <h2>100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="total-list-item col-4">
                        <div className="total-click-wrap">
                            <h5>Total SIGN-UPS</h5>
                            <div className="total-click">
                                <h2>100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="total-list-item col-4">
                        <div className="total-click-wrap">
                            <h5>TOTAL INCOME</h5>
                            <div className="total-click">
                                <h2>0.11125 BTC</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        : (
            <Loading />
        )
}
export default Referrals;
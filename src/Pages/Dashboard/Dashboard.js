import React, { useState, useEffect } from "react";
import "./style.css"
import SinglePlan from "../../component/SinglePlan/SinglePlan";
import { Link } from "react-router-dom";
import { useSubpageContext } from "../../context/SubpageContext";
import Loading from "../../component/Loading/Loading";
const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        handleLoading();
    })
    const plans = [
        {
            color: "#49925B",
            planTitle: "MASTER PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#3DAF67",
            planTitle: "SUB MASTER PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#6ABE66",
            planTitle: "PREMIUM PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#8BD66C",
            planTitle: "ADVANCE PLAN",
            planNumber: "0000050",
            avlNumber: 10
        }
    ];
    const { setActiveId } = useSubpageContext();
    return !isLoading ? (
        <>
            <div className="Dashbord">
                <div className="dashbord-content">
                    <div className="top">
                    </div>
                    <div className="welcome">
                        <h2>WELCOME TO DASHBOARD</h2>
                    </div>
                    <div className="main">
                        <div className="main-inner row">
                            <div className="plan-wrap col-5">
                                <h3>MY PLANS</h3>
                                <div className="plan-list">
                                    {
                                        plans.map((item, index) => <SinglePlan data={item} key={index} />)
                                    }
                                </div>
                                <div className="btn-wrap">
                                    <div className="link-wrap">
                                        <Link onClick={() => setActiveId(2)} to="/DEPOSIT">ADD +</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="payout col-7">
                                <h3>Payout</h3>
                                <ul>
                                    <li>
                                        <h4>Balance</h4>
                                        <p>0.10001005 BTC</p>
                                    </li>
                                    <li>
                                        <h4>Last Master Plan Payout</h4>
                                        <p>0.10001005 BTC</p>
                                    </li>
                                    <li>
                                        <h4>Last SUB Master Plan Payout</h4>
                                        <p>0.10001005 BTC</p>
                                    </li>
                                    <li>
                                        <h4>Last Premium Plan Payout</h4>
                                        <p>0.10001005 BTC</p>
                                    </li>
                                    <li>
                                        <h4>Last Advance Plan Payout</h4>
                                        <p>0.10001005 BTC</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="revenue">
                            <h3>REVENUE</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>PLANS</th>
                                        <th>Master Plan</th>
                                        <th>Premium Plan</th>
                                        <th>Advance Plan</th>
                                        <th >TOTAL(USD)</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td className="first-field">Average Daily</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>$125</td>
                                    </tr>
                                    <tr>
                                        <td className="first-field">Average Weekly</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>$135</td>
                                    </tr>
                                    <tr>
                                        <td className="first-field">Average Monthly</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>$1047</td>
                                    </tr>
                                    <tr>
                                        <td className="first-field">Average Daily</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>0.0000010 BTC</td>
                                        <td>$125</td>
                                    </tr>
                                </tbody>
                            </table>
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
export default Dashboard;
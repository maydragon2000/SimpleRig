import React, { useState, useEffect } from "react";
import Footer from "../../component/Footer/Footer";
import SingleButton from "../../component/SingleButton/SingleButton";
import { useLoginContext } from "../../context/Logincontexr";
import LoginModal from "../../component/LoginModal/LoginModal";
import "./style.css";
import SideNav from "../../component/SideNav/SideNav";
import { GiHamburgerMenu } from "react-icons/gi"
const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { isLogin } = useLoginContext();
    const modalShow = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    const [sideOpen, setSideOpen] = useState("-300px");
    const [backgroundOpacity, setBackgroundOpacity] = useState("1");
    const sideMenu = () => {
        if (sideOpen === "-300px") {
            setSideOpen("0px")
            setBackgroundOpacity("0.5");
        }
        else {
            setSideOpen("-300px");
            setBackgroundOpacity("1");
        }
    }
    return (
        <>
            <div className="ask">
                <div style={{ position: "absolute", zIndex: "2", display: !isLogin ? "none" : "block" }}>
                    <GiHamburgerMenu onClick={() => sideMenu()} style={{ display: sideOpen === "0px" ? "none" : "block", marginLeft: "20px" }} className="sidemenu-button" />
                    <div className="nav-side-wrap" style={{ marginLeft: sideOpen, transition: ".5s" }}>
                        <SideNav setSideOpen={setSideOpen} intFrameWidth={0} setBackgroundOpacity={setBackgroundOpacity} />
                    </div>
                </div>
                <div style={{ opacity: backgroundOpacity }}>
                    <div className="ask-header">
                        <div className="ask-header-top" style={{ display: isLogin ? "none" : "flex" }}>
                            <SingleButton onClick={() => modalShow()} to="" className="login-button" value="login" image="" />
                        </div>
                        <h1>FREQUENTLY</h1>
                        <h1 className="ask-text">ASKED QUESTIONS</h1>
                    </div>

                    <div className="ask-content">

                        <div className="ask-content-inner">
                            <div className="first-part">
                                <h3>WHO ARE WE</h3>
                                <ul>
                                    <li>
                                        <p>The most simple Cloud Mining Copany on the market. No need to have any special knowledges or any know-how, no need to choose between GPU or ASICs. Get Your first income within 3 simple actions. Just click on a calculator, select desired hash power amount, make a deposit and start earn.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="second-part">
                                <h3>HOW TO START?</h3>
                                <ul>
                                    <li>
                                        <p>
                                            Go through a simple registration and payment procedure to join us.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Use the calculator to know Your potencial profit (all fees already deducted, what You see is what You'll get - no hidden costs or fees)
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Make a refundable deposit using one of offered options.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            You can increase Your total hash rate any time, the more hash rate You got, the more BTC will be generated.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            You are not required to buy or install any additional equipment.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="third-part">
                                <h3>PAYOUTS AND WITHDRAWAL</h3>
                                <ul>
                                    <li>
                                        <p>You will be paid daily at the same time.</p>
                                    </li>
                                    <li>
                                        <p>All payouts are in BTC.</p>
                                    </li>
                                    <li>
                                        <p>Minimum withdrawal amount is 0.001 BTC (will be processed within 24 hours)Withdrawal fees are covered by the company.</p>
                                    </li>
                                    <li>
                                        <p>No hidden fees.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="fourth-part">
                                <h3>EXPENSES AND MAINTENANCE FEES</h3>
                                <ul>
                                    <li>
                                        <p>All fees already deducted and won't cost You any extra. Income stated on the calculator is NET.</p>
                                    </li>
                                </ul>
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
export default FAQ;
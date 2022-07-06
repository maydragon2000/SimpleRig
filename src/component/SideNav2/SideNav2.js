import React, { useState, useEffect } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, {
    NavItem,
} from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";
import "./style.css"
const SideNavBar = ({ setBackgroundOpacity, setIsIntroducePage, isIntroducePage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const onClickSideToggle = () => {
        if (isVisible) {
            setBackgroundOpacity("1");
        }
        else {
            setBackgroundOpacity("0.5");
        }
        setIsVisible(!isVisible);
    }
    useEffect(() => {
        if (window.innerWidth >= 620 && !isIntroducePage)
            setIsVisible(true);
        else setIsVisible(false);
    }, [isIntroducePage]);
    useEffect(() => {
        if (isIntroducePage) {
            setIsVisible(false);
            setBackgroundOpacity("1")
        }
        else {
            setIsVisible(true);
            setBackgroundOpacity("1")
        }
    }, [isIntroducePage, setBackgroundOpacity])
    return (
        <SideNav expanded={isVisible} >
            <SideNav.Toggle
                className="sideNav-toggle"
                style={{ display: window.innerWidth >= 620 && !isIntroducePage ? "none" : "block" }}
                onClick={() => {
                    onClickSideToggle();
                }}
            />
            <SideNav.Nav defaultSelected="DASHBOARD" className="side-nav">
                <NavItem eventKey="DASHBOARD" className="nav-item">
                    <Link to="/DASHBOARD" onClick={() => { setIsIntroducePage(false) }}>
                        <svg viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M2.00002 0.5H12.4C13.1 0.5 13.7 1.20001 13.7 1.70001V20.2C13.7 20.9 13.1 21.4 12.4 21.4H2.00002C1.30002 21.4 0.700012 20.7 0.700012 20.2V1.70001C0.700012 1.10001 1.30002 0.5 2.00002 0.5Z" fill="currentColor" />
                            <path d="M2.00002 23.8H12.4C13.1 23.8 13.7 24.5001 13.7 25.1001V32.9001C13.7 33.6001 13.1 34.2001 12.4 34.2001H2.00002C1.30002 34.2001 0.700012 33.5001 0.700012 32.9001V25.1001C0.700012 24.4001 1.30002 23.8 2.00002 23.8Z" fill="currentColor" />
                            <path d="M17.5 13.5H27.9C28.6 13.5 29.2 14.2 29.2 14.7V33C29.2 33.7 28.6 34.2 27.9 34.2H17.5C16.8 34.2 16.2 33.5 16.2 33V14.8C16.2 14 16.8 13.5 17.5 13.5Z" fill="currentColor" />
                            <path d="M17.5 0.5H27.9C28.6 0.5 29.2 1.19999 29.2 1.79999V9.60001C29.2 10.3 28.6 10.9 27.9 10.9H17.5C16.8 10.9 16.2 10.2 16.2 9.60001V1.79999C16.2 1.09999 16.8 0.5 17.5 0.5Z" fill="currentColor" />
                        </svg>
                        DASHBOARD</Link>
                </NavItem>
                <NavItem eventKey="Deposit" className="nav-item">
                    <Link to="/DEPOSIT" onClick={() => { setIsIntroducePage(false) }} >DEPOSIT</Link>
                </NavItem>
                <NavItem eventKey="WITHDRAWAL" className="nav-item">
                    <Link to="/WITHDRAWAL" onClick={() => { setIsIntroducePage(false) }}>WITHDRAWAL</Link>
                </NavItem>
                <NavItem eventKey="REFERRALS" className="nav-item">
                    <Link to="/REFERRALS" onClick={() => { setIsIntroducePage(false) }}>REFERRALS</Link>
                </NavItem>
                <NavItem eventKey="COMPANY" className="nav-item">
                    <Link to="/COMPANY" onClick={() => { setIsIntroducePage(true) }}>COMPANY</Link>
                </NavItem>
                <NavItem eventKey="FAQ" className="nav-item">
                    <Link to="/FAQ" onClick={() => { setIsIntroducePage(true) }}>FAQ</Link>
                </NavItem>
                <NavItem eventKey="TERMS" className="nav-item">
                    <Link to="/TERMS" onClick={() => { setIsIntroducePage(true) }}>Terms Of Use</Link>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideNavBar;

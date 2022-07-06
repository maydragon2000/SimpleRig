import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const SingleLink = ({ data }) => {
    return (
        <NavItem eventKey="DASHBOARD" className="nav-item">
            <Link to="/DASHBOARD">
                <svg viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M2.00002 0.5H12.4C13.1 0.5 13.7 1.20001 13.7 1.70001V20.2C13.7 20.9 13.1 21.4 12.4 21.4H2.00002C1.30002 21.4 0.700012 20.7 0.700012 20.2V1.70001C0.700012 1.10001 1.30002 0.5 2.00002 0.5Z" fill="currentColor" />
                    <path d="M2.00002 23.8H12.4C13.1 23.8 13.7 24.5001 13.7 25.1001V32.9001C13.7 33.6001 13.1 34.2001 12.4 34.2001H2.00002C1.30002 34.2001 0.700012 33.5001 0.700012 32.9001V25.1001C0.700012 24.4001 1.30002 23.8 2.00002 23.8Z" fill="currentColor" />
                    <path d="M17.5 13.5H27.9C28.6 13.5 29.2 14.2 29.2 14.7V33C29.2 33.7 28.6 34.2 27.9 34.2H17.5C16.8 34.2 16.2 33.5 16.2 33V14.8C16.2 14 16.8 13.5 17.5 13.5Z" fill="currentColor" />
                    <path d="M17.5 0.5H27.9C28.6 0.5 29.2 1.19999 29.2 1.79999V9.60001C29.2 10.3 28.6 10.9 27.9 10.9H17.5C16.8 10.9 16.2 10.2 16.2 9.60001V1.79999C16.2 1.09999 16.8 0.5 17.5 0.5Z" fill="currentColor" />
                </svg>
                DASHBOARD</Link>
        </NavItem>
    )
}
export default SingleLink;

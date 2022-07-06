import React from "react";
import { Navbar } from "react-bootstrap";
import SingleLink from "../SingleLink/SingleLink";
import { useSubpageContext } from "../../context/SubpageContext";
import "./style.css";
const SideNav = ({ setSideOpen, intFrameWidth, setBackgroundOpacity }) => {
    const { activeId, setActiveId } = useSubpageContext();
    const linkClick = (id) => {
        setActiveId(id);
        if (intFrameWidth < 620) {
            setSideOpen("-300px");
            setBackgroundOpacity("1");
        }
    }
    const closeSide = () => {
        setSideOpen("-300px");
        setBackgroundOpacity("1");
    }
    const linkList = [{
        to: "/DASHBOARD",
        label: "DASHBOARD",
        svgDisplay: "initial",
        id: 1,
    },
    {
        to: "/DEPOSIT",
        label: "DEPOSIT",
        svgDisplay: "none",
        id: 2,
    },
    {
        to: "/WITHDRAWAL",
        label: "WITHDRAWAL",
        svgDisplay: "none",
        id: 3,
    },
    {
        to: "/REFERRALS",
        label: "REFERRALS",
        svgDisplay: "none",
        id: 4,
    },
    {
        to: "/Company",
        label: "COMPANY",
        svgDisplay: "none",
        id: 5,
    },
    {
        to: "/FAQ",
        label: "FAQ",
        svgDisplay: "none",
        id: 6,
    },
    {
        to: "/TERMS",
        label: "Terms Of Use",
        svgDisplay: "none",
        id: 6,
    }
    ];
    return (
        <>
            <div className="nav-side">
                <Navbar>
                    <div className="sidebar-arrow-left" style={{ display: intFrameWidth > 620 ? "none" : "flex" }}>
                        <svg onClick={() => closeSide()} width="56" height="37" viewBox="0 0 56 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4502 2.9999L3.4867 17.445C2.83748 17.9319 2.83748 19.068 3.4867 19.5549L23.4502 34" stroke="#449552" strokeWidth="6" strokeMiterlimit="10" />
                            <path d="M55.748 18.9058H8.03038" stroke="#449552" strokeWidth="6" strokeMiterlimit="10" />
                        </svg>
                    </div>
                    <div className="nav-link-wrap" >
                        {
                            linkList.map((item, index) => <SingleLink data={item} linkClick={linkClick} activeId={activeId} key={index} />)
                        }
                    </div>
                </Navbar>
            </div>
        </>
    )
}
export default SideNav;
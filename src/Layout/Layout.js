import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../component/SideNav2/SideNav2"
import { SubpageContextProvider } from "../context/SubpageContext";
import "./style.css";
const Layout = () => {
    const [backgroundOpacity, setBackgroundOpacity] = useState("1");
    const [isIntroducePage, setIsIntroducePage] = useState(false);
    return (
        <>
            <SubpageContextProvider>
                <div className="layout row">
                    <div className="layout-left col-3" style={{ position: isIntroducePage ? "absolute" : "", height: isIntroducePage ? "90%" : "" }} >
                        <SideNavBar setBackgroundOpacity={setBackgroundOpacity} setIsIntroducePage={setIsIntroducePage} isIntroducePage={isIntroducePage} />
                    </div>
                    <div className="layout-right col-9" style={{ opacity: backgroundOpacity, width: isIntroducePage ? "100%" : "" }}>
                        <Outlet />
                    </div>
                </div>
            </SubpageContextProvider>
        </>
    )
}
export default Layout;
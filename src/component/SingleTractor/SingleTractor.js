import React from "react";
import SingleButton from "../SingleButton/SingleButton";
const SingleTractor = ({ data }) => {
    return (
        <div className="singleTractor" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            <img alt="" src={`image/${data.image} `} />
            <div className="tractor-detail">
                <p style={{ fontSize: "30px", color: "#449552", fontWeight: "700", marginBottom: "0px", marginTop: "10px" }}>{data.status}</p>
                <p style={{ fontSize: "40px", fontWeight: "800", WebkitTextStroke: "2px" }}>${data.price}</p>
                <p style={{ margin: "10px", color: "#7f7f7f" }}>In Stock</p>
                <p style={{ fontWeight: "700", WebkitTextStroke: "1px" }}>PROFITABILITY</p>
                <p style={{ color: "#7f7f7f" }}>0.00000050</p>
                <p className="percent" style={{ color: "#7f7f7f" }}>12% monthly</p>
                <p style={{ fontWeight: "700", WebkitTextStroke: "1px" }}>Payouts</p>
                <p style={{ color: "#7f7f7f" }}>Daily in BTC</p>
                <SingleButton className="learnmore" value="LEARN MORE" image="" />
            </div>
        </div>
    )
}
export default SingleTractor
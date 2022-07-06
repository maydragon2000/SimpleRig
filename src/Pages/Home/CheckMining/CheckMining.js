import React from "react";
import "./style.css"
import { GoTriangleRight } from "react-icons/go"
const CheckMining = () => {
    return (
        <>
            <div className="check-mining">
                <div className="check-area">
                    <div className="check-area-inner">
                        <p>CHECK HOW EASY <label>MINING CAN BE</label></p>
                        <button>
                            <GoTriangleRight className="vertical-icon" />
                        </button>
                        <img className="gold-coin" alt="" src="image/4.png" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default CheckMining;
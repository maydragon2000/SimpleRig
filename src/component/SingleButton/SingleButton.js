import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom";

const SingleButton = (data) => {
    var path = "";
    if (data.to !== undefined) {
        path = data.to;
    }

    return (
        <>
            {
                data.image === "" ? <Link to={path} onClick={data.onClick} className={data.className}>{data.value}<AiOutlineArrowRight className="arrow-right" /></Link>
                    : <Link to={path} onClick={data.onClick} className={data.className}><img alt="" src={`image/${data.image}`} /> {data.value}<AiOutlineArrowRight className="arrow-right" /></Link>
            }

        </>
    )
}
export default SingleButton;
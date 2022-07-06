import React, { useState } from "react";
import "./style.css";
import { Modal } from "react-bootstrap"
import SingleButton from "../SingleButton/SingleButton"
const SinglePlan = ({ data }) => {
    const planClick = () => {
        setShow(true);
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <div onClick={planClick} className="plan">
                <svg id="plan" viewBox="0 0 562 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M517.893 181.449H526.201C533.601 181.449 539.601 175.649 539.701 168.549L561.101 13.0489C561.101 5.94889 555.001 0.148926 547.601 0.148926H13.501C6.00098 0.148926 0.000976562 5.94889 0.000976562 13.0489L21.301 168.549C21.301 175.649 27.401 181.449 34.801 181.449H42.9308C108.028 165.167 190.631 155.449 280.501 155.449C370.289 155.449 452.823 165.194 517.893 181.449Z" fill={data.color} />
                </svg>
                <div className="d-flex text">
                    <div className="plan-left">
                        <p>{data.planTitle}</p>
                        <p>{data.planNumber}</p>
                    </div>
                    <div className="plan-right">
                        <p>NO.AVL</p>
                        <p>{data.avlNumber}</p>
                    </div>
                </div>
            </div>
            <Modal show={show} className="plan-modal" onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="d-flex modal-header-inner">
                        <div className="modal-header-left">
                            <h4>{data.planTitle}</h4>
                            <h4 className="number">{data.planNumber}</h4>
                        </div>
                        <div className="modal-header-right">
                            <h4>NO.AVL</h4>
                            <h4 className="number">{data.avlNumber}</h4>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>
                            <h5>Average Daily Income</h5>
                            <h4>0.000045 BTC</h4>
                        </li>
                        <li>
                            <h5>Average Monthly Income</h5>
                            <h4>0.000345 BTC</h4>
                        </li>
                        <li>
                            <h5>Average Yearly Income</h5>
                            <h4>0.003445 BTC</h4>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <h5 style={{ fontWeight: "100" }}>Balance</h5>
                    <div className="modal-footer-inner">
                        <div >
                            <h4>0.0000459 BTC</h4>
                        </div>
                        <div>
                            <SingleButton to="/WITHDRAWAL" onClick={handleClose} image="" value="WITHDRAW" />
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default SinglePlan;

import React, { useState, CSSProperties } from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode.ActualMode} bg-${props.mode.ActualMode} `} style={{ backgroundColor: props.mode.ActualMode, color: "white" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {props.brand}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">
                                {props.Home}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.Links}
                            </a>
                        </li>
                    </ul>
                    {/* theme no 1 */}
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" onClick={props.greenmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Green Theme</label>
                    </div>
                    {/* theme no 2 */}
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" onClick={props.bluemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Blue Theme</label>
                    </div>
                    {/* theme no 3 */}
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" onClick={props.purplemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Purple Theme</label>
                    </div>
                    <div className="form-check form-switch mx-2">
                        <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode.ActualMode === 'light' ? 'dark' : 'light'}`} htmlhtmlFor="flexSwitchCheckDefault">{props.mode.Modetext}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    brand: PropTypes.string,
    Home: PropTypes.string,
    Links: PropTypes.string,
};
Navbar.defaultProps = {
    brand: "hahaha",
    Home: "Home",
    Links: "Contact",
};

import React from "react";
import "../../index.css";

const Overlay = ({ children }) => {
    return (
        <div className="overlay-container">
            {children}
            <div className=""></div>
        </div>
    );
};

export default Overlay;
import React from "react";
import "../../index.css";

const Overlay = ({ children }) => {
    return (
        <div className="overlay-container">
            {children}
            <div className="overlay"></div>
        </div>
    );
};

export default Overlay;
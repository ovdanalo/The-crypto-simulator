import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 2000);
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
            <h2 style={{ color: "#dc3545", fontSize: "5rem" }}>404</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px", color: "white" }}>
                Oops! Page not found.
            </p>
            <Link
                to="/top-10"
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "160px",
                }}>
                Go back to homepage
            </Link>
        </div>
    );
};

export default NotFound;

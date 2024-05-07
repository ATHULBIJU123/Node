import React from "react";

function Container1() {
    return (
        <>
            <div className="cont">
                <div className="iphone">
                    <h2>iPhone 15 Pro</h2>
                    <p className="p1">Titanium. So Strong. So Light. So Pro.</p> <br />
                    <p className="p2">
                        <a
                            href=""
                            style={{ textDecoration: "none", color: "rgb(109, 142, 212)" }}
                        >
                            Learn More{" "}
                        </a>
                        <a
                            href=""
                            style={{ textDecoration: "none", color: "rgb(109, 142, 212)" }}
                            className="p2-1"
                        >
                            Buy{" "}
                        </a>
                    </p>
                </div>
                <div className="pro">
                    <img
                        src="Images/Pictures/hero_iphone15pro__i70z9oz3hj2i_large.jpg"
                        alt="iphone"
                        width="100%"
                        height="624px"
                    />
                </div>
            </div>
        </>
    )
}

export default Container1;
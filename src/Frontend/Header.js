import React from "react";

function Header(props) {
    return (
        <div id="header">
            <div className="row">
                <div className="col-md-6 text-center pt-5">
                    <h2 className="header-title text-white">What We Do?</h2>
                    <p className="header-body text-white mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button className="header-btn mt-3">Learn More</button>
                </div>
                <div className="col-md-6">
                    <img src="/assets/images/social.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
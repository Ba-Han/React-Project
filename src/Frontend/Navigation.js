import React from "react";
import '../App.css';

function Navigation(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="appNavBar">
                <a className="navbar-brand text-white" href="#a1">
                    <img className="img-fluid" src="/assets/images/shopping.png" width='50px' alt=""/>
                    <span className="text-white shop-text">Shopping</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#a2">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#a3">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#a3">ABOUTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#a3">PRODUCTS</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#a3">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
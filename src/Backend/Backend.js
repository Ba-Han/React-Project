import React from "react";
import Navigator from "./Navigator";
import Sidebar from "./Sidebar";
import AddProducts from "./Products/AddProudcts";
import '../App.css';

function Backend (props) {
    return (
        <div>
            
            <div className="wrapper">
            <div className="preloader flex-column justify-content-center align-items-center"></div>
            </div>

            <Navigator></Navigator>
            <Sidebar></Sidebar>

            <div className="content-wrapper">
                <AddProducts></AddProducts>
            </div>

            <footer className="main-footer">
                <strong>Copyright © 2014-2024<a href="#2"> BaHan-Programming</a>.</strong> All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
                </div>
            </footer>

            <aside className="control-sidebar control-sidebar-dark" />

            <div id="sidebar-overlay"></div>

        </div>
    );
}

export default Backend;
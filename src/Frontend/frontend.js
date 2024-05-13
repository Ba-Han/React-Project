import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Services from "./Services";
import Description from "./Description";
import Proudcts from "./Products";
import Footer from "./Footer";

function Frontend(props) {
    return (
        <div className="appContainer">
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Description></Description>
            <Proudcts></Proudcts>
            <Footer></Footer>
        </div>
    );
}

export default Frontend;
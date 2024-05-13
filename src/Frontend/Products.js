import React from "react";
import '../App.css';

function Proudcts(props) {
    return (
        <div>
            <section className="container">
                <h2 className="pt-3 text-center">Our Products</h2>

                <div className="row pt-3 pb-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="img-fluid" src="/assets/images/laptop.jpg" alt=""/>

                            <div>
                                <h2 className="card-title text-center pt-2">Products</h2>
                                <p className="card-body text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>

                                <div className="row">
                                    <p className="pl-5">MMK 250000</p>
                                    
                                    <p className="pl-5 ml-5">
                                        <i class="ml-5 fa-solid fa-cart-arrow-down"></i>
                                        <span className="ml-2 badge badge-bill badge-dark">0</span>
                                    </p>
                                </div>

                                <div className="text-center pb-4">
                                    <button className="card-btn">View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img className="img-fluid" src="/assets/images/laptop.jpg" alt=""/>

                            <div>
                                <h2 className="card-title text-center pt-2">Products</h2>
                                <p className="card-body text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>

                                <div className="row">
                                    <p className="pl-5">MMK 250000</p>
                                    
                                    <p className="pl-5 ml-5">
                                        <i class="ml-5 fa-solid fa-cart-arrow-down"></i>
                                        <span className="ml-2 badge badge-bill badge-dark">0</span>
                                    </p>
                                </div>

                                <div className="text-center pb-4">
                                    <button className="card-btn">View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img className="img-fluid" src="/assets/images/laptop.jpg" alt=""/>

                            <div>
                                <h2 className="card-title text-center pt-2">Products</h2>
                                <p className="card-body text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>

                                <div className="row">
                                    <p className="pl-5">MMK 250000</p>
                                    
                                    <p className="pl-5 ml-5">
                                        <i class="ml-5 fa-solid fa-cart-arrow-down"></i>
                                        <span className="ml-2 badge badge-bill badge-dark">0</span>
                                    </p>
                                </div>

                                <div className="text-center pb-4">
                                    <button className="card-btn">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Proudcts;
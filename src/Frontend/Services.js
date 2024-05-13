import React from "react";

function Services(props) {
    return (
        <div>
            <section className="container pt-3">
                <h2 className="text-center pt-3">Our Services</h2>

                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid" src="/assets/images/android.jpg"  alt=""/>
                        <h2 className="services-title">Digital Marketing</h2>
                        <p className="services-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid" src="/assets/images/android.jpg"  alt=""/>
                        <h2 className="services-title">Android Development</h2>
                        <p className="services-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <div className="col-md-4">
                        <img className="img-fluid" src="/assets/images/android.jpg"  alt=""/>
                        <h2 className="services-title">Web Development</h2>
                        <p className="services-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
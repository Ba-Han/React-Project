import React from "react";
import '../App.css';

function Description (props) {
    return (
        <div>
            <section className="pt-3">
                <h2 className="text-center">Our App For You</h2>

                <div className="row pt-3">
                        <div className="col-md-6">
                            <img className="img-fluid" src="/assets/images/media.jpg" alt="" />
                        </div>
                        
                        <div className="col-md-6 description-head">
                            <p className="description-body mt-5 text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>

                            <div className="text-center pt-3">
                                <button className="description-btn">IOS App</button>
                                <button className="ml-2 description-btn">Android App</button>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Description;
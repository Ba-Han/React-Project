/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import '../App.css';

function Footer(props) {
    return (
        <div>
            <section className="pt-3" id="footer">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-justify pl-5">Contact Me</h2>

                        <div className="text-justify pl-5 pt-3">
                            <p> <i className="fa-solid fa-map"></i> <span className="pl-2">Taunggyi, Myanamr</span></p>
                            <p> <i className="fa-solid fa-phone"></i> <span className="pl-2">+959 260 943 178</span></p>
                            <p> <i className="fa-sharp fa-solid fa-envelope"></i> <span className="pl-2">khunbahan.kbh1234@gmail.com</span></p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2>My Location</h2>
                        <p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59682.24704091664!2d97.0410888!3d20.7856055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ce86381a88cc0f%3A0xf53083c4263eb24b!2sTaunggyi!5e0!3m2!1sen!2smm!4v1714472084398!5m2!1sen!2smm" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </p>
                    </div>
                </div>

                <div id='footer-bar'>
                    <p>Design & Developed By BaHan</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;
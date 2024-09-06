import React from "react";
import India from '../assets/images/india.png';
import USA from '../assets/images/USA.png';
import { Link } from "react-router-dom";

const Location = () => {
    return (
        <div>
            {/* start locations */}
            <div className="location-home ">
                <div className="container-fluid">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-5 offset-md-1">
                            <div className="location-block pt60 pb60">
                                <div className="sec-heading mb-5">
                                    <span className="sub-heading mb15">Find Us</span>
                                    <h2>
                                        Our <span className="ree-text rt40">Office</span> Locations
                                    </h2>
                                </div>
                                <div className="d-flex">
                                    <figure className="location-image">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                src={India}
                                                className="img-fluid"
                                                alt="new-delhi"
                                                width={150}
                                                height={201}
                                            />
                                        </picture>
                                    </figure>
                                    <figcaption className="location-content">
                                        <div className="loc-icon-nam">
                                            <p>
                                                <span className="rt40">India | Development Center</span>{" "}
                                                {/* <span className="Headquarters">Headquarters</span> */}
                                            </p>
                                        </div>
                                        <p className="pt20 pb20">
                                            Office No: 12A01, 13th Floor, The Iconic Corenthum, A-41, Sector-62, Noida-201301 Delhi NCR, India
                                        </p>
                                        <div className="location-phone-number">
                                            <Link
                                                to="tel:+919818757597"
                                                target="blank"
                                                className="btn-outline rount-btn"
                                                data-toggle="tooltip"
                                                title="Phone Number"
                                            >
                                                <i className="fas fa-phone-alt" />
                                                <span>+91 981 875 7597</span>
                                            </Link>
                                        </div>
                                        <div className="loc-contct mt20">
                                            <Link
                                                to="https://goo.gl/maps/41xxF5oywoTKUusLA"
                                                target="_blank" rel="noreferrer"
                                                className="btn-outline rount-btn"
                                                data-toggle="tooltip"
                                                title="Map Location"
                                            >
                                                <i className="fas fa-map-marker-alt" />
                                            </Link>
                                            <Link
                                                to="mailto:sales@targeticon.com"
                                                target="_blank" rel="noreferrer"
                                                className="btn-outline rount-btn"
                                                data-toggle="tooltip"
                                                title="Email Address"
                                            >
                                                <i className="fas fa-envelope" />
                                            </Link>
                                            <Link
                                                to="skype:target.icon?chat"
                                                target="_blank" rel="noreferrer"
                                                className="btn-outline rount-btn"
                                                data-toggle="tooltip"
                                                title="Skype Id"
                                            >
                                                <i className="fab fa-skype" />
                                            </Link>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="location-block overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.101630764884!2d77.37119297613712!3d28.626715984343548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5447d350e9f%3A0x4beba507fa3f455b!2sThe%20Iconic%20Corenthum!5e0!3m2!1sen!2sin!4v1725606894243!5m2!1sen!2sin"
                                    width="1000"
                                    height="550"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end locations */}
        </div>
    );
};
export default Location;
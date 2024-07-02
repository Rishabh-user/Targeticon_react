import React from "react";
import India from '../assets/images/india.png';
import USA from '../assets/images/USA.png';
import { Link } from "react-router-dom";

const Location = () => {
    return (
        <div>
            {/* start locations */}
            <div className="location-home pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-12">
                            <div className="sec-heading text-center">
                                <span className="sub-heading mb15">Find Us</span>
                                <h2>
                                    Our <span className="ree-text rt40">Office</span> Locations
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="location-block- mt60">
                                <figure className="location-image">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={India}
                                            className="img-fluid"
                                            alt="new-delhi"
                                            width={120}
                                            height={201}
                                        />
                                    </picture>
                                </figure>
                                <figcaption className="location-content">
                                    <div className="loc-icon-nam">
                                        <p>
                                            <span className="rt40">India</span>{" "}
                                            <span className="Headquarters">Headquarters</span>
                                        </p>
                                    </div>
                                    <p className="pt20 pb20">
                                        Office No: 12A01, 13th Floor, The Iconic Corenthum,
                                        <br /> A-41, Sector-62, Noida-201301 Delhi NCR, India
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
                        <div className="col-lg-6">
                            <div className="location-block- mt60">
                                <figure className="location-image">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={USA}
                                            className="img-fluid"
                                            alt="USA"
                                            width={120}
                                            height={201}
                                        />
                                    </picture>
                                </figure>
                                <figcaption className="location-content">
                                    <div className="loc-icon-nam">
                                        <p>
                                            <span className="rt40">United States</span>
                                        </p>
                                    </div>
                                    <p className="pt20 pb20">
                                        Jamaica Estates, Queens,
                                        <br />
                                        New York 11432
                                    </p>
                                    <div className="location-phone-number">
                                        <Link
                                            to="tel:+17183952545"
                                            target="blank"
                                            className="btn-outline rount-btn"
                                            data-toggle="tooltip"
                                            title="Phone Number"
                                        >
                                            <i className="fas fa-phone-alt" />
                                            <span>+1 718 395 2545</span>
                                        </Link>
                                    </div>
                                    <div className="loc-contct mt20">
                                        <Link
                                            to="https://goo.gl/maps/41xxF5oywoTKUusLA"
                                            target="blank"
                                            className="btn-outline rount-btn"
                                            data-toggle="tooltip"
                                            title="Map Location"
                                        >
                                            <i className="fas fa-map-marker-alt" />
                                        </Link>
                                        <Link
                                            to="mailto:sales@targeticon.com"
                                            target="blank"
                                            className="btn-outline rount-btn"
                                            data-toggle="tooltip"
                                            title="Email Address"
                                        >
                                            <i className="fas fa-envelope" />
                                        </Link>
                                        <Link
                                            to="skype:target.icon?chat"
                                            target="blank"
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
                </div>
            </div>
            {/* end locations */}
        </div>
    );
};
export default Location;
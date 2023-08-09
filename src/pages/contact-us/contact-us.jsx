import React from "react";
import FormInfo from "../../components/form-info";
import Location from "../../components/location";
import contactus2 from '../../assets/images/contact-us2.png';
import communicate from '../../assets/images/icons/Communicate.png';
import understanding from '../../assets/images/icons/understanding.png';
import clientneed from '../../assets/images/icons/clients-need.png';
import timezone from '../../assets/images/icons/time-zone.png';
import timeon from '../../assets/images/icons/on-time.png';
import hours from '../../assets/images/icons/24-hours.png';
import rate from '../../assets/images/icons/rate.png';
import trophy from '../../assets/images/icons/trophy.png';

const ContactUs = () => {
    return (
        <div>
            <section className="header-title dark-bg pera-block Contactus-bg pt60">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 vcenter">
                            <span className="sub-heading mb15">
                                <i className="fas fa-headset mr5" /> Contact Us
                            </span>
                            <h2 className="please-fill-form">Good Talks Make Good Project.</h2>
                            <p className="please-fill-form">
                                Please fill in the form below or mail us your requirements.
                            </p>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="m-mt30">
                                <picture>
                                    <img
                                        fetchpriority="high"
                                        src={contactus2}
                                        className="img-fluid"
                                        alt="contact-us"
                                        width={590}
                                        height={490}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start contact form*/}
            <FormInfo />
            {/*contact form end*/}

            {/*start find us location*/}
            <Location />
            {/*end find us location*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-7 text-center">
                            <div className="page-headings">
                                <h2>We’re Here to Help</h2>
                                <p className="mt15">
                                    Lipsum dolor sit amet, consectetur adipisicing elit. sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30">
                        <div className="col-lg-4 col-sm-6">
                            <div className="ree-card mt30 pera-block ree-card-content">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={communicate}
                                        className="img-fluid mb20"
                                        alt="Communicate"
                                        width={100}
                                        height={100}
                                    />
                                </picture>
                                <h3>Communicate Your Requirements</h3>
                                <p>
                                    Our software house has been recognised by google for outstanding
                                    android application quality.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="ree-card mt30 pera-block ree-card-content">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={understanding}
                                        className="img-fluid mb20"
                                        alt="understanding"
                                        width={100}
                                        height={100}
                                    />
                                </picture>
                                <h3>Understanding the Requirement</h3>
                                <p>
                                    Our software house has been recognised by google for outstanding
                                    android application quality.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="ree-card mt30 pera-block ree-card-content">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={clientneed}
                                        className="img-fluid mb20"
                                        alt="clients-need"
                                        width={100}
                                        height={100}
                                    />
                                </picture>
                                <h3>Targeticon Respect the Client Needs</h3>
                                <p>
                                    Our software house has been recognised by google for outstanding
                                    android application quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* we Here to Help end  */}
            {/*start  */}
            {/*<div class="pt60 pb60 reexyz" data-background="images/icons/bg-pattern2.png" style="background-repeat: no-repeat;">*/}
            <div className="pt60 pb60 reexyz">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-12">
                            <div className="icon-block-ree">
                                <div className="icon-card-title">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={timezone}
                                            className="img-fluid"
                                            alt="Work at Your Time Zone"
                                            width={80}
                                            height={80}
                                        />
                                    </picture>
                                    <p className="txt-white">Work at Your Time Zone</p>
                                </div>
                                <div className="icon-card-title">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={timeon}
                                            className="img-fluid"
                                            alt="Easy & Timely Communication"
                                            width={80}
                                            height={80}
                                        />
                                    </picture>
                                    <p className="txt-white">Easy &amp; Timely Communication</p>
                                </div>
                                <div className="icon-card-title">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={hours}
                                            className="img-fluid"
                                            alt="Support Available at 24 Hours"
                                            width={80}
                                            height={80}
                                        />
                                    </picture>
                                    <p className="txt-white">Support Available at 24 Hours</p>
                                </div>
                                <div className="icon-card-title">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={rate}
                                            className="img-fluid"
                                            alt="Ratings 4.9 out of 8,500 Clients"
                                            width={80}
                                            height={80}
                                        />
                                    </picture>
                                    <p className="txt-white">Ratings 4.9 out of 8,500 Clients</p>
                                </div>
                                <div className="icon-card-title">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={trophy}
                                            className="img-fluid"
                                            alt="Award Wining Service and Support"
                                            width={80}
                                            height={80}
                                        />
                                    </picture>
                                    <p className="txt-white">Award Wining Service and Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;
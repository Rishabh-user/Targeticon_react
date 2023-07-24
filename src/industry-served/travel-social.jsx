import React from "react";
import { Link } from "react-router-dom";
import FormIndustries from "../components/form-industries";
import OursTools from "../components/our-tools";
import TravelGif from '../assets/images/GIF/travel.gif';
import TravelSocialService from '../assets/images/icons/travel-social-service.png'

const TravelSocial = () => {
    return (
        <div>
            {/*start Hero Section  */}
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-6 vcenter">
                            <div className="hero-content pera-block">
                                <span className="sub-heading mb15">We scale brands</span>
                                <h1 data-aos="fade-in" data-aos-delay={100}>
                                    Travel &amp; Social
                                </h1>
                                <p data-aos="fade-in" data-aos-delay={200}>
                                    Accomplish your traveling requirements with our digital solutions
                                    for Travel &amp; Social apps.
                                </p>
                                <Link
                                    to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={300}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 vcenter">
                            <div className="sol-image m-mt30">
                                <img
                                    src={TravelGif}
                                    alt="healthcare"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                    width="600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*hero Section End*/}
            {/*start home-about  */}
            <section className="home-about pt60 pb60 r-bg-a">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-7">
                            <div className="about-content-home">
                                <span className="sub-heading mb15">We Are Targeticon</span>
                                <h2>
                                    <span className="ree-text rt40">Travel &amp; Social</span>{" "}
                                    Overview
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    The development of tourism business depends on the online services
                                    that they offer to their clients. World’s eminent travel &amp;
                                    social brands run their business with the assistance of acute
                                    software and apps that amazingly upgrades the management services
                                    for running a successful travel agency or company. Our creative
                                    app development services excellently help the travel companies and
                                    operators for growing the business easily and perfectly.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    The travel agencies can readily store, manage and collect data for
                                    doing business activities accurately. This leading app brilliantly
                                    assists to manage business activities, so that the operators can
                                    able to increase client arrangements for all traveling services.
                                    There is no doubt that software development proves to be essential
                                    in any kind of business establishment.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    We completely understand the concerns of traveling industries,
                                    thus for making the business hassle-free, we provide excellent
                                    solutions to our clients. Get the best services for travel &amp;
                                    social business development. Our services are really capable to
                                    manage the resource efficiency and all requirements.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="form-contact-hom pt20 pb20">
                                <FormIndustries />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*home-about end*/}
            {/*start services*/}
            <section className="r-bg-i pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="sec-heading text-center pera-block">
                                <h2>
                                    Solutions <span className="ree-text rt40"> Offering</span>
                                </h2>
                                <p>
                                    It incredibly automates the companies for different purposes and
                                    lends superb benefits that are the following:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={TravelSocialService}
                                            className="img-fluid mb20"
                                            alt="travel-social-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Elementary Data Processing</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={TravelSocialService}
                                            className="img-fluid mb20"
                                            alt="travel-social-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Avail All Sizes Companies</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={TravelSocialService}
                                            className="img-fluid mb20"
                                            alt="travel-social-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Higher Degree Functionality</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={400}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={TravelSocialService}
                                            className="img-fluid mb20"
                                            alt="travel-social-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Innovative Service Experiences</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={TravelSocialService}
                                            className="img-fluid mb20"
                                            alt="travel-social-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Manage resources Efficientl</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*services end*/}
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}

            {/*start our tools */}
                <OursTools />
            {/*end our tools  */}
           
        </div>
    );
};
export default TravelSocial;
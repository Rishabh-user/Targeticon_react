import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../components/our-tools';
import FormIndustries from "../components/form-industries";
import insurancegif from '../assets/images/GIF/insurance.gif';
import insuranceservice from '../assets/images/icons/Insurance-service1.png';


const Insurance = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-6 vcenter">
                            <div className="hero-content pera-block">
                                <span className="sub-heading mb15">We scale brands</span>
                                <h1 data-aos="fade-in" data-aos-delay={100}>
                                    Insurance
                                </h1>
                                <p data-aos="fade-in" data-aos-delay={150}>
                                    We combine our industry expertise and the latest technology to
                                    deliver low cost and high-quality Insurance websites.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={200}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 vcenter">
                            <div className="sol-image m-mt30">
                                <img
                                    src={insurancegif}
                                    alt="healthcare"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                    width="500px"
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
                                    <span className="ree-text rt40">Insurance</span> Overview
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Customer service and the customer experience are becoming an
                                    important competitive differentiator in the insurance industry. To
                                    establish a successful relationship between insurers and
                                    customers, companies must focus on meeting consumer demands during
                                    each phase of the customer journey.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    {" "}
                                    Targeticon is proud to power front runners of the insurance
                                    industry by assisting them with cost-efficient software
                                    development services. From startups to enterprises, we are part of
                                    the ongoing Insurtech revolution.It excites us to watch and drive
                                    the momentum in such a well-established sector as insurance with
                                    lots of legacy software products and tremendous potential for
                                    innovation. We can help you run a successful insurance business by
                                    deploying modern technologies that will last for years.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    This is a critical turning point for the industry, and an
                                    opportunity to provide meaningful value for customers, employees
                                    and stakeholders. Targeticon Insurance has the experience and
                                    broad digital expertise to help insurers cultivate agility,
                                    creating seamless digital services for customers and new income
                                    streams across the business.
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
                        <div className="col-lg-8">
                            <div className="sec-heading text-center pera-block">
                                <h2>
                                    Solutions <span className="ree-text rt40">Offering</span>
                                </h2>
                                <p>
                                    When it comes to adding entertainment to a website, we are one of
                                    the most successful companies who provide this service. Our IT
                                    solutions set you up to meet and exceed the expectations unique to
                                    your industry. Some of the solutions that we provide are:
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
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Enterprise resource planning</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={150}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Customer relationship management</h3>
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
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Farm/crop management system</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={250}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>

                                        <img
                                            loading="lazy"
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Field operations management</h3>
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
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Warehouse management system</h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={350}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img shadows">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Livestock management system</h3>
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
                                            src={insuranceservice}
                                            className="img-fluid mb20"
                                            alt="Insurance-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Distributor management system</h3>
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
            <Tools />
            {/*end our tools  */}



        </div>
    );
};
export default Insurance;
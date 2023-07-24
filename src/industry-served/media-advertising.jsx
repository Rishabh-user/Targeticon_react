import React from "react";
import OursTools from "../components/our-tools";
import MediaGif from '../assets/images/GIF/media-ad.gif';
import FormIndustries from "../components/form-industries";
import MediaService from '../assets/images/icons/media-advertising-service.png'


const MediaAdvertising = () => {
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
                                    Media &amp; Advertising
                                </h1>
                                <p data-aos="fade-in" data-aos-delay={200}>
                                    Generate immediate results and tackle the challenges of business
                                    with the Media &amp; Advertising solutions.
                                </p>
                                <a
                                    href="contact-us.php"
                                    className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                    data-aos="fade-in"
                                    data-aos-delay={300}
                                >
                                    Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 vcenter">
                            <div className="sol-image m-mt30">
                                <img
                                    src={MediaGif}
                                    alt="media0-advertising"
                                    className="img-fluid"
                                    data-aos="fade-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*hero Section End*/}
            {/*start home-about  */}
            <section className="home-about pt60 pb60 r-bg-a">
                <div className="container" id="about">
                    <div className="row vcenter">
                        <div className="col-lg-7">
                            <div className="about-content-home m-mb60 pera-block">
                                <span className="sub-heading mb15">We Are Targeticon</span>
                                <h2>
                                    <span className="ree-text rt40">Media &amp; Advertising</span>{" "}
                                    Overview
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Utilization of digital strategies in media &amp; advertising
                                    industries helps to take the business at the next level.
                                    Technological solutions successfully manage the complexity of
                                    workforce in this particular area. Automated skills and tools
                                    assist to boost the opportunities to increase the growth of the
                                    business.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    {" "}
                                    It brings achievement in improving the interaction with the
                                    audience; with the help of different digital channels, companies
                                    can easily predict the needs and wants of their customers. The
                                    agencies and advertisers use technological assistance and
                                    solutions for their software development to make it competent for
                                    easily dealing with the competitive digital marketing.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={600}>
                                    {" "}
                                    Our greatest application solution understands the competitive
                                    situations and strategies of the business. It incredibly helps to
                                    know the customer requirements in the digital media and
                                    advertising market. Long-term growth of media and advertising
                                    market depends on some strategies that our solution offers, so
                                    just be ready to take the advantages from our services and become
                                    a successful marketer.
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
                                    Our solutions for medial and advertising applications maximize the
                                    benefits and reduce the challenges. Have a look at the perceptible
                                    benefits that are the following:
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
                                            src={MediaService}
                                            className="img-fluid mb20"
                                            alt="media-advertising-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Revenue Maximization</h3>
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
                                            src={MediaService}
                                            className="img-fluid mb20"
                                            alt="media-advertising-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Achieve Competitive Advantage</h3>
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
                                            src={MediaService}
                                            className="img-fluid mb20"
                                            alt="media-advertising-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Consummate Data Analysis</h3>
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
                                            src={MediaService}
                                            className="img-fluid mb20"
                                            alt="media-advertising-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Accelerate The Results</h3>
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
                                            src={MediaService}
                                            className="img-fluid mb20"
                                            alt="media-advertising-service"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">Reflect Business Objectives</h3>
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
export default MediaAdvertising;
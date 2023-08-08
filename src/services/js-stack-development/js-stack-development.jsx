import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import meanStactgif from '../../assets/images/GIF/JS-Stack-Development.gif';
import meanstack from '../../assets/images/JS-Stack-Development-imgg.png';
import easyway from '../../assets/images/icons/easy-use.png';
import features from '../../assets/images/icons/features.png';
import ourteam from '../../assets/images/icons/our-team.png';
import timelywork from '../../assets/images/icons/timely-work.png';


const JsStactDevelopment = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={200}>
                                    <span className="ree-text rt45 mr10">JS Stack</span> Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Full-cycle JS Stack Development. development our best with
                                    technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    JavaScript is used in almost every programming platform and with
                                    targeticon’s expert JS Stack developers we provide quality-driven,
                                    designs which are according to your users and their needs.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    {" "}
                                    It was first used as a front end engineering but later on has seen
                                    more growth in popularity after it was able to be used on the
                                    server side as well.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30" data-aos="fade-in">
                                <img
                                    src={meanStactgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="550px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Cloud Services*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="JS-Stack-Development-img text-center">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={meanstack}
                                        className="img-fluid mt20 mb20"
                                        alt="JS-Stack-Development-imgg"
                                        width={590}
                                        height={650}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <h2 className="mb15">JS Stack Development</h2>
                                <p className="port-tags">
                                    Javascript is one of the most popular programming languages as
                                    well as a dominant web development technology.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    It has been 20 years since javascript is around. It was first used
                                    as a front end engineering but later on has seen more growth in
                                    popularity after it was able to be used on the server side as
                                    well.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    Target icon is a well established technical consultancy service
                                    which provides you with the feature of js stack development. We
                                    have our expert team who is highly skilled under this field.
                                    Target icon has gained so much of popularity in a short time span
                                    of 2 years. It is a leading service provider which is specialized
                                    I delivering a wide range of services.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={500}>
                                    The company was established in 2016, and has quickly grown up to
                                    serve clients of different sizes and segments. We provide these
                                    services by leveraging our expertise, knowledge, technical
                                    solutions, and flexibility to accelerate the businesses of our
                                    clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Cloud Services*/}
            {/*-our The Process of UX Designing*/}
            <section className="r-bg-xx pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">
                                    There are many reasons for you to choose target icon as your
                                    preference. These are:
                                </h2>
                                <p>
                                    If you are thinking which platform to choose for your next
                                    project, then it is recommended for you to take consultancy
                                    services from target icon and get to know about all the important
                                    things and technologies to build up your project.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={easyway}
                                                    className="img-fluid mb20"
                                                    alt="easy-use"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Easy to use</h4>
                                        <p>
                                            You don’t need to have any kind of coding knowledge to use the
                                            tools provided by target icon. These tools are so easy to use
                                            that even a beginner can use them to create his project.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={features}
                                                    className="img-fluid mb20"
                                                    alt="features"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Features</h4>
                                        <p>
                                            Target icon provides you with enormous features and services
                                            that you can go through and decide what platform to choose for
                                            your next project.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={ourteam}
                                                    className="img-fluid mb20"
                                                    alt="our-team"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Our team</h4>
                                        <p>
                                            We have with us the teams who are experts in their fields and
                                            help you to discover new things as well as build up your
                                            project.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 cardadd">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={timelywork}
                                                    className="img-fluid mb20"
                                                    alt="timely-work"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Timely work</h4>
                                        <p>
                                            We make sure that our clients do not have to wait longer for
                                            their projects to be done. We do not believe in delayed work
                                            and try to deliver all the projects timely.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}
        </div>
    );
};
export default JsStactDevelopment;
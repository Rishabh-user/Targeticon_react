import React from "react";
import { NavLink } from "react-router-dom";
import phpgif from '../../assets/images/GIF/php.gif';
import overview from '../../assets/images/overview.png';
import customphp from '../../assets/images/icons/custom-php.png';
import phpweb from '../../assets/images/icons/php-web.png';
import coprate from '../../assets/images/icons/corporate.png';
import cms from '../../assets/images/icons/cms.png';
import mysql from '../../assets/images/icons/php-mysql.png';
import ecommers from '../../assets/images/icons/ecommers.png';
import phpportal from '../../assets/images/icons/php-portal.png';
import socialnetworking from '../../assets/images/GIF/social-networking.gif';

const PhpDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section
                className="page-heading-sec pt60 pb60"
                style={{ backgroundColor: "#eceff1" }}
            >
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings pt30">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45 mr10">php</span>Development Company
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    In the current scenario, php development has stricken the whole
                                    world in a revolutionary way. The php development is an ingenious
                                    invention by the pseudonym, Satoshi Nakamoto. The technology was
                                    mainly developed for the website development.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    The information that is kept on the blockchain exists as a shared
                                    database as the blockchain database is not stored in a single
                                    location. The records that are kept in the blockchain database are
                                    public and easily verifiable.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30" data-aos="fade-in">
                                <img
                                    src={phpgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start overview*/}
            <section className="r-bg-xyz pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={overview}
                                        className="img-fluid mb20"
                                        alt="overview"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={50}>
                                    Targeticon combines both imagination and creativity in such a
                                    manner that it tends to render the efficient user-friendly and
                                    interactive web solutions and web application. The team of
                                    developer understands the requirement of our clients and handles
                                    the development and programming services that covers the
                                    requirement of the global customer.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    {" "}
                                    The programmer tends to make the entire use of the open script
                                    programming language to make the web pages in the dynamic
                                    interface. The code offered to any of the web pages seems to be
                                    operational in addition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our Services*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Our Services</h2>
                                <p>
                                    Targeticon is one of the leading PHP service and web developer
                                    provider available in India that cater various service that
                                    includes the following listed below
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={customphp}
                                                    className="img-fluid mb20"
                                                    alt="custom-php"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Custom PHP Development</h4>
                                        <p>
                                            Targeticon creates custom website with the help of our skills
                                            and excellence working in sync which will definitely help your
                                            business. This is something adopted by each of the company
                                            that makes them understand the business procedure in a well
                                            detailed manner.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={phpweb}
                                                    className="img-fluid mb20"
                                                    alt="php-web"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>PHP Web Development</h4>
                                        <p>
                                            Business can expect the PHP web development at the best level
                                            as Targeticon put adequate focus on understanding the client
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={coprate}
                                                    className="img-fluid mb20"
                                                    alt="corporate"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Corporate Website Development</h4>
                                        <p>
                                            It needs the great level of expertise. The client can be sure
                                            about the secure websites and robust with the services
                                            offered. With such services, company is able to understand the
                                            nature of the website and method through which they can drive
                                            more traffic.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={cms}
                                                    className="img-fluid mb20"
                                                    alt="cms"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>PHP Based CMS Development</h4>
                                        <p>
                                            The company that are looking to choose the PHP based CMS
                                            development for their business can make their visit on
                                            Targeticon that offers unmatched services and benefits to
                                            their esteemed clients.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={mysql}
                                                    className="img-fluid mb20"
                                                    alt="php-mysql"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>PHP/MYSQL Development</h4>
                                        <p>
                                            Performance seems to be the major issue in the website of the
                                            database. However, Targeticon offers the services regarding
                                            the incredibly effective PHP/MySQL development.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">06</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={ecommers}
                                                    className="img-fluid mb20"
                                                    alt="ecommers"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>E-Commerce Development</h4>
                                        <p>
                                            Companies can entrust Targeticon for delivering the
                                            cross-platform and responsive web application that augments
                                            the business reach manifold. The companies has been available
                                            regarding the feature-packed and high performance online
                                            storefronts.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">07</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={phpportal}
                                                    className="img-fluid mb20"
                                                    alt="php-portal"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Portal Development Solutions</h4>
                                        <p>
                                            In instance if company needs an internal business portal or
                                            the web portal services, Targeticon seems to be one stop
                                            solution for all concern.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our Services end*/}
            {/*start conclusion*/}
            <section className="r-bg-t pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="cta-heading">
                                <h2 className="mb15">Social Networking Solutions</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={50}>
                                    The solution networking solution offers the wide array and
                                    efficient platform for the communication that took place in
                                    between the customers and business.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    {" "}
                                    Therefore, it is an ideal method to be adopted by the company that
                                    are new into the market and more focused on digital marketing
                                    instead of the physical marketing methods available. Targeticon is
                                    the company that offers the PHP development services at the right
                                    price that helps other firm to get attention of the small and
                                    medium firm looking to get valuable clients. If you are looking to
                                    avail the service of PHP development, then it has been recommended
                                    to choose Targeticon as the one-stop-solution as it offers
                                    unmatched services in the affordable price without any sort of
                                    hassle.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <img
                                    src={socialnetworking}
                                    alt="hybird-app"
                                    className="img-fluid"
                                    width="600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end conclusion*/}
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            {/*?php include 'include/our-tools.php';?*/}
            {/*end our tools  */}
            {/*start footer  */}
            {/*?php include 'include/footer.php';?*/}
            {/*end footer  */}
        </div>
    );
};
export default PhpDevelopment;
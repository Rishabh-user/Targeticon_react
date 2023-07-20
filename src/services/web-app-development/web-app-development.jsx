import React from "react";
import { NavLink } from "react-router-dom";
import webgif from '../../assets/images/GIF/web.gif';
import webappgif from '../../assets/images/GIF/web-app-development.gif';
import dotnet from '../../assets/images/icons/dot-net.png';
import php from '../../assets/images/icons/php.png';
import javalogo from '../../assets/images/icons/java-logo.png';
import retailservice from '../../assets/images/icons/retail-service1.png';
import pwa from '../../assets/images/icons/pwa.png';

const WebAppDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-h pt60 pb60 web-app-development-banner web-app-dev">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6 align-item-center">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    We build a unique <span className="ree-text rt45">web</span> App
                                    Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    Creating your very own web application has never been easier than
                                    this, with the help of Targeticon’s expert application developers
                                    you can finally create your dream web application.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mb40"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30" data-aos="fade-in">
                                <img
                                    src={webgif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start Web Application Development*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="ct-sol-img mb15 mt20">
                                <img
                                    src={webappgif}
                                    alt="hybird-app"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading mb15 mt20">
                                <h2 className="mb15">Web Application Development</h2>
                                <p>
                                    The process and practice of developing web applications is known
                                    as web application development. Target Icon technology consulting
                                    services help you in developing your own website or application.
                                    We give you the perfect advice for each and everything related to
                                    the work.
                                </p>
                                <p>
                                    {" "}
                                    A person who develops a web application is knows as a web
                                    developer. We have with us a team of professional web developers
                                    who give you and expert advice and help you throughout the working
                                    of the project.
                                </p>
                                <p>
                                    {" "}
                                    Target Icon makes use of the best and popular platforms for
                                    building up the projects. Choosing the right platform for building
                                    up the project is one of the most difficult and important task to
                                    do. The platform should be chosen according to the type of the
                                    application. A different platform is chosen for small scale and
                                    large scale projects depending upon the funds and support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Web Application Development*/}
            {/*start services Major Platforms*/}
            <section className="r-bg-i pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-9">
                            <div className="sec-heading text-center">
                                <h3 className="mb15" style={{ color: "#0067b0" }}>
                                    Major Platforms We Work On
                                </h3>
                                <p>
                                    {" "}
                                    If you are searching for the perfect platform to build up your own
                                    website or application, then do give Targeticon a chance to aid
                                    you with our services.We'll work as hard as you, for making your
                                    experience with us the most delightful one.
                                </p>
                                <p></p>
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
                                            src={dotnet}
                                            className="img-fluid mb20"
                                            alt="dot-net"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/dot-net-development">ASP.Net development</NavLink>
                                    </h3>
                                    <p>
                                        ASP.Net has a large number of advantages in real world
                                        applications. Therefore, it is used as a platform for developing
                                        web applications by target Icon.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/dot-net-development" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />{" "}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={php}
                                            className="img-fluid mb20"
                                            alt="php"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/php-development">PHP development</NavLink>
                                    </h3>
                                    <p>
                                        Being the best PHP development company in India, target Icon
                                        uses PHP platform for building dynamic, database-driven and high
                                        performance enterprise web applications.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/php-development" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={javalogo}
                                            className="img-fluid mb20"
                                            alt="java-logo"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/java-development">JAVA development</NavLink>
                                    </h3>
                                    <p>
                                        JAVA is the most popular platform used in today’s world. the
                                        major reason behind this is that java is platform independent
                                        and thus any project built on any other language or platform can
                                        be easily run on JAVA.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/java-development" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={retailservice}
                                            className="img-fluid mb20"
                                            alt="Ecommerce-development"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/ecommerce-development">Ecommerce development</NavLink>
                                    </h3>
                                    <p>
                                        Target Icon also provides you guidance for setting up your own
                                        ecommerce store and selling your products throughout the world.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/ecommerce-development"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={pwa}
                                            className="img-fluid mb20"
                                            alt="pwa"
                                            width={50}
                                            height={50}
                                        />
                                    </picture>
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/progressive-web-app">Progressive web app (PWA)</NavLink>
                                    </h3>
                                    <p>
                                        These are the applications that work like regular websites but
                                        offer some additional functionalities like working offline, push
                                        notifications etc.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/progressive-web-app" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta-block-wide mt100">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3>
                                        Hire World-Class{" "}
                                        <span className="ree-text rt40">Developers</span>
                                    </h3>
                                    <NavLink to="/contact-us" className="ree-btn  ree-btn-grdt1 mw-80">
                                        Hire Now <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Major Platforms services end*/}
            {/*start client-testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client-testimonial  */}
            {/*start our-tools  */}
            {/*?php include 'include/our-tools.php';?*/}
            {/*end our-tools  */}
            {/*start footer  */}
            {/*?php include 'include/footer.php';?*/}
            {/*end footer  */}
        </div>
    );
};
export default WebAppDevelopment;
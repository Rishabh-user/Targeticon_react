import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import reactgif from '../../assets/images/GIF/React-development.gif';
import overview from '../../assets/images/overview.png';
import reactcycle from '../../assets/images/cycle-of-React-JS.png';
import defining from '../../assets/images/icons/defining.png';
import activate from '../../assets/images/icons/activate.png';
import update from '../../assets/images/icons/updated.png';
import deactivate from '../../assets/images/icons/deactivated.png';

const ReactJs = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">React Js</span> Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Full-cycle React Js Development. development our best with
                                    technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    A robust JavaScript-based platform, widely accepted for developing
                                    hybrid and feature-packed applications. It is a well-tested way to
                                    bring a modern touch to the web applications.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    Mean stack development is an amazing combination of MongoDB,
                                    Express, AngularJS, and NodeJS.
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
                                    src={reactgif}
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
            {/*start Overview*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="hovr-scale-main">
                                <div className="portfolio-flimg text-center">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={overview}
                                            className="img-fluid"
                                            alt="overview"
                                            width={590}
                                            height={492}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <h2 className="mb15">Overview</h2>
                                <p className="port-tags">
                                    React JS is used to create user interfaces, it is a complete
                                    JavaScript library.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    The user interface is the interaction of the user with the
                                    application by doing actions like clicking, hovering or pressing
                                    any key and also includes other events on the UI components. We
                                    create fantastic user-friendly UI components for our clients.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    The UI components are born inside the browser, and they die as the
                                    user closes the application. The user only controls the user
                                    interface. With the help of React JS, we create multiple
                                    playgrounds by using the libraries.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Overview*/}
            {/*start Cloud Services*/}
            <section className="r-bg-abcc pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <h2 className="mb15">The life cycle of React JS</h2>
                                <p className="port-tags">
                                    Every programming language has its life cycle, and so is the case
                                    with the React JS.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    There are different methods in React JS which are invoked at
                                    various stages of a lifecycle of a component. We at Target Icon
                                    being an excellent developer make sure that we are using the
                                    network resources and battery most efficiently so that the user
                                    can switch easily between different applications.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    We have a great understanding of the components and its life cycle
                                    and develop to deliver the best React JS user interface to the
                                    clients.{" "}
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="portfolio-flimg text-center">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={reactcycle}
                                        className="img-fluid"
                                        alt="cycle-of-React-JS"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Cloud Services*/}
            {/*-our The Process of UX Designing*/}
            <section className="r-bg-yy pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">React Component Stages</h2>
                                <p>
                                    There are four stages while creating a React JS component which is
                                    mentioned below
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
                                                    src={defining}
                                                    className="img-fluid mb20"
                                                    alt="defining"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Defining</h4>
                                        <p>
                                            In this method, the react component will prepare it for the
                                            upcoming event by initializing the state and the defaults
                                            correctly. The initialization state can be changed if needed
                                            later and we do it by using the setState method.
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
                                                    src={activate}
                                                    className="img-fluid mb20"
                                                    alt="activate"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Activate</h4>
                                        <p>
                                            We have set the initial state and defined it correctly the
                                            next step is to put the react component in the browser and
                                            activate it. We make use of the hook method after and before
                                            the element is placed in the browser. This method will be
                                            initiated at the next phase.
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
                                                    src={update}
                                                    className="img-fluid mb20"
                                                    alt="updated"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Update</h4>
                                        <p>
                                            The adult stage will start only when the React component is
                                            being placed in the browser called as the birth state of the
                                            component. There two ways which can be used to update the
                                            component by sending new features or by updating the state of
                                            the component. The different hook methods are used to update
                                            the current state by using various ways.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30 cardadd ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={deactivate}
                                                    className="img-fluid mb20"
                                                    alt="deactivated"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Deactivate</h4>
                                        <p>
                                            We can also delete the component from the browser DOM. This is
                                            the last method in its life cycle. We execute the method just
                                            before the component is being removed from the browser DMO. In
                                            this method, the cleaning up will take place related to the
                                            components.
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
export default ReactJs;
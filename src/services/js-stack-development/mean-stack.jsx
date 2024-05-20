import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import means from '../../assets/images/mean-s.png';
import meanoverview from '../../assets/images/mean-overview.png';
import mongodb from '../../assets/images/icons/mongodb-icon.png';
import expressicon from '../../assets/images/icons/express-icon.png';
import angularicon from '../../assets/images/icons/angular-icon.png';
import nodejs from '../../assets/images/icons/node-js-icon.png';
import MeanStact1 from '../../assets/images/mean-stack-1.png';

const MeanStact = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-k pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Mean Stack</span> Development
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Full-cycle Mean Stack Development. development our best with
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
                                    Express, AngularJS, and NodeJS.{" "}
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
                            <div
                                className="sol-img m-mt30"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <img
                                    src={means}
                                    alt="Targeticon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start Overview*/}
            <section className="r-bg-xx pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="hovr-scale-main">
                                <div className="text-center">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={meanoverview}
                                            className="img-fluid"
                                            alt="mean-overview"
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
                            data-aos-delay={100}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <h2 className="mb15">Overview</h2>
                                <p className="port-tags">
                                    Mean stack is the collection of technologies related to JavaScript
                                    which are used for the development of web applications.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Mean stack includes technologies like MongoDB, Express JS, Angular
                                    JS, and Node.js. Mean stack is completely based on full stack
                                    JavaScript. Targeticon develops different websites for our client
                                    as web development is a huge concept and we work on all diverse
                                    platforms and in a challenging environment.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    It’s challenging to navigate from one frame to another framework
                                    as there are a variety of frameworks available. It is also
                                    challenging to switch between technologies, but at Targeticon we
                                    choose the best technology and framework that perfectly suits our
                                    client.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Overview*/}
            {/*-our The Process of UX Designing*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Mean Acronym</h2>
                                <p>
                                    Mean is a combination of different languages used for the web
                                    development process. Mean stands for MongoDB, Express, Angular and
                                    Node.js. Let us first look at these languages
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
                                                    src={mongodb}
                                                    className="img-fluid mb20"
                                                    alt="mongodb-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>MongoDB</h4>
                                        <p>
                                            MongoDB is a document-oriented data model, and it is an open
                                            source language. In a relational database, the data are stored
                                            into rows and columns, but this is not the architecture used
                                            by MongoDB. MongoDB primarily consists of a collection of data
                                            and documentation. Due to its architecture, the database is
                                            extensive and can be used to store huge amount of information.
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
                                                    src={expressicon}
                                                    className="img-fluid mb20"
                                                    alt="express-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Express</h4>
                                        <p>
                                            A javascript framework with a lightweight server-side
                                            scripting language. We use to express in combination with
                                            node.js. We make use of it to make the web development process
                                            simple. It makes more accessible for the developers to write
                                            easier code with modules and to process applications faster.
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
                                                    src={angularicon}
                                                    className="img-fluid mb20"
                                                    alt="angular-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Angularjs</h4>
                                        <p>
                                            Angularjs is used to develop frontend web applications. They
                                            are frontend javascript framework. They are prepared and
                                            maintained by Google Corporation. We make use of angularjs
                                            that allows our developer to create web pages rapidly. We
                                            develop both dynamic web pages and single web applications by
                                            using the angularjs framework. The modular structure helps to
                                            simplify the development process and allows us to test it.
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
                                                    src={nodejs}
                                                    className="img-fluid mb20"
                                                    alt="node-js-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Node.js</h4>
                                        <p>
                                            Node.js is javascript scripting language based on runtime. The
                                            node.js is built on chrome V8 Engine. Node.js has rich open
                                            source library files and other components like the npm Node.js
                                            package manager. We compile the JavaScript source to machine
                                            code before the execution to develop scalable and better web
                                            applications.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-The Process of UX Designing end*/}
            {/*start Conclusion*/}
            <section className="r-bg-xxyy pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">
                                    Why should you develop projects using Mean J's?
                                </h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    With the help of mean, we develop the best web-based applications
                                    of all types of dynamic to the single web-based application. We
                                    develop a web application for the complex organization and also
                                    develop social media applications. Why we use mean stack to
                                    develop apps? Because we can use it to create different types of
                                    apps with ease like the business app, web apps, streaming
                                    multimedia apps and also to develop real-time applications.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    Target icon combines the four powerful technologies to develop the
                                    best web applications from the client to the server. We can also
                                    develop an app that can help in organizing multiple applications.
                                    As mean stack has the most powerful testing tools suites and we
                                    make use of these tools to test the applications and make them
                                    full-proof. So, if you’re looking for Mean Stack development
                                    providers, you can contact us, and we will make sure to satisfy
                                    your needs with our top-notch services.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="text-center">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={MeanStact1}
                                        className="img-fluid"
                                        alt="mean-stack-1"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
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
export default MeanStact;

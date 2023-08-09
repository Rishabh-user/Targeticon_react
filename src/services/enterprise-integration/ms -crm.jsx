import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import crm from '../../assets/images/CRM.png';
import overview from '../../assets/images/overview.png';
import enterpriseintergration from '../../assets/images/Enterprise-Integration.png';
import enterpriseintergration2 from '../../assets/images/Enterprise-Integration2.png';
import sharepoint from '../../assets/images/sharepoint.png';
import girlbro from '../../assets/images/girl-bro.png';

const MsCrm = () => {
    return (
        <div>
            <section className="page-heading-sec r-bg-g pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={200}>
                                    <span className="ree-text rt45 mr10">MS CRM</span>
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    A robust JavaScript-based platform, widely accepted for developing
                                    hybrid and feature-packed applications.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    It is a well-tested way to bring a modern touch to the web
                                    applications. Mean stack development is an amazing combination of
                                    MongoDB, Express, AngularJS, and NodeJS.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={450}
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
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={crm}
                                        className="img-fluid"
                                        alt="CRM"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*start overview*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
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
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    In this era of much faster connectivity and networking,
                                    client-customer interaction is a feasible way to remain connected.
                                    Are you concerned about how you can interact with customers to
                                    know about your products? Enterprise integration offers a wide
                                    range of services to promote better connectivity between client
                                    and customers and to know better about the product too.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    {" "}
                                    Online connectivity ensures instant update and spread of word
                                    which in turn strengthens the client-customer interaction. It is a
                                    modern-day kind of indirect advertisement helping boost sales and
                                    growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*java detail items*/}
            <div className=" pt60 pb60">
                <div className="container">
                    <div className="portfolio-items mt60">
                        {/* portfolio row 1 */}
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
                                                src={enterpriseintergration}
                                                className="img-fluid"
                                                alt="Enterprise-Integration"
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
                                    <h3 className="under-service-heading">
                                        What is the need for connecting with customers?
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Connectivity is the key criteria to know more about the
                                        customers and product reviews they release. Customers and sales
                                        growth are the reflections of the diligence put into R&amp;D and
                                        product specifications.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        Being constantly connected to customers gives every update about
                                        the product and its occupied market share. It is the prime
                                        indicator of how the product is doing and if it can sustain
                                        amidst its competitors. Communication and interaction aspects at
                                        target Icon are assorted to help you out with your issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        How can Target Icon help you with your customer relationships?
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        Understanding customers is another way of releasing quality
                                        products. When one tends to identify the customer needs and the
                                        category of customers to be targeted
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        it becomes easier to design the requirements and specifications.
                                    </p>
                                </div>
                            </div>
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
                                                src={enterpriseintergration2}
                                                className="img-fluid"
                                                alt="Enterprise-Integration2"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 3 */}
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
                                                src={crm}
                                                className="img-fluid"
                                                alt="CRM"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        What we need to focus on?
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        The companies need to focus on the sales and marketing
                                        strategies, the product specifications, and the target
                                        customers. At Target icon, we focus on communication, System
                                        integration, and connection, use of electronic media to
                                        interchange on exchange data and well-managed computing
                                        environments.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        As an example, the data continues to increase, and demand number
                                        of cloud applications be utilized. The customers requesting
                                        information in real time requires the exchange of information
                                        regularly regardless of day and night.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">What do we do?</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        MS-CRM is an exclusive application developed by Microsoft;
                                        Target icon uses it to enable efficient server-client build up.
                                        It focuses on building customer relationships so that
                                        organizations fully understand throughout the interaction. The
                                        customer relationship management package is easy to interact
                                        with a customer and allows easy tracking of information
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        purchases which is quite an advantage. Our experts have worked
                                        for all sectors are well-versed with the plan and strategy to
                                        implement. It shouldn’t as a surprise when Target Icon lets you
                                        devise your plan with add-ons from us. Your plans and
                                        suggestions would be duly considered and acted upon.
                                    </p>
                                </div>
                            </div>
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
                                                src={sharepoint}
                                                className="img-fluid"
                                                alt="sharepoint"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*java detail end*/}
            {/*start Conclusion*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={girlbro}
                                        className="img-fluid"
                                        alt="girl-bro"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    The pace with which Technology has advanced to another level,
                                    online Internet connectivity is a must. Carefully analyzing the
                                    market trends and defining objectives would help in the longer
                                    run. At Target Icon, our focus is primarily on the needs of our
                                    client by delivering high-quality services with commitment.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    Our broader experience lets us understand the underlying
                                    specifications and act upon it. Our consulting services are more
                                    about customer satisfaction anything else. We strive to give the
                                    best, and the end-client results speak for us. Our commitment to
                                    resolving the client system inefficiencies is the most critical
                                    giveaway we have.
                                </p>
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
export default MsCrm;
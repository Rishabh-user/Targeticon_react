import React from "react";
import { NavLink } from "react-router-dom";
import ecommarsbanner from '../../assets/images/GIF/ecommars-banner.gif'
import ecom1gif from '../../assets/images/GIF/ecom1.gif';
import ecom2gif from '../../assets/images/GIF/ecom2.gif';
import ecom3gif from '../../assets/images/GIF/ecom3.gif';
import infrastructure from '../../assets/images/infrastructure.png';
import girlbro from '../../assets/images/girl-bro.png';
import responsivegif from '../../assets/images/GIF/responsive2.gif';



const EcommerceDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45 mr10">Ecommerce </span> Website
                                    Development{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Full-cycle ASP.NET development services employing industry's best
                                    practices for custom framework development for robust and scalable
                                    applications using the full spectrum of Microsoft technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    Through our honed engagement process we are able to add value and
                                    enrich your ecommerce propositions at every step of the project
                                    life cycle for both new ecommerce ventures and re-platforming
                                    projects.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={80}>
                                    Targeticon is a seaward programming advancement organization
                                    making N-level applications with inside and out usage of MVC
                                    (Model View Controller) offering J2EE improvement set apart by the
                                    diminished many-sided quality and a steady venture platform.{" "}
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
                                    src={ecommarsbanner}
                                    alt="Targeticon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*Ecommerce Development Info*/}
            <div className="r-bg-xxxx pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Ecommerce Development Info</h2>
                                <p
                                    className="port-tags h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                    style={{ color: "#585858" }}
                                >
                                    We have completed thousands of projects, some of them showing
                                    important projects here.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-items mt60">
                        <div className="row vcenter">
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="mb15 mt15">
                                    <img
                                        src={ecom1gif}
                                        alt="portfolio"
                                        className="img-fluid"
                                        width="600px"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="portfolio-detls pdr-dtls mb15 mt15">
                                    <h3 className="under-service-heading">
                                        Helping you achieve the highest ROI
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        We are committed to helping merchants drive revenue through our
                                        innovative ecommerce platform and expert ecommerce services,
                                        helping you to achieve the maximum return on your investment.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        {" "}
                                        With the current trends of the technological era, the companies
                                        that are usually working online needs to understand the concept
                                        of digital marketing and JAVA development in a detailed manner.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="mb15 mt15">
                                    <img
                                        src={ecom2gif}
                                        alt="portfolio"
                                        className="img-fluid"
                                        width="600px"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="portfolio-detls pdr-dtls mb15 mt15">
                                    <h3 className="under-service-heading">Long term Services</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        We thrive on the on-going success of our customers and to this
                                        end we are passionate about developing meaningful, long-term
                                        relationships with our customers. We are here to support our
                                        clients as their business needs and markets grow and develop.
                                        With such service, company will be able to acknowledge regarding
                                        the probable customers.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        Targeticon has been consistent with the competent services and
                                        quick response time that makes them as one of the leading
                                        service providers if you’re looking for one of the best web app
                                        development service provider.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row vcenter">
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="mb15 mt15">
                                    <img
                                        src={ecom3gif}
                                        alt="portfolio"
                                        className="img-fluid"
                                        width="600px"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="mb15 mt15">
                                    <h3 className="under-service-heading">
                                        Complementary Ecommerce Services
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        As one of the leading full service ecommerce agencies we offer a
                                        full suite of ecommerce services from the initial consulting
                                        stage through design, development, and integration to ongoing
                                        services including hosting, support, training and commerce
                                        optimization.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        {" "}
                                        The high skilled developer carries out the task in the most
                                        effective manner and makes sure that the company will attain the
                                        utmost benefit for choosing services from Targeticon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Ecommerce Development Info end*/}
            {/*start Advantages of using our Services*/}
            <section className="r-bg-cewr pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-9">
                            <div className="page-headings text-center">
                                <h2 className="mb15" style={{ color: "#0067b0" }}>
                                    Advantages of using our Services
                                </h2>
                                <p className="mb40 h-light" data-aos="fade-up" data-aos-delay={40}>
                                    Some of the significant benefits of choosing the JAVA development
                                    services provided by Targeticon are listed below:-
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row vcenter flex-row-reverse">
                        <div
                            className="col-lg-6 m-order1"
                            data-aos="fade-up"
                            data-aos-delay={60}
                        >
                            <div className="text-center">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={infrastructure}
                                        className="img-fluid mb20"
                                        alt="Advantages"
                                        width={640}
                                        height={420}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 m-order2"
                            data-aos="fade-up"
                            data-aos-delay={60}
                        >
                            <div className="portfolio-detls pdr-dtls">
                                <ul className="ul-list-icon mt30">
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={20}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Microsoft Enterprise
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={40}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Automatic memory management
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={60}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Security, Exception specifications
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Independent Library Platform
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Network centrist design
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={120}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Security, Exception specifications
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={140}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Multi-platform support language
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={160}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Support for web-services
                                    </li>
                                    <li
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={180}
                                    >
                                        <i className="fas fa-arrow-right" />
                                        Development of dynamic web applications
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Advantages of using our Services*/}
            {/*start conclusion*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={girlbro}
                                        className="img-fluid mb20"
                                        alt="conclusion"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p
                                    className="mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={40}
                                    style={{ color: "#0067b0" }}
                                >
                                    Ecommerce requirements analysis and specification{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    With commerce evolving at a rapid pace and the next game changer
                                    always just around the corner, our expert industry, insight and
                                    experience can prove invaluable in improving the performance of
                                    your online business.
                                </p>
                                <ul className="ul-list-icon mt30">
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Ensure you get the most out of your ecommerce site and
                                        connecting commercial channels.
                                    </li>
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Guarantee a smooth implementation by understanding all
                                        variables, business processes and areas of risk when defining
                                        your project.
                                    </li>
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Deliver the same experience across all devices with a responsive
                                        design optimised for multiple breakpoints.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end conclusion*/}
            {/*start Responsive Web Design*/}
            <section className="r-bg-xc pt60 pb60">
                <div className="container">
                    <div className="row vcenter flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="ct-sol-img">
                                <img
                                    src={responsivegif}
                                    alt="hybird-app"
                                    className="img-fluid"
                                    width="600px"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-heading">
                                <h2 className="mb15">Responsive Web Design</h2>
                                <p
                                    className="mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={40}
                                    style={{ color: "#0067b0" }}
                                >
                                    Delivering optimum viewing &amp; interaction experiences for ALL
                                    your users
                                </p>
                                <ul className="ul-list-icon mt30">
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        As the proliferation of device types through which people access
                                        ecommerce sites grows, we ensure your sites are optimised to
                                        deliver the best experience across them all.All sites delivered
                                        using a responsive design based on our customised Bootstrap
                                        front-end framework.
                                    </li>
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Front-end designs tailored to suit your specific brand
                                        guidelines or corporate requirements.
                                    </li>
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Creating optimal experiences for mobile, phablet, tablet,
                                        laptop, and desktop and television users across a number of
                                        different breakpoints.
                                    </li>
                                    <li className="mt20 h-light">
                                        <i className="fas fa-arrow-right" />
                                        Two-way interactive design process through wire-framing,
                                        lo-fidelity and hi-fidelity designs, style guide and roll-out.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Responsive Web Design*/}
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
export default EcommerceDevelopment;
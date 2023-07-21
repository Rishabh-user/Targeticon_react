import React from "react";
import { NavLink } from "react-router-dom";
import uxui from '../../assets/images/UI-UX.png';
import websiteservice from '../../assets/images/GIF/our_services_website.gif';
import uiuxgif from '../../assets/images/GIF/ui-ux-design.gif';
import girlbro from '../../assets/images/girl-bro.png';

const UiDesign = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-cd pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45 mr10">UI / UX</span> Design{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Full-cycle ASP.NET development services employing industry's best
                                    practices for custom framework development for robust and scalable
                                    applications using the full spectrum of Microsoft technologies.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={80}>
                                    Making your website feel better makes more difference than a
                                    person can imagine. And with Targeticon’s dedicated team members
                                    you can be assured to get the most mind-blowing User interface and
                                    user experience.
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={250}
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
                                data-aos-delay={100}
                            >
                                <img
                                    src={uxui}
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
            {/*Separating UI UX*/}
            <div className="pt60 pb60 r-bg-abc">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Separating UI UX</h2>
                                <p
                                    className="port-tags mt20 h-light"
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
                        {/* portfolio row 1 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="hovr-scale-main">
                                    <div className="text-center mb20">
                                        <img
                                            src={websiteservice}
                                            alt="portfolio"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={70}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">UI Design</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        UI stands for user interface design whereas UX refers to user
                                        experience design. Both of them are important for an IT product
                                        and are required to work closely together. Despite working
                                        together for a product, their roles are completely different
                                        involving distinct processes.{" "}
                                    </p>
                                    <ul className="ul-list-icon mt20">
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            Attractive
                                        </li>
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            Simple
                                        </li>
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            Easy to use
                                        </li>
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            All the options must be clearly visible
                                        </li>
                                    </ul>
                                    <p className="mt20 h-light">
                                        {" "}
                                        The importance of UI is there because nobody will like to use a
                                        website or an application which is complex enough to browse
                                        through. Creating an attractive UI is a challenge.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter flex-row-reverse">
                            <div className="col-lg-5 m-order1">
                                <div className="hovr-scale-main">
                                    <div className="text-center mb20">
                                        <img
                                            src={uiuxgif}
                                            alt="portfolio"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={50}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">UX Design</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={60}
                                    >
                                        UX deals with customer or user experience in a way to find out
                                        who the target customers are, and how to make their experience
                                        with the product a good one. The major goals are:{" "}
                                    </p>
                                    <ul className="ul-list-icon mt20">
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            Functionality
                                        </li>
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            Usability
                                        </li>
                                        <li className="mt20 h-light">
                                            <i className="fas fa-arrow-right" />
                                            User adaptability
                                        </li>
                                    </ul>
                                    <p className="mt20 h-light">
                                        Target icon consulting services provide you with enormous ideas
                                        of UI &amp; UX for your website and mobile app. We have our team
                                        of professionals who create amazing outputs for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Separating UI UX end*/}
            {/*start Overview*/}
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
                                <h2 className="mb15 mt30">Overview</h2>
                                <p
                                    className="mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                    style={{ color: "#0067b0" }}
                                >
                                    UI/UX Design requirements analysis and specification{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Designing is a very broad stream of subjects and it is not limited
                                    to only graphic design. To be recognized as a designer, one must
                                    be clear about what they actually do day to day. There are many
                                    responsibilities that hold the design upright together.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    Design belongs to many domains such as graphic design, textile
                                    design, interior design, fashion design, ceramic design, print
                                    design and much more. But the designing related to technology
                                    means creating interfaces for screens and maintain them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end Overview*/}
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
export default UiDesign;
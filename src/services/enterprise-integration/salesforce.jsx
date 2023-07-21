import React from "react";
import { NavLink } from "react-router-dom";
import saleforce from '../../assets/images/salesforce.png';
import sharepoint from '../../assets/images/sharepoint.png';
import whyus from '../../assets/images/why-us.png'

const SalesForce = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-g pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={200}>
                                    <span className="ree-text rt45 mr10">Salesforce</span>
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    A robust JavaScript-based platform, widely accepted for developing
                                    hybrid and feature-packed applications.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    {" "}
                                    It is a well-tested way to bring a modern touch to the web
                                    applications. Mean stack development is an amazing combination of
                                    MongoDB, Express, AngularJS, and NodeJS.
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
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={saleforce}
                                        className="img-fluid"
                                        alt="salesforce"
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
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
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
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p>
                                    The world has converged around the fingertips when it comes to
                                    knowing about some product or services. A single click opens a
                                    myriad of options about anything and everything. Access to the
                                    internet should be thoroughly utilized to establish connectivity
                                    with customers. This sole aspect of access to the internet has
                                    answers to all the issues arising out of inefficient connectivity
                                    with customers. Salesforce is a California based company that
                                    provides an interface for companies for task management or case
                                    management. They also offer systems for escalation and
                                    auto-routing of events.
                                </p>
                                <p>
                                    So, are you looking for a hassle-free process for management? The
                                    Enterprise integration is a concept which amplifies the
                                    client-customer interaction and provides a medium for tracking the
                                    product growth and sales online along with recorded customer
                                    responses. The 21st century has a lot of internet-assisted
                                    technologies in store to make lives more comfortable. Salesforce
                                    is one of the most sought-after consulting services provided by
                                    Target Icon to merely connect with your customers across the
                                    planet. It is user-friendly and has no additional add-ons to
                                    complicate the process of connecting with customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*start What has Target Icon got to provide?*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">What has Target Icon got to provide?</h2>
                                <p>
                                    Our years of experience has made it possible to gather what all it
                                    takes to build an effective plan to manage customer relationships
                                    better than before and with Salesforce you can get top-notch
                                    management integration. It isn’t any complicated process to go
                                    into. Clients require a simple log in to connect to the customers,
                                    and there you go!{" "}
                                </p>
                                <p>
                                    {" "}
                                    The effortless process isn’t much time consuming on the client-end
                                    and can be started sooner. It allows managers to have an actual
                                    and real-time line of sight about actual happenings in the market
                                    and their product. Reports and data are accessible to be viewed
                                    and managed anytime. One of the unique advantages it offers is
                                    accessibility around the globe. You need to log in, and you can go
                                    through the data! Access to all devices such as Mobile phones
                                    makes it easier to monitor and report in real time.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={whyus}
                                        className="img-fluid"
                                        alt="why-us"
                                        width={590}
                                        height={492}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end What has Target Icon got to provide?*/}
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
export default SalesForce;
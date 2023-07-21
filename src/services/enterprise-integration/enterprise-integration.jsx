import React from "react";
import { NavLink } from "react-router-dom";
import enterpriseIntegration from '../../assets/images/Enterprise-Integration.png';
import crm from '../../assets/images/CRM.png';
import enterpriseIntegration2 from '../../assets/images/Enterprise-Integration2.png';
import salesforce from '../../assets/images/icons/salesforce-icon.png';
import crmicon from '../../assets/images/icons/crm-icon.png';
import sharepoint from '../../assets/images/icons/sharepoint-icon.png';


const EnterpriseIntegration = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Enterprise </span>{" "}
                                    Integration{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    Enterprise integration is significant if you want to maintain a
                                    substancial workflow.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    Targeticon provides multiple Integration solutions which can be
                                    very useful.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    The platform should be chosen according to the type of the
                                    application. A different platform is chosen for small scale and
                                    large scale projects depending upon the funds and support.{" "}
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
                                        src={enterpriseIntegration}
                                        className="img-fluid"
                                        alt="Enterprise-Integration"
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
            {/*Enterprise Integration*/}
            <div className="pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Enterprise Integration</h2>
                                <p
                                    className="port-tags mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                    style={{ color: "#585858" }}
                                >
                                    We have completed thousands of projects, some of them showing
                                    important info here.
                                </p>
                            </div>
                        </div>
                    </div>
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
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">Enterprise Integration</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Target icon provides you with a large set of services including
                                        enterprise integration services.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        It is a technical field of enterprise architecture which mainly
                                        focuses on the study of topics such as system interconnection,
                                        electronic data interchange, product data exchange and
                                        distributed computing environments.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        Target icon is a well established technology consulting company
                                        which provides you information related to enterprise
                                        integration.{" "}
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
                                    <h3 className="under-service-heading">Enterprise Integration</h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        {" "}
                                        If you are someone who wants to establish their business using
                                        enterprise integration, then we are here for you. We provide you
                                        with the best consultancy service in the field of enterprise
                                        integration.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        {" "}
                                        Our professionals are filled with high ranged skill set to
                                        provide you with the right advice that will surely do wonders
                                        for you.Under this service, we provide you with the concepts of
                                        enterprise engineering to give you the right information at the
                                        right place and at the right time.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        It also helps to enable communication between people, machines
                                        and computers and their efficient co-operation and
                                        co-ordination.
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
                                                src={enterpriseIntegration2}
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
                    </div>
                </div>
            </div>
            {/*Enterprise Integration end*/}
            {/*-our The Process of UX Designing*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">
                                    The various services under enterprise integration are:
                                </h2>
                                <p>
                                    Customer relationship management is the source by which you can
                                    easily connect to thousands of your customers. Target icon
                                    provides you with the above tools to establish CRM for your
                                    organization and expand your business which in turn leads to
                                    increasing profits.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="/salesforce">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={salesforce}
                                                    className="img-fluid mb20"
                                                    alt="salesforce-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Salesforce</h4>
                                        <p>
                                            It is the world’s number 1 customer relationship management
                                            (CRM) platform. It has certain cloud based applications for
                                            sales, service, marketing, and many more. There is no
                                            requirement of IT experts to set up or manage in Salesforce.
                                            You can start connecting to customers by simply logging in.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="/ms-crm">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={crmicon}
                                                    className="img-fluid mb20"
                                                    alt="crm-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>MS CRM</h4>
                                        <p>
                                            MS CRM is a customer relationship management software package
                                            developer by Microsoft. It is named as Microsoft Dynamics CRM.
                                            The product mainly focuses on sales, marketing and service
                                            etc.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mt30">
                            <NavLink to="/sharepoint">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">03</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={sharepoint}
                                                    className="img-fluid mb20"
                                                    alt="sharepoint-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Sharepoint</h4>
                                        <p>
                                            Sharepoint is a web based collaborative platform which is
                                            integrated with Microsoft Office. It was launched in 2001.
                                            Primarily, Sharepoint is sold as a document management and
                                            storage system, but the product is highly configurable and its
                                            usage varies between organizations.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-The Process of UX Designing end*/}
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
export default EnterpriseIntegration; 
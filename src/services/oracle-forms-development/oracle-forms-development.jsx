import React from "react";
import { NavLink } from "react-router-dom";
import oracleforms from '../../assets/images/oracle-forms.png';
import oracleform from '../../assets/images/oracle-form.png';
import oracleform2 from '../../assets/images/oracle-form2.png';
import oracleform3 from '../../assets/images/oracle-form3.png';
import fulltimehiring from '../../assets/images/icons/fulltime-hiring.png';
import hourlyhiring from '../../assets/images/icons/hourly-hiring.png';



const OracleFormsDevelopment = () => {
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
                                <h1 data-aos="fade-up" data-aos-delay={200}>
                                    <span className="ree-text rt45 mr10">Oracle Forms</span>{" "}
                                    Development{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    Targeticon provides easy to use and integrate Oracle forms which
                                    can be used to create your online form.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                    It not only saves data, but it can also be used for generating
                                    reports.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={500}>
                                    The platform should be chosen according to the type of the
                                    application. A different platform is chosen for small scale and
                                    large scale projects depending upon the funds and support.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={600}
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
                                        src={oracleforms}
                                        className="img-fluid"
                                        alt="oracle-forms"
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
            {/*java detail items*/}
            <div className="pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Oracle Forms Development</h2>
                                <p
                                    className="port-tags mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                    style={{ color: "#0067b0" }}
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
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main text-center">
                                    <div className="portfolio-flimg">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                src={oracleform}
                                                className="img-fluid"
                                                alt="oracle-form"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Oracle Forms Development
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Oracle from is a software product which is used for creating
                                        screens that interact with an oracle database.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        It includes and IDE with an object navigator, property sheet and
                                        code editor that uses PL/SQL.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        Earlier, it could only run on server side but later on was
                                        ported to other platforms including windows.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Oracle Forms Development
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Target Icon makes use of the best and popular platforms for
                                        building up the projects.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        Choosing the right platform for building up the project is one
                                        of the most difficult and important task to do.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        The platform should be chosen according to the type of the
                                        application. A different platform is chosen for small scale and
                                        large scale projects depending upon the funds and support.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                src={oracleform2}
                                                className="img-fluid"
                                                alt="oracle-form2"
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
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg">
                                        <picture>
                                            <img
                                                loading="lazy"
                                                src={oracleform3}
                                                className="img-fluid"
                                                alt="oracle-form3"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Oracle Forms Development
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Target Icon Technology Consultancy Services makes it easier for
                                        you to create your own online forms. By working with us, you can
                                        yourself learn to create and develop these oracle forms.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        Whether you are an individual or an organization, you can
                                        develop oracle forms for your company on your own by making use
                                        of the tools provided by target icon.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        These tools are so easy to use that even a beginner can start
                                        working on it effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*java detail end*/}
            {/*-our The Process of UX Designing*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">
                                    The following services are provided under oracle forms
                                    development:
                                </h2>
                                <p>
                                    Overall, oracle forms is the best way to save your data. Also, it
                                    is the mostefficient way to keep the security of your data. Give
                                    target icon a chance to aid you with their amazing services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30">
                            <NavLink to="/d2f-forms">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={fulltimehiring}
                                                    className="img-fluid mb20"
                                                    alt="fulltime-hiring"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>D2K forms</h4>
                                        <p>
                                            D2K refers to Developer 2000. It is a GUI (graphical user
                                            interface) based oracle front end tool. The first generation
                                            of the front end development tools was released by oracle,
                                            which was known as RDBMS.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt30">
                            <NavLink to="/d2f-reports">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={hourlyhiring}
                                                    className="img-fluid mb20"
                                                    alt="hourly-hiring"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>D2k reports</h4>
                                        <p>
                                            A D2k report is used to display the data in the report format.
                                            There is no need to register. We can simply create the reports
                                            and save it on the server side of the concerned module
                                            directory.
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
export default OracleFormsDevelopment;
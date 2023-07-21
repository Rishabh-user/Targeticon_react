import React from "react";
import { NavLink } from "react-router-dom";
import javagif from '../../assets/images/GIF/java.gif';
import javainfo3 from '../../assets/images/java-info3.png';
import javainfo1 from '../../assets/images/java-info1.png';
import javainfo2 from '../../assets/images/java-info2.png';
import overview from '../../assets/images/overview.png';
import girlbro from '../../assets/images/girl-bro.png';

const JavaDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-cfd pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45 mr10">Java</span> Development{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Java advancement is a broadly useful PC programming dialect that
                                    is simultaneous, class-based, protest arranged and mainly intended
                                    to have a few usage conditions as could reasonably be expected.{" "}
                                </p>
                                <p className="mt10 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    Targeticon is a seaward programming advancement organization
                                    making N-level applications with inside and out usage of MVC
                                    (Model View Controller) offering J2EE improvement set apart by the
                                    diminished many-sided quality and a steady venture platform.{" "}
                                </p>
                                <p className="mt10 h-light" data-aos="fade-up" data-aos-delay={80}>
                                    Targeticon is a seaward programming advancement organization
                                    making N-level applications with inside and out usage of MVC
                                    (Model View Controller) offering J2EE improvement set apart by the
                                    diminished many-sided quality and a steady venture platform.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt30"
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
                                    src={javagif}
                                    alt="Targeticon"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*page head end*/}
            {/*java detail items*/}
            <div className="r-bg-abcc pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Java Technology Info</h2>
                                <p className="port-tags mt20 h-light">
                                    We have completed thousands of projects, some of them showing
                                    important projects here.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-items mt60">
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={50}
                            >
                                <div className="boxs-img text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={javainfo3}
                                            className="img-fluid"
                                            alt="java-info3"
                                            width={686}
                                            height={458}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        1. Java Programing Information
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        At Target icon, we have the abilities to offer JAVA advancement
                                        administrations utilizing Java, J2EE or J2ME innovation. We
                                        provide our clients with a one-stop solution for every one of
                                        your necessities by using the intensity of Java/J2EE in creating
                                        future Java Web 2.0 applications and services. We, at
                                        Targeticon, have aptitude in databases incorporates Oracle, MS
                                        SQL Server, My SQL, IBM DB2, and Ms. Access.{" "}
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
                        {/* portfolio row 2 */}
                        <div className="row flex-row-reverse vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={50}
                            >
                                <div className="boxs-img text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={javainfo1}
                                            className="img-fluid"
                                            alt="java-info1"
                                            width={686}
                                            height={458}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order1 "
                                data-aos="fade-up"
                                data-aos-delay={60}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        2. Java Programing Information
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        Java advancement is a broadly useful PC programming dialect that
                                        is simultaneous, class-based, protest arranged and mainly
                                        intended to have a few usage conditions as could reasonably be
                                        expected. It is planned to give application engineers "a chance
                                        to compose once, run anyplace" (WORA) implying that gathered
                                        Java code can keep running on all stages that help Java without
                                        the requirement for recompilation Java applications are commonly
                                        aggregated to bytecode that can keep running on any Java virtual
                                        machine (JVM) paying little heed to PC design.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        {" "}
                                        This has been introduced in 2016, and Java is a standout among
                                        the most well-known programming dialects being used, especially
                                        for customer server Web applications. Targeticon has been
                                        consistent with the competent services and quick response time
                                        that makes them as one of the leading service providers if
                                        you’re looking for one of the best web app development service
                                        provider.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 3 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={20}
                            >
                                <div className="boxs-img text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={javainfo2}
                                            className="img-fluid"
                                            alt="java-info2"
                                            width={686}
                                            height={458}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={30}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        3. Java Programing Information
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={40}
                                    >
                                        Targeticon is a seaward programming advancement organization
                                        making N-level applications with inside and out usage of MVC
                                        (Model View Controller) offering J2EE improvement set apart by
                                        the diminished many-sided quality and a steady venture platform.
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={60}
                                    >
                                        {" "}
                                        We use the development focus to execute any Java advancement
                                        work with our group of profoundly experienced and proficient
                                        programming designers and architects with the full learning of
                                        J2EE applications, along these lines helping our customers reap
                                        the advantages of value Java Web Application improvement
                                        arrangements and related technologies. The high skilled
                                        developer carries out the task in the most effective manner and
                                        makes sure that the company will attain the utmost benefit for
                                        choosing services from Targeticon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*java detail end*/}
            {/*start overview*/}
            <section className="r-bg-cewr pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-9">
                            <div className="page-headings text-center">
                                <h2 className="mb15 mt0" style={{ color: "#0067b0" }}>
                                    Advantages of using our Services
                                </h2>
                                <p
                                    className="mt20 mb15 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={50}
                                >
                                    Some of the significant benefits of choosing the JAVA development
                                    services provided by Targeticon are listed below:-
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ree">
                        <div className="row vcenter">
                            <div className="col-lg-6 m-order2">
                                <div className="portfolio-detls pdr-dtls">
                                    <ul className="ul-list-icon mt30">
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Microsoft Enterprise
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Automatic memory management
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Security, Exception specifications
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Independent Library Platform
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Network centrist design
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Security, Exception specifications
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Multi-platform support language
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Support for web-services
                                        </li>
                                        <li>
                                            <i className="fas fa-arrow-right" />
                                            Development of dynamic web applications
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 m-order1">
                                <div className="portfolio-flimg">
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
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*start conclusion*/}
            <section className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={50}>
                                    So, if you’re an organization and are new to this market and more
                                    centered on computerized advertising rather than the physical
                                    showcasing techniques accessible. Targeticon is the organization
                                    that offers the JAVA development administrations at the correct
                                    value that causes another firm to get consideration of the little
                                    and medium firm hoping to get profitable customers.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    On the off chance that you are an organization or hoping to begin
                                    another firm, then it is prescribed to pick JAVA development
                                    benefit from Targeticon and make it one-stop answer for all
                                    computerized showcasing administrations.
                                </p>
                            </div>
                        </div>
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
export default JavaDevelopment;
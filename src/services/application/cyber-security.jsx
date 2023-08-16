import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import cybersecurity from '../../assets/images/cybersecurity.png';
import cybersecurity1 from '../../assets/images/cybersecurity1.png';
import cybersecurity2 from '../../assets/images/cybersecurity2.png';

const CyberSecurity = () => {
    return (
        <div>
            <section className="page-heading-sec machine-learn-banner pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={200}>
                                    <span className="ree-text rt45 mr10">Cyber</span>{" "}
                                    Security{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    Cybersecurity is the protection to defend internet-connected devices, services or systems from malicious
                                    attacks by hackers, spammers, phishing and cybercriminals.{" "}
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
                                className="sol-img m-mt30 machinelearn-img"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={cybersecurity1}
                                        className="img-fluid"
                                        alt="oracle-forms"
                                        width={500}
                                        height={483}
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
                                <h2 className="mb15">Cyber Security</h2>
                                <p
                                    className="port-tags mt20 h-light"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                    style={{ color: "#585858" }}
                                >
                                    Targeticon unlocks the potential of Cyber Security(CS) to propel your business forward.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-items mt60">
                        <div className="row vcenter">

                            <div className="col-lg-6 vcenter">
                                <div className="cta-heading">
                                    <h2 className="mb15">Overview</h2>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        {" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        Machine Learning in security is like a vigilant detective that learns from data patterns. It helps us spot
                                        malware hidden in encrypted traffic, identify insider threats, predict risky online areas.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        It safeguards our data, systems, and privacy from hackers, viruses, and malicious attacks. Think of it as a
                                        virtual guardian that fortifies our digital world, ensuring a safe and secure online experience.{" "}
                                    </p>
                                    <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={400}>
                                        Cybersecurity is the digital armor that shields us from online threats.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 vcenter">
                                <div className="ct-sol-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={cybersecurity}
                                            className="img-fluid mb20"
                                            alt="overview"
                                            width={500}
                                            height={500}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row vcenter">
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
                                                src={""}
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
                                        Cyber Security
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        {" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        {" "}
                                        Machine Learning in security is like a vigilant detective that learns from data patterns. It helps us spot
                                        malware hidden in encrypted traffic, identify insider threats, predict risky online areas.{" "}
                                    </p>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={500}
                                    >
                                        {" "}
                                        It safeguards our data, systems, and privacy from hackers, viruses, and malicious attacks. Think of it as a
                                        virtual guardian that fortifies our digital world, ensuring a safe and secure online experience.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Cyber Security
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
                                                src={""}
                                                className="img-fluid"
                                                alt="oracle-form2"
                                                width={590}
                                                height={492}
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* portfolio row 3 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-6 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="ct-sol-img">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={cybersecurity2}
                                            className="img-fluid mb20"
                                            alt="overview"
                                            width={500}
                                            height={318}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 m-order2"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <h3 className="under-service-heading">
                                        Why us?
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        Target Icon Technology Consultancy Services makes it easier for
                                        you to create your project. By working with us, you can
                                        yourself learn to create and develop these Cyber Security project.{" "}
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
            {/*start client testimonial  */}
            {/*?php include 'include/client-testimonial.php';?*/}
            {/*end client testimonial  */}
            {/*start our tools */}
            <Tools />
            {/*end our tools  */}

        </div>
    );
};
export default CyberSecurity;
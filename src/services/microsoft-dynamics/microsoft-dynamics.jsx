import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import businesscentralicon from '../../assets/images/businesscentralicon.png';
import FinanceOpertaionicon from '../../assets/images/FinanceOpertaionicon.png';
import powerbi from '../../assets/images/powerbi.png';
import Microsoftnavicon from '../../assets/images/Microsoftnavicon.png';
import microsoftbanner from '../../assets/images/microsoftbanner.png';
import microsoftimg from '../../assets/images/microsoftimg.png';

const MicrosoftDynamics = () => {
    return (
        <div>
            <section className="page-heading-sec pt60 pb60 application-page">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6 align-item-center">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    Microsoft Dynamics
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    Our main goals is to improve customer relationships, customer experience, increase productivity and sales
                                    {/* Creating your very own web application has never been easier than
                                    this, with the help of Targeticon’s expert application developers
                                    you can finally create your dream web application. */}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40 mb40"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30" data-aos="fade-in">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={microsoftbanner}
                                        className="img-fluid"
                                        alt="Enterprise-Integration"
                                        width={568}
                                        height={414}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*start Web Application Development*/}
            <section className="machine-learn-banner pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">What is Microsoft Dynamics?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row vcenter">
                        <div className="col-lg-10 m-auto">
                            <div className="cta-heading mb15 mt20">
                                <p className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={50}>
                                    Dynamics NAV, now known as Dynamics 365 Business Central, is indeed an Enterprise Resource Planning (ERP) solution designed to cater to the needs of small and medium-sized businesses.
                                    As a comprehensive ERP system, it aims to streamline and automate various aspects of business operations, ranging from sales and purchasing to warehouse management and financial reporting. With its adaptability and customization capabilities, Dynamics 365 Business Central can be tailored to suit the specific requirements of different industries.
                                </p>

                                <p className="mt20 mb-50 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={100}>
                                    {" "}
                                    Microsoft Dynamics 365 is a cloud-based business applications platform that
                                    combines components of customer relationship management (CRM) and enterprise resource planning (ERP),
                                    along with productivity applications and artificial intelligence tools..
                                </p>
                                {/* <p>
                                    {" "}
                                    Target Icon makes use of the best and popular platforms for
                                    building up the projects. Choosing the right platform for building
                                    up the project is one of the most difficult and important task to
                                    do. The platform should be chosen according to the type of the
                                    application. A different platform is chosen for small scale and
                                    large scale projects depending upon the funds and support.
                                </p> */}
                            </div>
                        </div>
                        <div className="col-md-10 m-auto">
                                <div className="text-center mt-5 pb-3">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={microsoftimg}
                                            className="img-fluid"
                                            alt="Enterprise-Integration"
                                            width={1388}
                                            height={518}
                                        />
                                    </picture>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section className="r-bg-xx sec-pad" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="sec-heading text-center">
                                <h3 className="mb15" style={{ color: "#0067b0" }}>
                                    Software Applications
                                </h3>
                                <p>
                                    Targeticon offers a comprehensive range of functionalities using various applications tailored to meet diverse business
                                    needs. Our team of skilled professionals is fully equipped and ready to provide top-notch services with their expertise
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows">
                                    <img src={businesscentralicon} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/microsoft-dynamics/business-central">
                                            {" "}
                                            Business Central
                                        </NavLink>
                                    </h3>
                                    <p>
                                        Dynamics 365 Business Central is, in essence, the new name for Dynamics NAV. Microsoft rebranded and expanded upon the existing Dynamics NAV platform by incorporating it into the Dynamics 365 family of business applications.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/microsoft-dynamics/business-central"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />{" "}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={FinanceOpertaionicon} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/microsoft-dynamics/finance&operation">
                                            Finance & Opertaion
                                        </NavLink>
                                    </h3>
                                    <p>
                                        Dynamics 365 Finance & Operations is a cloud-based Enterprise Resource Planning (ERP) system designed to cater to the needs of large or diversified companies
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/microsoft-dynamics/finance&operation" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={Microsoftnavicon} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/microsoft-dynamics/microsoft-dynamic-navision">
                                            Microsoft Dynamics
                                            <br /> Navision
                                        </NavLink>
                                    </h3>
                                    <p>
                                        Dynamics NAV, now known as Dynamics 365 Business Central, is indeed an Enterprise Resource Planning (ERP) solution designed to cater to the needs of small and medium-sized businesses.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/microsoft-dynamics/microsoft-dynamic-navision"
                                        className="ree-card-link mt40"
                                    >
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay={700}
                        >
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img">
                                    <img src={powerbi} alt="services" />{" "}
                                </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15">
                                        <NavLink to="/microsoft-dynamics/power-bi">Power BI</NavLink>
                                    </h3>
                                    <p>
                                        Power BI is a business analytics service developed by Microsoft. It allows users to visualize and analyze data from various sources, transforming raw data into interactive and visually appealing reports and dashboards.
                                    </p>
                                </div>
                                <div className="ree-card-content-link">
                                    <NavLink to="/microsoft-dynamics/power-bi" className="ree-card-link mt40">
                                        Read More <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cta-block-wide mt100">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3>
                                        Hire World-Class{" "}
                                        <span className="ree-text rt40">Developers</span>
                                    </h3>
                                    <NavLink to="/hire-app-developers"
                                        className="ree-btn  ree-btn-grdt1 mw-80"
                                    >
                                        Hire Now <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Tools />

        </div>
    );
};
export default MicrosoftDynamics;
import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import ArtificalIntelligencebannerimg from '../../assets/images/ArtificalIntelligencebannerimg.png';
import reportingicon from '../../assets/images/reportingicon.png';
import ordericon from '../../assets/images/ordericon.png';
import salesicon from '../../assets/images/salesicon.png';
import warehouseicon from '../../assets/images/warehouseicon.png';
import projecticon from '../../assets/images/projecticon.png';
import manufacturingicon from '../../assets/images/manufacturingicon.png';
import financialicon from '../../assets/images/financialicon.png';

const MicrosoftDynamicsNavision = () => {
    return (
        <div>
            <section className="page-heading-sec machine-learn-banner pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Micrsoft Dynamic</span>Navision
                                </h1>
                                {/* <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Full-cycle React Js Development. development our best with
                                    technologies.{" "}
                                </p> */}
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    It combines components of customer relationship management (CRM)
                                    and enterprise resource planning (ERP), along with productivity applications
                                    and artificial intelligence tools.
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={300}>
                                    {" "}
                                    Microsoft Navision lets to automate the manual
                                    and repeating tasks of finance, sales, operations, purchase, accounts, and inventory.
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
                            <div className="sol-img m-mt30 machinelearn-img" data-aos="fade-in">
                                <img
                                    src={ArtificalIntelligencebannerimg}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width="550px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="r-bg-hire pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={ArtificalIntelligencebannerimg}
                                        className="img-fluid mb20"
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
                                <p>
                                    Microsoft Dynamics NAV (formerly known as Navision) is an Enterprise Resource Planning (ERP) software solution designed for small and medium-sized businesses. It helps organizations automate and integrate their key business processes, including finance, sales, purchasing, inventory, manufacturing, and more. With its flexibility
                                    and customization options, Microsoft Dynamics NAV enables businesses to tailor the system to their specific industry and operational needs.
                                    It mainly covers all business processes from finance and purchasing to warehouse management and general reporting and its has some extra features like,
                                    it is super flexible and can be customised to fit your business for all kind of industries.
                                </p>
                                <p>
                                    In fact, some key features of this are finance management, sales and customer relationship, purchasing and vendor management,manufacturing,
                                    human resources, reporting and business intelligenc and integration and customization.
                                    Dynamics NAV has been rebranded as Dynamics 365 Business Central.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Features and Functionality</h2>
                                <p className="mb-5">
                                    Microsoft Dynamics NAV (formerly known as Navision) offers a range of important features
                                    and functionalities that have significantly impacted industries by automating manual and repetitive tasks.
                                    It covers key business processes such as finance, sales, operations, purchasing, accounts, and inventory management.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={reportingicon}
                                                    className="img-fluid"
                                                    alt="poc-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Reporting & Analytics</h4>
                                        <p>
                                            Dynamics 365 Business Central offers robust reporting and business intelligence tools,
                                            including pre-built reports and customizable dashboards, to gain insights into business performance.
                                            It centralize all the financial management data across different accounting, sales, purchasing etc.

                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={ordericon}
                                                    className="img-fluid"
                                                    alt="private-blockchain"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Order Processing</h4>
                                        <p>
                                            Microsoft Invasion helps in managing purchase orders, purchase invoices,
                                            vendor data, and vendor payments, ensuring efficient procurement processes.
                                            It also provide you the features to prevent you from any kind of fraudulent purchases by implementing approvals.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={salesicon}
                                                    className="img-fluid"
                                                    alt="smart-contracts"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Sales & Marketing</h4>
                                        <p>
                                            Users can manage sales orders, quotes, invoices, and customer data.
                                            Effortlessly bridge the gap between your sales and marketing teams,
                                            enabling rapid responses to sales-related inquiries directly from Outlook.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={warehouseicon}
                                                    className="img-fluid"
                                                    alt="blockchain-consulting"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Warehouse Management</h4>
                                        <p>
                                            Businesses can track and manage inventory levels,
                                            monitor stock movements, and optimize warehouse operations to ensure smooth supply chain management.
                                            Allows user to store large amount of data and can be easily extracted.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={projecticon}
                                                    className="img-fluid"
                                                    alt="hyperledger-icon"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Resource & Project Management</h4>
                                        <p>
                                            This feature allows you to plan, track, and manage projects efficiently.
                                            It includes resource allocation, time and expense tracking, and project budgeting functionalities.
                                            By utilizing Microsoft Navision, users can easily monitor and record all project-related information.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">06</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={manufacturingicon}
                                                    className="img-fluid"
                                                    alt="supply-chain"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Manufacturing</h4>
                                        <p>
                                            The manufacturing module enables businesses to manage production orders,
                                            billing of all the materials, and capacity planning, providing support for manufacturing processes.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">07</span>
                                    <div className="process-block">
                                        <div className="process-icon mb-3">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={financialicon}
                                                    className="img-fluid"
                                                    alt="cryptocurrency"
                                                    width={60}
                                                    height={60}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Financial Management</h4>
                                        <p>
                                            With Dynamics Navision you can efficiently manage all the contracts, warranties, SLAs, and mobile service operations. These functionalities enhance your
                                            operational efficiency and enable effective contract management and provide security related to your investment.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </section>
            {/*-our Benefits of Developing Android Application end*/}
            {/*Start Final Reviews*/}
            {/* <section className="page-heading-sec r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div
                                className="sol-img m-mt30 mb20"
                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={""}
                                        className="img-fluid mb20 mt20"
                                        alt="reviews"
                                        width={500}
                                        height={500}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45">Final Reviews</span>
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    Target Icon being one of the trusted companies in developing
                                    customized Android application adds its useful contribution to the
                                    huge share of the Android application market. The utilization of
                                    an Android app in several regular activities like booking railway
                                    tickets, movie tickets, buying groceries, payment of bills,
                                    transferring money, etc. has made the life of all the people
                                    hassle-free
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={100}>
                                    It acts as a boon to the social development in the developing
                                    countries and gives shape to the technology edge with its
                                    upgradation. The creativity of all the Android application
                                    developers defines the existence of the smartphone era because the
                                    Android-based smartphones are of no use without the applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Tools />

        </div>
    );
};
export default MicrosoftDynamicsNavision;
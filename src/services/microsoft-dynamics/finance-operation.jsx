import React from "react";
import { NavLink } from "react-router-dom";
import Tools from '../../components/our-tools';
import ArtificalIntelligencebannerimg from '../../assets/images/ArtificalIntelligencebannerimg.png';
import finance from '../../assets/images/finance.png';
import finance1 from '../../assets/images/finance1.png';
import finance2 from '../../assets/images/finance2.png';
import finance3 from '../../assets/images/finance3.png';

const FinanceAndOperation = () => {
    return (
        <div>
            <section className="page-heading-sec machine-learn-banner pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={50}>
                                    <span className="ree-text rt45 mr10">Finance &</span> Operation{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={60}>
                                    Dynamics 365 Finance & Operations is a cloud-based Enterprise Resource Planning system well-suited companies.
                                    It offers you the ability to keep track of all your finances and inventory.{" "}
                                </p>
                                <p className="mt10 h-light" data-aos="fade-up" data-aos-delay={70}>
                                    Microsoft now technically licenses it as two separate applications are Dynamics 365 Finance, related to
                                    financial management, budgeting, project management, and accounting companies and Dynamics 365 Supply Chain Management,
                                    related to management of the supply chain, encompassing engineering, manufacturing, warehousing, and distribution.
                                    {" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt30 cardadd"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    Get In Touch
                                    <i className="fas fa-arrow-right fa-btn" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sol-img m-mt30 machinelearn-img" data-aos="fade-in">
                                <img
                                    src={finance}
                                    alt="Targeticon"
                                    className="img-fluid"
                                    width={500} 
                                    height={338}
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
                                <h2 className="mb15"> Finance & Operation Functionality</h2>
                                <p className="port-tags mt20 h-light">
                                    {/* We have completed thousands of projects, some of them showing
                                    important projects here. */}
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
                                <div className=" text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={finance1}
                                            className="img-fluid"
                                            alt="finance"
                                            width={500}
                                            height={460}
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
                                        1. Flexible and Scalable
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        Experience an integrated, flexible, and scalable solution with Dynamics 365 Finance & Operations as your foundation.
                                        As your business grows, seamlessly add more Microsoft business apps to enhance your capabilities:
                                        empower your sales team with customer insights and intelligent sales processes to drive revenue growth,
                                        deliver exceptional customer experiences with personalized service and support,optimize field service operations
                                        and boost technician productivity with intelligent scheduling and remote assistance,streamline project management and
                                        deliver successful projects on time and within budget,Unleash the power of data with interactive visualizations and
                                        business intelligence tools to make informed decisions.
                                        {" "}
                                    </p>
                                    {/* <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={80}
                                    >
                                        {" "}
                                        With the current trends of the technological era, the companies
                                        that are usually working online needs to understand the concept
                                        of digital marketing and JAVA development in a detailed manner.{" "}
                                    </p> */}
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
                                <div className=" text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={finance2}
                                            className="img-fluid"
                                            alt="java-info1"
                                            width={500}
                                            height={446}
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
                                        2. Automation
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={70}
                                    >
                                        With Finance & Operation, you can efficiently manage your finances, including quoting, invoicing, payments, and collections,
                                        gain clear visibility into all the data you need to prepare financial statements and analyze company performance effectively.
                                        It also empowers you to handle inventory, supply chain, projects, manufacturing, and other essential aspects of your business and
                                        increase productivity and unleash creativity across your enterprise by automating tasks.
                                        Rest assured in handling tax and compliance with confidence, making it ideal for multi-currency, multi-country enterprises and also
                                        experience the familiarity and efficiency of our financial system, perfectly aligned with your Microsoft ecosystem.
                                    </p>
                                    {/* <p
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
                                    </p> */}
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
                                <div className=" text-center mt20 mb20">
                                    <picture>
                                        <img
                                            loading="lazy"
                                            src={finance3}
                                            className="img-fluid"
                                            alt="java-info2"
                                            width={500}
                                            height={438}
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
                                        3. Cloud-Based Software as a service(SaaS)
                                    </h3>
                                    <p
                                        className="mt20 h-light"
                                        data-aos="fade-up"
                                        data-aos-delay={40}
                                    >
                                        Dynamics 365 Finance & Operations is a cloud-based ERP system that offers numerous benefits like
                                        remote Work with a cloud focus, you gain secure and efficient capabilities for remote work, allowing teams to collaborate from anywhere,
                                        regular updates, enjoy semi-annual and quarterly updates that keep your system current with the latest features and improvements,
                                        accessible apps by benefit from more accessible mobile and web apps, ensuring your team can access critical information on-the-go,

                                        flexible billing of  monthly, per-user billing cycles make it easy to scale up or down as needed, providing cost-efficiency and adaptability,
                                        azure integration, experience seamless integration with other Microsoft Azure cloud products, creating a cohesive and connected ecosystem,
                                        data center choice as user can select their preferred data center region for hosting, ensuring data compliance and optimal performance.
                                        hosting security, ejoy world-class hosting security and stability, providing peace of mind for your critical business data,
                                        R&D investment: As part of Dynamics 365, you gain access to Microsoft's continuous investment in research and development, ensuring your system benefits from future advancements.


                                    </p>
                                    {/* <p
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
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                        src={ArtificalIntelligencebannerimg}
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
            <Tools />

        </div>
    );
};
export default FinanceAndOperation;
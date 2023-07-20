import React from "react";
import { NavLink } from "react-router-dom";
import blockchaingif from '../../assets/images/GIF/blockchain-development.gif';
import overview from '../../assets/images/overview.png';
import pocicon from '../../assets/images/icons/poc-icon.png';
import blockchain from '../../assets/images/icons/private-blockchain.png';
import smartcontract from '../../assets/images/icons/smart-contracts.png';
import consulating from '../../assets/images/icons/blockchain-consulting.png';
import hyperledger from '../../assets/images/icons/hyperledger-icon.png';
import supplychain from '../../assets/images/icons/supply-chain.png';
import cryptocurrency from '../../assets/images/icons/cryptocurrency.png';
import girlbro from '../../assets/images/girl-bro.png';


const BlockChainDevelopment = () => {
    return (
        <div>
            {/*start header  */}
            {/*?php include 'include/header.php';?*/}
            {/*header end  */}
            {/*page head*/}
            <section className="page-heading-sec r-bg-cse pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-6">
                            <div className="page-headings">
                                <h1 data-aos="fade-up" data-aos-delay={100}>
                                    <span className="ree-text rt45 mr10">Blockchain</span> Development{" "}
                                </h1>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={150}>
                                    In the current scenario, Blockchain development has stricken the
                                    whole world in a revolutionary way. The blockchain technology is
                                    an ingenious invention by the pseudonym, Satoshi Nakamoto. The
                                    technology was mainly developed for the digital currency, Bitcoin.
                                    Apart from Bitcoin, which is considered digital gold, the
                                    blockchain technology can also make other types of numeric value.{" "}
                                </p>
                                <p className="mt20 h-light" data-aos="fade-up" data-aos-delay={200}>
                                    The Blockchain Technology is a conscientious digital ledger of
                                    economic transactions that can be programmed to record not just
                                    financial transactions but also virtually everything of value. The
                                    information that is kept on the blockchain exists as a shared
                                    database as the blockchain database is not stored in a single
                                    location. The records that are kept in the blockchain database are
                                    public and easily verifiable.{" "}
                                </p>
                                <NavLink to="/contact-us"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
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
                                <img
                                    src={blockchaingif}
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
            {/*start overview*/}
            <section className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="ct-sol-img">
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
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Overview</h2>
                                <p>Blockchain App Development For Business</p>
                                <p className="mb30">
                                    {" "}
                                    which is the re-branding of the open-source IDE MonoDevelop and
                                    integration with Visual Studio, i.e., Microsoft’s IDE for the.Net
                                    framework that allows using Visual Studio for creating
                                    applications for Android and iOS, and as well as for Windows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end overview*/}
            {/*-our Blockchain Development Services*/}
            <section className="r-bg-d pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-10">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Blockchain Development Services</h2>
                                <p>
                                    The iPhone Application Development Process which Results in
                                    Engaging Apps
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-1">01</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={pocicon}
                                                    className="img-fluid mb20"
                                                    alt="poc-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>POC Development</h4>
                                        <p>
                                            Elaborate Proof of concept services to showcase the technical
                                            viability of a product and its market potential.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-2">02</span>
                                    <div className="process-block ">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={blockchain}
                                                    className="img-fluid mb20"
                                                    alt="private-blockchain"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Private Blockchain Development</h4>
                                        <p>
                                            Build permissioned private Blockchain applications for any
                                            industry and save on infrastructure and operational costs..
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">03</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={smartcontract}
                                                    className="img-fluid mb20"
                                                    alt="smart-contracts"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Smart Contract Development</h4>
                                        <p>
                                            Design, development, audit, and optimisation of self-executing
                                            coded business contracts to automate processes.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">04</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={consulating}
                                                    className="img-fluid mb20"
                                                    alt="blockchain-consulting"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Blockchain Consulting</h4>
                                        <p>
                                            Strategic advice on successful employment of Blockchain
                                            technology to optimize the potential outcomes.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">05</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={hyperledger}
                                                    className="img-fluid mb20"
                                                    alt="hyperledger-icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Hyperledger Development</h4>
                                        <p>
                                            Unlock the potential of open source Blockchains and tools for
                                            collaborative development with distributed ledgers.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">06</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={supplychain}
                                                    className="img-fluid mb20"
                                                    alt="supply-chain"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Supply Chain development</h4>
                                        <p>
                                            Improve transparency and traceability and reduce
                                            administrative costs with effective supply chain solutions.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 mt30 mb15 ">
                            <NavLink to="#">
                                <div className="process-content ree-card h-100">
                                    <span className="setps hst-3">07</span>
                                    <div className="process-block">
                                        <div className="process-icon">
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={cryptocurrency}
                                                    className="img-fluid mb20"
                                                    alt="cryptocurrency"
                                                    width={50}
                                                    height={50}
                                                />
                                            </picture>
                                        </div>
                                        <h4>Cryptocurrency Development</h4>
                                        <p>
                                            Elaborate ICO and Cryptocurrency development services to
                                            successfully launch your customised altcoin.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/*-our Blockchain Development Services end*/}
            {/*start conclusion*/}
            <section className="r-bg-c pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-6 vcenter">
                            <div className="cta-heading">
                                <h2 className="mb15">Conclusion</h2>
                                <p>
                                    Target Icon contributes to utilizing the complete concept of
                                    Blockchain technology not only in cryptocurrency but also in other
                                    financial applications. It is a boon for the development of
                                    society.{" "}
                                </p>
                                <p>
                                    {" "}
                                    It has a vast horizon of utilization not only in financial service
                                    but also in legal matters related to dealings in tangible and
                                    intangible property. It plays the most vital role in detecting
                                    fraudulent transactions and any kind of data loss.
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
                                        alt="interfaces"
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
export default BlockChainDevelopment;
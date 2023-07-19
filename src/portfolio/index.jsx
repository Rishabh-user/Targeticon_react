import React from "react";

const Index = () => {
    return (
        <div>
            {/* Start Header */}
            {/*?php include '../include/header.php';?*/}
            {/* Header End */}
            {/*page head*/}
            <div className="port-head-sec pt80 pb80 portfolio-page">
                <div className="container">
                    <div className="row vcenter ">
                        <div className="col-lg-7">
                            <div className="page-headings">
                                <span
                                    className="sub-heading mb15 txt-orange"
                                    data-aos="fade-in"
                                    data-aos-delay={100}
                                >
                                    <i className="fas fa-briefcase mr5" /> Quality Work
                                </span>
                                <h1
                                    className="mb15 txt-white"
                                    data-aos="fade-in"
                                    data-aos-delay={200}
                                >
                                    Some of our <span className="ree-text rt40">Finest</span> work.
                                </h1>
                                <p className="txt-white" data-aos="fade-in" data-aos-delay={300}>
                                    We Have Built High Impact Solutions Across Industries.
                                </p>
                                <a
                                    href="contact-us.php"
                                    className="ree-btn  ree-btn-grdt1 mt40"
                                    data-aos="fade-in"
                                    data-aos-delay={400}
                                >
                                    Get Quote <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div
                                className="ree-card m-mt30 trust-review owl-carousel"
                                data-aos="fade-in"
                                data-aos-delay={500}
                            >
                                <div className="items">
                                    <div className="review-text">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type.
                                        </p>
                                    </div>
                                    <div className="ree-row-set mt30">
                                        <div className="media vcenter">
                                            <div className="ree-icon-set img-round80">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/users/user4.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Lora Myka</h5>
                                                <p>
                                                    ABC Business, <small>Jaipur, Rajasthan</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="review-text">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type.
                                        </p>
                                    </div>
                                    <div className="ree-row-set mt30">
                                        <div className="media vcenter">
                                            <div className="ree-icon-set img-round80">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/users/user4.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Lora Myka</h5>
                                                <p>
                                                    ABC Business, <small>Jaipur, Rajasthan</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt50">
                        <div className="col-lg-12">
                            <div className="company-special-work">
                                {/*?php include'../include/top-brands-trust-slider.php';?*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*page head end*/}
            {/*portfolio items*/}
            <div className="pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15">Creative work</h2>
                                <p>
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
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/FGLI-screen-short.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        FGLI Creative Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Life insurance is an irreplaceable part of a sound financial
                                                plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://life.futuregenerali.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/future-generali-life-insurance"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/customer-logo-4.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Future Generali Life Insurance</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 2 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/oliva-screen-short.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        Oliva Skin &amp; Hair Clinic Creative Designing Service by
                                        Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Oliva Skin &amp; Hair Clinic irreplaceable part of a sound
                                                financial plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://www.olivaclinic.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/oliva-clinic"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/customer-logo-2.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Oliva Skin &amp; Hair Clinic</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 3 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/TSTPC-screen-short.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        TSTPC Ltd. Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Telangana State Trade Promotion Corporation Ltd. part of a
                                                sound financial plan. It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://tstpc.telangana.gov.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/tstpc-ltd"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/TSTPC-logo.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>TSTPC Ltd.</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 4 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/T-SIG.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        T-SIG Ltd. Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                T-Social Impact Group Ltd. part of a sound financial plan.
                                                It helps in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://csr.telangana.gov.in/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/t-sig-ltd"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/t-social.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>T-SIG Ltd.</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 5 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/GCFL.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        GetCashForLaptop Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Get Cash For Laptop part of a sound financial plan. It helps
                                                in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://www.getcashforlaptop.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/GetCashForLaptop"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/GCFL-logo.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>GetCashForLaptop</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 6 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/virtuallyvocal.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        Virtually Vocal Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Virtually Vocal part of a sound financial plan. It helps in
                                                securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://www.virtuallyvocal.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/virtually-vocal"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/virtuallyvocal-logo.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Virtually Vocal</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 7 */}
                        <div className="row vcenter">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/sociallocket-screen.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        Social Locket Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Social Locket part of a sound financial plan. It helps in
                                                securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="https://green.app.sociallocket.com/da"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/sociallocket"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/sociallocket-logo.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Social Locket</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio row 8 */}
                        <div className="row vcenter flex-row-reverse">
                            <div
                                className="col-lg-7 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="hovr-scale-main">
                                    <div className="portfolio-flimg hovr-scale-base">
                                        <a href="#">
                                            {" "}
                                            <img
                                                src=" <?php echo BASE_URL; ?>images/Performer-Auditions-screen.png"
                                                alt="portfolio"
                                                className="img-fluid"
                                            />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-5 m-order1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="portfolio-detls pdr-dtls">
                                    <p className="port-tags">UX, UI, Graphic Design</p>
                                    <a href="#" className="port-title-main">
                                        Performer Auditions Designing Service by Targeticon
                                    </a>
                                    <div className="client-of-item mt30">
                                        <div className="mb20">
                                            <p>
                                                Performer Auditions part of a sound financial plan. It helps
                                                in securing your family
                                            </p>
                                        </div>
                                        <div className="mb20 portfolio-see-more-btn">
                                            <a
                                                href="http://stage.performerauditions.com/"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                Live view <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                            <a
                                                href="https://www.targeticon.com/portfolio/performerauditions"
                                                target="_blank"
                                                className="port-links ree-btn-grdt1"
                                            >
                                                See Details <i className="fas fa-arrow-right fa-btn" />
                                            </a>
                                        </div>
                                        <div className="media vcenter ">
                                            <div className="ree-icon-set img-round80 shadows">
                                                <img
                                                    src=" <?php echo BASE_URL; ?>images/brand-logo/PerformerAuditions-logo.png"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="ree-details-set user-info">
                                                <h5>Performer Auditions</h5>
                                                <p>Design by Targeticon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <ul class="pagination shadows">
                        <li><a href="#" class="prev">Prev</a></li>
                        <li class="pageNumber active"><a href="#">1</a></li>
                        <li class="pageNumber"><a href="#">2</a></li>
                        <li class="pageNumber"><a href="#">3</a></li>
                        <li class="pageNumber"><a href="#">4</a></li>
                        <li><a href="#" class="next">Next</a></li>
                    </ul>
                </div>
            </div> */}
                    </div>
                </div>
            </div>
            {/*portfolio end*/}
            {/*creative portfolio*/}
            <section className="dark-light-a pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-8 vcenter text-center">
                            <div className="heading-hz-btn">
                                <span className="sub-heading mb15">
                                    {/* QUALITY WORK */}Quality is more important than quantity
                                </span>
                                <h2 className="w-txt">
                                    Some of our <span className="ree-text rt40">Finest</span> Work
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt20 dark-bg">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <a href="https://zanducare.com/" target="_blank">
                                    {" "}
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/zandu-care-screen.png"
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </a>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/brand-logo/zandu-logo.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Zandu Care</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <a
                                    href="https://zanducare.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </a>
                                <a
                                    href="https://www.targeticon.com/portfolio/performerauditions"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <a href="https://www.n1buildingcontractors.com/" target="_blank">
                                    {" "}
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/n1-building-screen.png"
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </a>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/brand-logo/n1-Building-logo.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">N1 Building Contractors Ltd.</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <a
                                    href="https://www.n1buildingcontractors.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </a>
                                <a
                                    href="https://www.targeticon.com/portfolio/performerauditions"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <a href="#">
                                    {" "}
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/rafawater-screen.png"
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </a>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/brand-logo/rafawater-logo.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Rafa Water</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <a
                                    href="https://www.rafawater.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </a>
                                <a
                                    href="https://www.targeticon.com/portfolio/performerauditions"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <a href="#">
                                    {" "}
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/oliva-shop-screen.png"
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </a>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/brand-logo/customer-logo-2.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Shop Oliva Clinic</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <a
                                    href="https://shop.olivaclinic.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </a>
                                <a
                                    href="https://www.targeticon.com/portfolio/performerauditions"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  mt40 img-hover quality-work">
                            <div className="work-thumbnail">
                                <a href="#">
                                    {" "}
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/remodle-screen.png"
                                        alt="portfolio reevan"
                                        className="img-fluid"
                                    />{" "}
                                </a>
                            </div>
                            <div className="media vcenter mt20">
                                <div className="ree-icon-set img-round80 shadows">
                                    <img
                                        src=" <?php echo BASE_URL; ?>images/brand-logo/customer-logo-3.png"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="port-title">
                                    <h4 className="mb5">Remodel Republic</h4>
                                    <p>UX, UI, Graphic Design</p>
                                </div>
                            </div>
                            <div className="mb20 mt20 portfolio-see-more-btn">
                                <a
                                    href="https://www.remodelrepublic.com/"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    Live view <i className="fas fa-arrow-right fa-btn" />
                                </a>
                                <a
                                    href="https://www.targeticon.com/portfolio/performerauditions"
                                    target="_blank"
                                    className="port-links ree-btn-grdt1"
                                >
                                    See Details <i className="fas fa-arrow-right fa-btn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row justify-content-center text-center mt60">
            <div class="col-lg-10">
                <div class="cta-heading-wide-bt">
                    <h3 class="w-txt">Take a look of our quality work</h3>
                    <a href="https://separateweb.com/" class="ree-btn  ree-btn-grdt1 mw-80 no-shadows">View All Work <i class="fas fa-arrow-right fa-btn"></i></a> 
                </div>
            </div>
            </div> */}
                </div>
            </section>
            {/*end portfolio*/}
            {/*item screen*/}
            <section className="home-partners-block r-bg-x pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="sec-heading text-center">
                                <h2 className="mb15">
                                    <span className="ree-text rt40">App</span> Screens
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="app-screenss owl-carousel mt70 dottss">
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-1.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-2.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-3.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-4.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-2.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="appscreen">
                            <div className="itme-img">
                                <img
                                    src=" <?php echo BASE_URL; ?>images/case-study/portfolio-App-screen-make-4.png"
                                    alt="mockup"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*item screen end*/}
            {/*start footer */}
            {/*?php include '../include/footer.php';?*/}
            {/* end footer
            */}
        </div>
    );
};
export default Index;
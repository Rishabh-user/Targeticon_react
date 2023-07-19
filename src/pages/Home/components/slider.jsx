import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () =>{
    const options = {
        items: 3,
        margin: 20,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        },
      };
    return(
        <div>
            {/*start main slider  */}
            
            <section className="home-hero slide-hero">
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                        <img src="image1.jpg" alt="Image 1" />
                    </div>
                
                </OwlCarousel>
                <div className="hero-owl owl-carousel ">
                    <div className="slide owlbg11 career-detail-banner pb60 pt60">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-6 col-sm-12 vcenter hide-for-mobile">
                                    <div className="sol-image m-mt30 mt50">
                                        {/* <picture>
                                <source media="(max-width:991px)" srcset="images/banner/hire-dedicated-resource-mobile.webp" type="image/webp">
                                <source media="(max-width:991px)" srcset="images/banner/hire-dedicated-resource-mobile.png" type="image/jpg">
                                <source srcset="images/banner/hire-dedicated-resource.webp" type="image/webp">
                                <source srcset="images/banner/hire-dedicated-resource.png" type="image/png"> 
                                <img fetchpriority="high" src="images/banner/hire-dedicated-resource.png" class="img-fluid" alt="Hire Dedicated Resource" width="600" height="500" data-aos="fade-in" data-aos-delay="400"/>
                            </picture> */}
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 vcenter mr-auto">
                                    <div className="hero-content-x">
                                        <h1
                                            className="mb30 mt50 txt-white"
                                            data-aos="fade-in"
                                            data-aos-delay={200}
                                        >
                                            Hire App Developers
                                        </h1>
                                        <ul className="ul-list-icon mt30">
                                            <li className="txt-white">
                                                <i className="far fa-hand-point-right" />
                                                Monthly/Yearly hiring
                                            </li>
                                            <li className="txt-white">
                                                <i className="far fa-hand-point-right" />
                                                Direct Access of resource
                                            </li>
                                            <li className="txt-white">
                                                <i className="far fa-hand-point-right" />
                                                160 man hours guaranteed
                                            </li>
                                            <li className="txt-white">
                                                <i className="far fa-hand-point-right" />
                                                Daily/Weekly/Monthly reporting via email
                                            </li>
                                            <li className="txt-white">
                                                <i className="far fa-hand-point-right" />
                                                Flexible Office hours depend on timezone
                                            </li>
                                        </ul>
                                        <a
                                            href="hire-app-developers.php"
                                            className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                            data-aos="fade-in"
                                            data-aos-delay={800}
                                        >
                                            Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide owlbg11 software-slider pb60 pt60">
                        <div className="container">
                            <div className="row flex-row-reverse vcenter">
                                <div className="col-lg-6 col-sm-12 vcenter">
                                    <div className="sol-image m-mt30 mt50">
                                        {/* <picture>
                                <source media="(max-width:991px)" srcset="images/banner/hire-dedicated-resource-mobile.webp" type="image/webp">
                                <source media="(max-width:991px)" srcset="images/banner/hire-dedicated-resource-mobile.png" type="image/jpg">
                                <source srcset="images/banner/hire-dedicated-resource.webp" type="image/webp">
                                <source srcset="images/banner/hire-dedicated-resource.png" type="image/png"> 
                                <img fetchpriority="high" src="images/banner/hire-dedicated-resource.png" class="img-fluid" alt="Hire Dedicated Resource" width="600" height="500" data-aos="fade-in" data-aos-delay="400"/>
                            </picture> */}
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 vcenter">
                                    <div className="hero-content-x">
                                        <h1
                                            className="mb30 mt50 txt-white"
                                            data-aos="fade-in"
                                            data-aos-delay={200}
                                        >
                                            Software Development Company
                                        </h1>
                                        <p className="txt-white">
                                            We build transformative software solutions, combining
                                            expertise with innovation. Our skilled team creates scalable,
                                            secure, and user-friendly applications to drive business
                                            success.
                                        </p>
                                        <a
                                            href="contact-us.php"
                                            className="ree-btn  ree-btn-grdt1 mt40 mw-80"
                                            data-aos="fade-in"
                                            data-aos-delay={800}
                                        >
                                            Let's Talk <i className="fas fa-arrow-right fa-btn" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*?php include 'include/top-brands-trust-slider.php';?*/}
            </section>
            {/*start main slider  */}
        </div>
    );
};
export default Slider;
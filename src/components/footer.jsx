import React from "react";
import { NavLink } from "react-router-dom";
import brandlogo from '../assets/images/brand-logo/app-futura.webp';
import brandlogo1 from '../assets/images/brand-logo/app-futura.png';
import appfutura1 from '../assets/images/brand-logo/appfutura-logo.png';
import goodfirm1 from '../assets/images/brand-logo/goodfirm.png';
import itfirm1 from '../assets/images/brand-logo/itfirm.png';
import pdf from '../assets/images/Company_Brochure.pdf';


const Footer = () => {
    return (
        <div>

            <footer className="footer-a">
                <div className="footer-fist-row pt40">
                    <div className="container">
                        <div className="footer-rowset">
                            <div className="col footer-head">
                                <h5>Contact info</h5>
                                <ul className="footer-links-list social-linkz">
                                    <li>
                                        <NavLink to="tel:+17183952545">
                                            <span>
                                                <i className="fas fa-phone-square-alt" />
                                            </span>{" "}
                                            +1 718 395 2545
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://wa.me/+919818757597" target="_blank">
                                            <span>
                                                <i className="fab fa-whatsapp-square" />
                                            </span>{" "}
                                            +91 981 875 7597
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="mailto:info@targeticon.com">
                                            <span>
                                                <i className="fas fa-envelope" />
                                            </span>
                                            info@targeticon.com
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="skype:target.icon">
                                            <span>
                                                <i className="fab fa-skype" />
                                            </span>{" "}
                                            target.icon
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Follow Us</h5>
                                <ul className="footer-links-list social-linkz">
                                    <li>
                                        <NavLink to="https://www.linkedin.com/company/targeticon/"
                                            target="_blank"
                                        >
                                            <span>
                                                <i className="fab fa-linkedin" />
                                            </span>{" "}
                                            Linked in
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.instagram.com/targeticoncompany/"
                                            target="_blank"
                                        >
                                            <span>
                                                <i className="fab fa-instagram" />
                                            </span>
                                            instagram
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.facebook.com/targeticon" target="_blank">
                                            <span>
                                                <i className="fab fa-facebook-f" />
                                            </span>{" "}
                                            Facebook
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="https://www.youtube.com/channel/UCb_vpek2kqoYph9uTCFbAeg"
                                            target="_blank"
                                        >
                                            <span>
                                                <i className="fab fa-youtube" />
                                            </span>{" "}
                                            Youtube
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Services</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <NavLink to="/ui-ux-design">UI/UX Design</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/web-app-development">
                                            Web Application Development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mobile-app-development">Mobile App Development</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cloud">Cloud</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/js-stack-development">JS Stack Development</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/application">
                                            Application
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/enterprise-integration">Enterprise Integration</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/microsoft-dynamics">Microsoft Dynamics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">Website Testing</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Industries</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <NavLink to="/health-care">Health Care</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/insurance">Insurance</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">Energy Sector</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/retail">Retail</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/banking-finance">Banking &amp; Finance</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/education">Education</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/media-advertising">Media &amp; Advertising</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/travel-social">Travel &amp; Social</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/logistics-business">Logistics and Business</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/manufacturing">Manufacturing</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Company</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <NavLink to="/about">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">Technologies</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact-us">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-abt mt70 pt40 pb40">
                        <div className="container">
                            <div className="row vcenter">
                                {/* <div class="col-lg-3 vcenter">
                    <div class="footer-ree-lg mt30 mb30">
                        <div class="footer-logo">
                        <Link to="index.php">
                            <picture>
                                <source srcset="images/targeticon-footer-logo.webp" type="image/webp">
                                <source srcset="images/targeticon-footer-logo.png" type="image/png"> 
                                <img loading="lazy" src="images/targeticon-footer-logo.png" class="img-fluid" alt="footer-logo" width="300" height="61"/>
                            </picture>
                        </Link>
                        </div>
                    </div>
                    </div> */}
                                <div className="col-lg-9 vcenter">
                                    <div className="container">
                                        <div className="row justify-content-center align-center mt30 mb30">
                                            <div className="col-md-12">
                                                <div className="app-awards owl-carousesl">
                                                    <div className="award-achivt">
                                                        <picture>
                                                            <img
                                                                loading="lazy"
                                                                src={brandlogo1}
                                                                className="img-fluid"
                                                                alt="app-futura"
                                                                width={238}
                                                                height={222}
                                                            />
                                                        </picture>
                                                    </div>
                                                    <div className="award-achivt">
                                                        <picture>
                                                            <img
                                                                loading="lazy"
                                                                src={appfutura1}
                                                                className="img-fluid"
                                                                alt="appfutura-logo"
                                                                width={238}
                                                                height={222}
                                                            />
                                                        </picture>
                                                    </div>
                                                    <div className="award-achivt">
                                                        <picture>
                                                            <img
                                                                loading="lazy"
                                                                src={goodfirm1}
                                                                className="img-fluid"
                                                                alt="goodfirm"
                                                                width={238}
                                                                height={222}
                                                            />
                                                        </picture>
                                                    </div>
                                                    <div className="award-achivt">
                                                        <picture>
                                                            <img
                                                                loading="lazy"
                                                                src={itfirm1}
                                                                className="img-fluid"
                                                                alt="itfirm"
                                                                width={238}
                                                                height={222}
                                                            />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* see this also */}
                                <div className="col-lg-3 vcenter ft-btn">
                                    <NavLink to={pdf}
                                        target="_blank"
                                        className="ree-btn ree-btn-grdt1 mw-80 no-shadows"
                                    >
                                        Our Brochure <i className="fas fa-arrow-right fa-btn" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container ft-cpy">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ft-copyright ft-r text-center">
                                    <p>
                                        Copyright © 2023 Targeticon Digital Services Private Limited |
                                        CIN: U74999UP2016PTC087825. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer */}
            {/*JavaScript at end of body for optimized loading*/}
            {/*JavaScript at end of body for optimized loading*/}
            {/*All js files*/}
            {/*  */}
            {/*Common Targeticon script file*/}
        </div>
    );
};
export default Footer;
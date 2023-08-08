import React from "react";
import { Link } from "react-router-dom";
import brandlogo1 from '../assets/images/brand-logo/app-futura.png';
import appfutura1 from '../assets/images/brand-logo/appfutura-logo.png';
import goodfirm1 from '../assets/images/brand-logo/goodfirm.png';
import itfirm1 from '../assets/images/brand-logo/itfirm.png';


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
                                        <Link to="tel:+17183952545">
                                            <span>
                                                <i className="fas fa-phone-square-alt" />
                                            </span>{" "}
                                            +1 718 395 2545
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://wa.me/+919818757597" target="_blank" rel="noreferrer" >
                                            <span>
                                                <i className="fab fa-whatsapp-square" />
                                            </span>{" "}
                                            +91 981 875 7597
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:info@targeticon.com">
                                            <span>
                                                <i className="fas fa-envelope" />
                                            </span>
                                            info@targeticon.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="skype:target.icon">
                                            <span>
                                                <i className="fab fa-skype" />
                                            </span>{" "}
                                            target.icon
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Follow Us</h5>
                                <ul className="footer-links-list social-linkz">
                                    <li>
                                        <Link
                                            to="https://www.linkedin.com/company/targeticon/"
                                            target="_blank" rel="noreferrer" 
                                        >
                                            <span>
                                                <i className="fab fa-linkedin" />
                                            </span>{" "}
                                            Linked in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://www.instagram.com/targeticoncompany/"
                                            target="_blank" rel="noreferrer" 
                                        >
                                            <span>
                                                <i className="fab fa-instagram" />
                                            </span>
                                            instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.facebook.com/targeticon" target="_blank" rel="noreferrer" >
                                            <span>
                                                <i className="fab fa-facebook-f" />
                                            </span>{" "}
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://www.youtube.com/channel/UCb_vpek2kqoYph9uTCFbAeg"
                                            target="_blank" rel="noreferrer" 
                                        >
                                            <span>
                                                <i className="fab fa-youtube" />
                                            </span>{" "}
                                            Youtube
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Services</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <Link to="/UI-UX-design">UI/UX Design</Link>
                                    </li>
                                    <li>
                                        <Link to="/web-app-development">
                                            Web Application Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/mobile-app-development">Mobile App Development</Link>
                                    </li>
                                    <li>
                                        <Link to="/Cloud">Cloud</Link>
                                    </li>
                                    <li>
                                        <Link to="/JS-Stack-Development">JS Stack Development</Link>
                                    </li>
                                    <li>
                                        <Link to="/Oracle-Forms-Development">
                                            Oracle Forms Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Enterprise-Integration">Enterprise Integration</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Website Testing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Industries</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <Link to="/Health-Care">Health Care</Link>
                                    </li>
                                    <li>
                                        <Link to="/Insurance">Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Energy Sector</Link>
                                    </li>
                                    <li>
                                        <Link to="/Retail">Retail</Link>
                                    </li>
                                    <li>
                                        <Link to="/Banking-Finance">Banking &amp; Finance</Link>
                                    </li>
                                    <li>
                                        <Link to="/Education">Education</Link>
                                    </li>
                                    <li>
                                        <Link to="/Media-Advertising">Media &amp; Advertising</Link>
                                    </li>
                                    <li>
                                        <Link to="/Travel-Social">Travel &amp; Social</Link>
                                    </li>
                                    <li>
                                        <Link to="/Logistics-Business">Logistics and Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/Manufacturing">Manufacturing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col footer-head">
                                <h5>Company</h5>
                                <ul className="footer-links-list">
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Technologies</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/portfolio">Portfolio</Link>
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
                                <div className="col-lg-3 vcenter ft-btn">
                                    <Link
                                        to="images/Company_Brochure.pdf"
                                        target="_blank" rel="noreferrer" 
                                        className="ree-btn ree-btn-grdt1 mw-80 no-shadows"
                                    >
                                        Our Brochure <i className="fas fa-arrow-right fa-btn" />
                                    </Link>
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
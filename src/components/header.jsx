import React from "react";
import Logo from '../assets/images/logo.png';
import Logoweb from '../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <header className="ree-header fixed-top">
                <div className="container-fluid m-p-l-r-0">
                    <div className="menu-header horzontl">
                        <div className="menu-logo">
                            <div className="dskt-logo">
                                <NavLink to='/home' className="nav-brand"></NavLink>
                                <picture>
                                    <source
                                        srcSet={Logoweb}
                                        type="image/webp"
                                    />
                                    <source
                                        srcSet={Logo}
                                        type="image/png"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet={Logo}
                                        className="img-fluid"
                                        alt="Target-logo"
                                        width={300}
                                        height={61}
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                    <div className="ree-nav" role="navigation">
                        <ul className="nav-list">
                            <li className="megamenu mega-small">
                                <a href="index.php" className="menu-links">
                                    Home
                                </a>
                            </li>
                            <li className="megamenu mega-small">
                                <a href="about.php" className="menu-links">
                                    About Us
                                </a>
                                {/* <div class="menu-dropdown">
                        <div class="menu-block-set"> 
                        <a class="dropdown-item" href="portfolio.php">Portfolio</a>
                        <a class="dropdown-item" href="team.php">Teams</a>           
                        </div>
                    </div> */}
                            </li>
                            <li className="megamenu">
                                <a href="#" className="menu-links">
                                    Services
                                </a>
                                <div className="menu-dropdown">
                                    <div className="menu-block-set">
                                        <div className="container">
                                            <div className="menu-block-a">
                                                <div className="mega-menu-blocks">
                                                    <p className="mb10">Need a Website?</p>
                                                    <h4>
                                                        We Will Shape Your Brand With Our Digital Solutions
                                                    </h4>
                                                    <a
                                                        href="contact-us.php"
                                                        className="ree-btn ree-btn0 ree-btn-grdt2 mt30"
                                                    >
                                                        {" "}
                                                        Request Quote{" "}
                                                        <i className="fas fa-arrow-right fa-btn" />
                                                    </a>
                                                </div>
                                                <div className="mega-menu-blocks">
                                                    <div className="menu-inner-block-a">
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="mobile-app-development.php">
                                                                    Mobile App Development
                                                                </a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="Android-app-development.php">
                                                                        Android App Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="ios-app-development.php">
                                                                        iOS App Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="hybrid-app-development.php">
                                                                        Hybrid App Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="xamarin.php">Xamarin</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blockchain-development.php">
                                                                        Blockchain Development
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="web-app-development.php">
                                                                    Web App Development
                                                                </a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="dot-net-development.php">
                                                                        Dot Net Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="php-development.php">
                                                                        PHP Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="java-development.php">
                                                                        Java Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="ecommerce-development.php">
                                                                        Ecommerce Development
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="progressive-web-app.php">
                                                                        Progressive Web App (PWA)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="UI-UX-design.php">UI/UX Design</a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="website-designing.php" className="">
                                                                        Website Designing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="android-application-design.php"
                                                                        className=""
                                                                    >
                                                                        Android Application Design
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="iOS-Application-Designing.php"
                                                                        className=""
                                                                    >
                                                                        iOS Application Designing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="ux-design.php" className="">
                                                                        UX Design
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="Cloud.php">Cloud</a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="AWS.php" className="">
                                                                        AWS
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="Azure-Cloud-Migration.php"
                                                                        className=""
                                                                    >
                                                                        Azure Cloud Migration
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="JS-Stack-Development.php">
                                                                    JS Stack Development
                                                                </a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="Mean-Stack.php" className="">
                                                                        MEAN STACK
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="React-Js.php" className="">
                                                                        React JS
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="Oracle-Forms-Development.php">
                                                                    Oracle Forms Development
                                                                </a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="D2K-forms.php" className="">
                                                                        D2K Forms
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="D2K-Reports.php" className="">
                                                                        D2K reports
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner-blockss">
                                                            <label className="menu-headings">
                                                                <a href="Enterprise-Integration.php">
                                                                    Enterprise Integration
                                                                </a>
                                                            </label>
                                                            <ul className="menu-li-link">
                                                                <li>
                                                                    <a href="Salesforce.php" className="">
                                                                        Salesforce
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="MS-CRM.php" className="">
                                                                        MS CRM
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="Sharepoint.php" className="">
                                                                        Sharepoint
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-extra-info">
                                        <div className="container">
                                            <div className="menu-extra-info-inner">
                                                <ul>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="far fa-envelope" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="mailto:info@targeticon.com">
                                                            info@targeticon.com
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fas fa-phone-alt" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="tel:+911204171403">+91 120 4171403</a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fab fa-whatsapp" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="https://wa.me/+91-9818757597">
                                                            +91-9818757597
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fab fa-skype" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="skype:target.icon">target.icon</a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fas fa-question" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="index.php">Why Choose Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="megamenu">
                                <a href="#" className="menu-links">
                                    Industry Served
                                </a>
                                <div className="menu-dropdown">
                                    <div className="menu-block-set">
                                        <div className="container">
                                            <div className="menu-block-a">
                                                <div className="mega-menu-blocks">
                                                    <p className="mb10">Need a Website?</p>
                                                    <h4>
                                                        We begin with a deep understanding of your needs and
                                                        create a planning template.
                                                    </h4>
                                                    <a
                                                        href="contact-us.php"
                                                        className="ree-btn ree-btn0 ree-btn-grdt2 mt30"
                                                    >
                                                        {" "}
                                                        Request Quote{" "}
                                                        <i className="fas fa-arrow-right fa-btn" />
                                                    </a>
                                                </div>
                                                <div className="mega-menu-blocks">
                                                    <div className="menu-inner-block-a">
                                                        <div className="inner-blockss Industries-menu">
                                                            <label className="">
                                                                <a
                                                                    href="Health-Care.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Health-Care.png"
                                                                            alt="Health-Care"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Health Care</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Insurance.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Insurance.png"
                                                                            alt="Insurance"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Insurance</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a href="#" className="Industries-menu-icons">
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Energy-Sector.png"
                                                                            alt="Energy Sector"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Energy Sector</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Retail.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Retail.png"
                                                                            alt="Retail"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Retail</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Banking-Finance.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Banking-Finance.png"
                                                                            alt="Banking & Finance"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Banking &amp; Finance</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Education.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/education.png"
                                                                            alt="Education"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Education</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Media-Advertising.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Media-Advertising.png"
                                                                            alt="Media & Advertising"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Media &amp; Advertising</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Travel-Social.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Travel-Social.png"
                                                                            alt="Travel & Social"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Travel &amp; Social</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Logistics-Business.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Logistics-Business.png"
                                                                            alt="Logistics and Business"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Logistics and Business</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                            <label className="">
                                                                <a
                                                                    href="Manufacturing.php"
                                                                    className="Industries-menu-icons"
                                                                >
                                                                    <figure>
                                                                        <img
                                                                            loading="lazy"
                                                                            src="<?php echo BASE_URL; ?>images/Industries/Manufacturing.png"
                                                                            alt="Manufacturing"
                                                                            width={50}
                                                                            height={50}
                                                                        />
                                                                    </figure>
                                                                    <figcaption>
                                                                        <span>Manufacturing</span>
                                                                    </figcaption>
                                                                </a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-extra-info">
                                        <div className="container">
                                            <div className="menu-extra-info-inner">
                                                <ul>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="far fa-envelope" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="mailto:info@targeticon.com">
                                                            info@targeticon.com
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fas fa-phone-alt" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="tel:+911204171403">+91 120 4171403</a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fab fa-whatsapp" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="https://wa.me/+919818757597">
                                                            +91 981 875 7597
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fab fa-skype" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="skype:target.icon">target.icon</a>
                                                    </li>
                                                    <li>
                                                        <div className="menu-icon-ree">
                                                            <div className="webiocon">
                                                                {" "}
                                                                <i className="fas fa-question" />{" "}
                                                            </div>
                                                        </div>
                                                        <a href="index.php">Why Choose Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="megamenu mega-small">
                                <a href="hire-app-developers.php" className="menu-links">
                                    Hire app developers
                                </a>
                            </li>
                            <li className="megamenu mega-small">
                                <a href="blog.php" className="menu-links">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ree-nav-cta">
                        <ul>
                            <li>
                                <a
                                    href="<?php echo BASE_URL; ?>/contact-us.php"
                                    className="ree-btn ree-btn0 ree-btn-grdt2"
                                >
                                    {" "}
                                    Contact Us
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu2">
                        <ul className="mob-nav2">
                            <li>
                                <a
                                    href="mailto:sales@targeticon.com"
                                    className="ree-btn2 ree-btn-grdt1"
                                >
                                    <i className="fas fa-envelope-open-text" />
                                </a>
                            </li>
                            <li className="navm-">
                                <a className="toggle" href="#">
                                    {" "}
                                    <span />{" "}
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    {/* mobile Nav */}
                    <nav id="main-nav">
                        <ul>
                            <li>
                                <a href="index.php">Home</a>
                            </li>
                            <li>
                                <a href="about.php">About us</a>
                                {/* <ul>
                        <li><a href="portfolio.php">Portfolio</a></li>
                        <li><a href="team.php">Team</a></li>
                    </ul>  */}
                            </li>
                            <li>
                                <a href="#">Services</a>
                                <ul>
                                    <li>
                                        <a href="UI-UX-design.php">UI/UX Design</a>
                                        <ul>
                                            <li>
                                                <a href="website-designing.php">Website Designing</a>
                                            </li>
                                            <li>
                                                <a href="android-application-design.php">
                                                    Android Application Design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="iOS-Application-Designing.php">
                                                    iOS Application Designing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="ux-design.php">UX Design</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="web-app-development.php">Web App Development</a>
                                        <ul>
                                            <li>
                                                <a href="dot-net-development.php">Dot Net Development</a>
                                            </li>
                                            <li>
                                                <a href="php-development.php">PHP Development</a>
                                            </li>
                                            <li>
                                                <a href="java-development.php">Java Development</a>
                                            </li>
                                            <li>
                                                <a href="ecommerce-development.php">
                                                    Ecommerce Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="progressive-web-app.php">
                                                    Progressive Web App (PWA)
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="mobile-app-development.php">
                                            Mobile App Development
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="Android-app-development.php">
                                                    Android App Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="ios-app-development.php">iOS App Development</a>
                                            </li>
                                            <li>
                                                <a href="hybrid-app-development.php">
                                                    Hybrid App Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="xamarin.php">Xamarin</a>
                                            </li>
                                            <li>
                                                <a href="blockchain-development.php">
                                                    Blockchain Development
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="Cloud.php">Cloud</a>
                                        <ul>
                                            <li>
                                                <a href="AWS.php" className="">
                                                    AWS
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Azure-Cloud-Migration.php" className="">
                                                    Azure Cloud Migration
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="JS-Stack-Development.php">JS Stack Development</a>
                                        <ul>
                                            <li>
                                                <a href="Mean-Stack.php" className="">
                                                    MEAN STACK
                                                </a>
                                            </li>
                                            <li>
                                                <a href="React-Js.php" className="">
                                                    React JS
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="Oracle-Forms-Development.php">
                                            Oracle Forms Development
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="D2K-forms.php" className="">
                                                    D2K Forms
                                                </a>
                                            </li>
                                            <li>
                                                <a href="D2K-Reports.php" className="">
                                                    D2K reports
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="Enterprise-Integration.php">
                                            Enterprise Integration
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="Salesforce.php" className="">
                                                    Salesforce
                                                </a>
                                            </li>
                                            <li>
                                                <a href="MS-CRM.php" className="">
                                                    MS CRM
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Sharepoint.php" className="">
                                                    Sharepoint
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Industry Served</a>
                                <ul>
                                    <li>
                                        <a href="Health-Care.php">Health Care</a>
                                    </li>
                                    <li>
                                        <a href="Insurance.php">Insurance</a>
                                    </li>
                                    <li>
                                        <a href="#">Energy Sector</a>
                                    </li>
                                    <li>
                                        <a href="Retail.php">Retail</a>
                                    </li>
                                    <li>
                                        <a href="Banking-Finance.php">Banking &amp; Finance</a>
                                    </li>
                                    <li>
                                        <a href="Education.php">Education</a>
                                    </li>
                                    <li>
                                        <a href="Media-Advertising.php">Media &amp; Advertising</a>
                                    </li>
                                    <li>
                                        <a href="Travel-Social.php">Travel &amp; Social</a>
                                    </li>
                                    <li>
                                        <a href="Logistics-Business.php">Logistics and Business</a>
                                    </li>
                                    <li>
                                        <a href="Manufacturing.php">Manufacturing</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="hire-app-developers.php">Hire app developers</a>
                            </li>
                            <li>
                                <a href="blog.php">Blogs</a>
                            </li>
                            <li>
                                <a href="contact-us.php">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="bottom-nav">
                            <li className="ree-hc">
                                <a href="tel:+1-718-395-2545" rel="noreferrer" target="_blank">
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 25.625 25.625"
                                        style={{ enableBackground: "new 0 0 25.625 25.625" }}
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799 c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04  C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995 L22.079,17.835z" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="ree-hc">
                                <a href="mailto:sales@targeticon.com" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        <path d="M0 0h24v24H0z" fill="none" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ree-hc">
                                <a href="skype:target.icon" rel="noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ree-hc">
                                <a
                                    href="https://wa.me/+917183952545"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        style={{ enableBackground: "new 0 0 512 512" }}
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456 C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504 c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184 c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392 c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352 c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024 c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568 c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
            </header >
        </div >
    );
};
export default Header;
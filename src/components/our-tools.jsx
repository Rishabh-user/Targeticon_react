import React from "react";
import { NavLink } from "react-router-dom";
import Apple from '../assets/images/apple.png';
import Android from '../assets/images/android.png';
import Flutter from '../assets/images/icons/flutterio-icon.svg';
import Java from '../assets/images/java-logo.png';
import ReactNative from '../assets/images/icons/physics.svg';
import Python from '../assets/images/python.png';
import HTML5 from '../assets/images/icons/html5.png';
import Swift from '../assets/images/icons/swift.svg';
import PWA from '../assets/images/icons/pwa.png';
import Angular from '../assets/images/icons/angular.svg';
import NpmLogo from '../assets/images/icons/Npm-logo.svg';
import Typescript from '../assets/images/icons/typescript.svg';
import VueJs from '../assets/images/icons/vuejs.svg';
import Bootstrap from '../assets/images/icons/bootstrap.svg';
import NodeJs from '../assets/images/icons/Node.js_logo.svg';
import MariaDb from '../assets/images/icons/MariaDB.svg';
import MongoDb from '../assets/images/icons/mongodb-icon.svg';
import Redis from '../assets/images/icons/redis-official.svg';
import Mysql from '../assets/images/icons/mysql.svg';
import PostgreSql from '../assets/images/icons/postgresql-icon.svg';
import oracle from '../assets/images/icons/oracle.svg';
import Sqlite from '../assets/images/icons/sqlite.svg';
import AWSRds from '../assets/images/icons/aws-rds.svg';
import MicrosoftAccess from '../assets/images/icons/microsoft-access.svg';
import Sopify from '../assets/images/icons/shopify.svg';
import Magento from '../assets/images/icons/magento.svg';
import Wordpress from '../assets/images/icons/wordpress.svg';
import Joomla from '../assets/images/icons/joomla.svg';
import Drupal from '../assets/images/icons/drupal.svg';
import Wix from '../assets/images/icons/wix.svg';
import Bigcommerce from '../assets/images/icons/bigcommerce-icon.svg';
import Woocommerce from '../assets/images/icons/woo.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OursTools = () => {

    return (
        <div>
            {/*start technologies tools*/}
            <section className="r-bg-x zup pt60 pb60">
                <div className="container">
                    <div className="row justify-content-center vcenter">
                        <div className="col-lg-8">
                            <div className="sec-heading text-center pera-block">
                                <h2>
                                    <span className="ree-text rt40">Technologies & Tools</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 mt60">
                            <div className="tab-17 tabs-layout">
                                <Tabs>
                                    <TabList>
                                        <Tab>Mobile</Tab>
                                        <Tab>Front End</Tab>
                                        <Tab>Database</Tab>
                                        <Tab>CMS</Tab>
                                    </TabList>
                                    {/* Mobile start */}
                                    <TabPanel>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Apple}
                                                                alt="Apple"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>iOS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Android}
                                                                alt="Android"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Android</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Flutter}
                                                                alt="Flutter"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Flutter</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Java}
                                                                alt="Java"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Java</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={ReactNative}
                                                                alt="React Native"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>React Native</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Python}
                                                                alt="python"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Python</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={HTML5}
                                                                alt="html-5"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Html-5</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Swift}
                                                                alt="Apswiftple"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Swift</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={PWA}
                                                                alt="pwa"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>PWA</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    {/* Frond End Start */}
                                    <TabPanel>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Angular}
                                                                alt="Angular.JS"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Angular.JS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={ReactNative}
                                                                alt="React JS"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>React JS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={NpmLogo}
                                                                alt="Npm-logo"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Npm </p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Typescript}
                                                                alt="typescript"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Typescript</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={HTML5}
                                                                alt="html-5"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>HTML5</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={VueJs}
                                                                alt="vuejs"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Vue JS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Bootstrap}
                                                                alt="bootstrap"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Bootstrap</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={NodeJs}
                                                                alt="Node.js_logo"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Node.JS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    {/* Database Start */}
                                    <TabPanel>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={MariaDb}
                                                                alt="MariaDB"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>MariaDB</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={MongoDb}
                                                                alt="mongodb-icon"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>MongoDB</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Redis}
                                                                alt="redis"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Redis</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Mysql}
                                                                alt="mysql-official"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>MySQL</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={PostgreSql}
                                                                alt="postgresql-icon"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>PostgreSQL</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={oracle}
                                                                alt="oracle-logo"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Oracle</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Sqlite}
                                                                alt="sqlite"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Sqlite</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={AWSRds}
                                                                alt="aws-rds"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>AWS-RDS</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={MicrosoftAccess}
                                                                alt="microsoft-access"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Microsoft-Access</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    {/* CMS Start */}
                                    <TabPanel>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Sopify}
                                                                alt="shopify"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Shopify</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Magento}
                                                                alt="magento"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Magento</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Wordpress}
                                                                alt="wordpress"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Wordpress</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Joomla}
                                                                alt="joomla"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Joomla</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Drupal}
                                                                alt="drupal"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Drupal</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Wix}
                                                                alt="wix"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Wix</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Bigcommerce}
                                                                alt="bigcommerce-icon"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Big Commerce</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                <div className="icon-with-title">
                                                    <NavLink to="preventDefault()">
                                                        <div className="iwt-icon">
                                                            <img
                                                                src={Woocommerce}
                                                                alt="WooCommerce"
                                                                className="img-fluid"
                                                                loading="lazy"
                                                                width={52}
                                                                height={52}
                                                            />
                                                        </div>
                                                        <div className="iwt-content">
                                                            <p>Woo Commerce</p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end technologies tools*/}
        </div>
    );
};
export default OursTools;
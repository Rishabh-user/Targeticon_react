import React from "react";
import Healthcare from '../assets/images/Industries/Health-Care.png'
import Insurance from '../assets/images/Industries/Insurance.png';
import EnergySector from '../assets/images/Industries/Energy-Sector.png';
import Retail from '../assets/images/Industries/Retail.png';
import BankingFinance from '../assets/images/Industries/Banking-Finance.png';
import Education from '../assets/images/Industries/education.png';
import MediaAdvertising from '../assets/images/Industries/Media-Advertising.png';
import TravelSocial from '../assets/images/Industries/Travel-Social.png';
import LogisticBusiness from '../assets/images/Industries/Logistics-Business.png';
import Manufacturing from '../assets/images/Industries/Manufacturing.png';
import { Link } from "react-router-dom";

const ServeIndustries = () => {
    return (
        <div>
            {/*Industries We Serve*/}
            <section className="r-bg-x  sec-pad">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-headings text-center">
                                <h2 className="mb15 Industries-heading">Industries We Serve</h2>
                                <p>
                                    Our design process follows a proven approach. We begin with a deep
                                    understanding of your needs.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30">
                        <div className="col-12 Industries-serve">
                            <ul className="Industries-ul">
                                <li>
                                    <Link to="/Health-Care" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={Healthcare}
                                                    className="img-fluid"
                                                    alt="Health-Care"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Health Care</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Insurance" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={Insurance}
                                                    className="img-fluid"
                                                    alt="Insurance"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Insurance</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={EnergySector}
                                                    className="img-fluid"
                                                    alt="Energy-Sector"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Energy Sector</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Retail" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={Retail}
                                                    className="img-fluid"
                                                    alt="Retail"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Retail</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Banking-Finance" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={BankingFinance}
                                                    className="img-fluid"
                                                    alt="Banking-Finance"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Banking &amp; Finance</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Education" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={Education}
                                                    className="img-fluid"
                                                    alt="education"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Education</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Media-Advertising" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={MediaAdvertising}
                                                    className="img-fluid"
                                                    alt="Media-Advertising"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Media &amp; Advertising</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Travel-Social" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={TravelSocial}
                                                    className="img-fluid"
                                                    alt="Travel-Social"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Travel &amp; Social</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Logistics-Business" className="">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={LogisticBusiness}
                                                    className="img-fluid"
                                                    alt="Logistics-Business"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Logistics and Business</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Manufacturing" className="align-items-center">
                                        <figure>
                                            <picture>
                                                <img
                                                    loading="lazy"
                                                    src={Manufacturing}
                                                    className="img-fluid"
                                                    alt="Manufacturing"
                                                    width={80}
                                                    height={80}
                                                />
                                            </picture>
                                        </figure>
                                        <figcaption>
                                            <h6>Manufacturing</h6>
                                        </figcaption>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*Industries We Serve end */}
        </div>
    );
};
export default ServeIndustries;
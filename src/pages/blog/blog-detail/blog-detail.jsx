import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetail = () => {
    return (
        <div>
           
                <div>
                    <div className="r-bg-a pt85 pb120">
                        <div className="container w-992">
                            <div className="row pt80">
                                <div className="col-lg-12">
                                    <div className="page-headings text-center">
                                        <ul className="breadcrus mb20">
                                            <li className="bread-non">
                                                <NavLink to="/blog">All Blog Posts</NavLink>
                                            </li>
                                            <li>&nbsp;/&nbsp;</li>
                                            <li className="bread-active">
                                                <NavLink to="#">Marketing</NavLink>
                                            </li>
                                        </ul>
                                        <h1>How to increase your ROI through scientific SEM?</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="r-bg-x pb120">
                        <div className="container w-992">
                            <div className="blog-details">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="sol-img mt60">
                                            <p>
                                                
                                            </p>

                                        </div>
                                        <div className="ree-blog-details">
                                            <div className="info-bar">
                                                <div className="info-b-left">
                                                    {" "}
                                                    <NavLink to="#">#Marketing</NavLink> <NavLink to="#">#Seo</NavLink>
                                                </div>
                                                <div className="info-b-right">
                                                    By <NavLink to="#">John Doe</NavLink> • <span>4 days ago</span>{" "}
                                                </div>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <h4>Website – The quickest way to take your business online</h4>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <ul className="ul-list mb30">
                                                <li>A Logical Roadmap</li>
                                                <li>Crucial Business Information</li>
                                                <li>Social Media Integration</li>
                                                <li>A Mobile-Ready Version</li>
                                                <li>Heading and tagline or USP</li>
                                                <li>Testimonials and social proof</li>
                                                <li>Optimise website speed and performance</li>
                                                <li>Contact Information and Clear Navigation</li>
                                                <li>Ability to easily update title tag and meta description</li>
                                            </ul>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book.
                                            </p>
                                            <div className="sol-img mt45 mb10">
                                                {" "}
                                                <img
                                                    src="images/blogs/blog-details-2.jpg"
                                                    alt="blog"
                                                    className="img-fluid"
                                                />{" "}
                                            </div>
                                            <p className="small text-center pb25">
                                                {" "}
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                            </p>
                                            <h4>Preparing for the perfect brand strategy.</h4>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <h6>1. The most downloaded graphic resource</h6>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book.
                                            </p>
                                            <h6>2. The most downloaded graphic resource</h6>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book.
                                            </p>
                                            <h6>3. The most downloaded graphic resource</h6>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book.
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry’s standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into
                                                electronic typesetting, remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="center-btn">
                                            {" "}
                                            <NavLink to="/blog" className="ree-btn  ree-btn-grdt2 mr20">
                                                Back to Blogs <i className="fas fa-arrow-left fa-btn" />
                                            </NavLink>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
        </div>
    );
};
export default BlogDetail;
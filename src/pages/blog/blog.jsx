import React from "react";
import Undermaintenance from '../../assets/images/Under-Maintenance.png'

const Blog = () => {
    return (
        <div>
           
            {/*blog*/}
            <div className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-5">
                            <div className="page-headings">
                                <h1 className="mb15">Our Blog Coming Soon</h1>
                                <p style={{ color: "#f00" }}>Under Maintenance</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-center mt30 mb30">
                                <picture>
                                    <img
                                        loading="lazy"
                                        src={Undermaintenance}
                                        className="img-fluid mb20"
                                        alt="Under-Maintenance"
                                        width={590}
                                        height={379}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="r-bg-a pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-5">
                            <div className="page-headings">
                                <span className="sub-heading mb15">
                                    <i className="fas fa-book mr5" /> Blogs &amp; News
                                </span>
                                <h1 className="mb15">
                                    Our <span className="ree-text rt40">Blog</span>
                                </h1>
                                <p>What would you love to learn how to do?</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ree-subs-from">
                                <h4>Subscribe to get the latest insights in your inbox.</h4>
                                <form className="mt20">
                                    <input
                                        type="text"
                                        name="subs"
                                        id="subs-email"
                                        placeholder="Your email please"
                                        className="subs-input"
                                    />
                                    <button className="ree-btn-grdt1 subs-btn">
                                        <i className="fas fa-arrow-right" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-block pt60 pb60">
                <div className="container">
                    <div className="blog-post">
                        <div className="row vcenter">
                            <div className="col-lg-4 col-sm-6">
                                <div className="ree-media-crd">
                                    <div className="rpl-img">
                                        <a href="#">
                                            <img
                                                src="images/blogs/blog-img-2.jpg"
                                                alt="blog"
                                                className="fill-fixed"
                                            />{" "}
                                        </a>{" "}
                                    </div>
                                    <div className="rpl-contt">
                                        <div className="blog-quick-inf mb20 mt30">
                                            <span>
                                                <i className="far fa-calendar-alt" /> 12 March 21
                                            </span>{" "}
                                            <span>
                                                <i className="fas fa-clock" /> 5 Min Read
                                            </span>{" "}
                                        </div>
                                        <h4>
                                            <a href="#">
                                                Finding the best social media platform for your audience and
                                                business
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ree-media-crd">
                                    <div className="rpl-img">
                                        <a href="#">
                                            <img
                                                src="images/blogs/blog-img-3.jpg"
                                                alt="blog"
                                                className="fill-fixed"
                                            />{" "}
                                        </a>{" "}
                                    </div>
                                    <div className="rpl-contt">
                                        <div className="blog-quick-inf mb20 mt30">
                                            <span>
                                                <i className="far fa-calendar-alt" /> 12 March 21
                                            </span>{" "}
                                            <span>
                                                <i className="fas fa-clock" /> 5 Min Read
                                            </span>{" "}
                                        </div>
                                        <h4>
                                            <a href="#">
                                                Finding the best social media platform for your audience and
                                                business
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            {/*blog end*/}
           
        </div>
    );
};
export default Blog;
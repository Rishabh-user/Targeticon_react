import React, { createContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { apiEndpoint1 } from "../../../js/api";

const BlogDetail = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${apiEndpoint1}/read`);
                const data = await response.json();
                console.log(data.items);
                setUsers(data.items);



            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <div>
            {users.map(blog => (
                <div key={blog.id}>
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
                                                {blog.short_desc}
                                                {console.log(blog.shortDescription)};
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
                                            <div className="sol-img mt45 mb10">
                                                {" "}
                                                <img
                                                    src={blog.blog_image}
                                                    alt="blog"
                                                    className="img-fluid"
                                                />{" "}
                                            </div>
                                            <p className="small text-center pb25">
                                                {blog.long_desc}
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
            ))}



        </div>
    );
};
export default BlogDetail;
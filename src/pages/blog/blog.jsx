import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiEndpoint } from '../../js/api';
import Undermaintenance from '../../assets/images/Under-Maintenance.png'

const Blog = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/blog/get-all-blogs/`);
                const data = await response.json();

                // Initialize viewCount property for each blog post
                const blogsWithViews = data.map(blog => ({ ...blog, viewCount: 0 }));
                setUsers(blogsWithViews);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handlePostClick = (postId) => {
        // Manually increment the view count on the frontend
        setUsers(prevUsers =>
            prevUsers.map(blog =>
                blog.id === postId ? { ...blog, viewCount: blog.viewCount + 1 } : blog
            )
        );
    };
    const calculateReadingTime = (longDescription) => {
        const description = longDescription || '';

        // Count the number of words in the long description
        const words = description.trim().split(/\s+/).length;

        // Calculate the reading time in seconds based on average reading speed (150 words per minute)
        const readingSpeed = 150; // Words per minute
        const readingTimeInSeconds = words / readingSpeed * 60;

        // Check if the reading time is less than 1 minute
        if (readingTimeInSeconds < 60) {
            return `${Math.round(readingTimeInSeconds)} seconds`;
        }

        // Calculate the reading time in minutes and seconds
        const minutes = Math.floor(readingTimeInSeconds / 60);
        const seconds = Math.round(readingTimeInSeconds % 60);

        // Return the reading time in the format "X minutes Y seconds"
        return `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${seconds > 1 ? 's' : ''}`;
    };


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
                            {users.map(blog => (
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ree-media-crd" key={blog.id} onClick={() => handlePostClick(blog.id)}>

                                        {/* {console.log(users)}; */}

                                        <div className="ree-media-crd blog" >
                                            <div className="rpl-img">
                                                <NavLink to="/blog-details">
                                                    <img src={blog.blogImageUrl} alt="loading" className="fill-fixed" />
                                                </NavLink>

                                            </div>
                                            <div className="display">
                                                <div className="time-zone">
                                                    <spam className="category"> {blog.category.length > 0 ? blog.category[0].title : 'N/A'}</spam>
                                                    <span className="time">
                                                        <p>
                                                            <i className="fas fa-book reading icon" />
                                                            {calculateReadingTime(blog.longDescription)}
                                                        </p>
                                                    </span>
                                                </div>
                                                <div className="short-description">
                                                    <h4>
                                                        {blog.title}
                                                    </h4>
                                                    <p>
                                                        <NavLink to="/blog-details">{blog.shortDescription}</NavLink>
                                                    </p>
                                                </div>
                                                <div className="author">
                                                    {/* <span>
                                                        -By
                                                        <strong>
                                                            <NavLink to=""> Targeticon</NavLink>
                                                        </strong>
                                                    </span> */}
                                                    <p>
                                                        <span>By</span>
                                                        <strong><NavLink to="/"> Targeticon</NavLink></strong>
                                                    </p>
                                                </div>
                                                <div className="rpl-contt calc-time ">
                                                    <div className="blog-quick-inf mb20 mt30">
                                                        <span>

                                                            <i className="far fa-calendar-alt icon" />
                                                            {new Intl.DateTimeFormat('en-IN', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            }).format(new Date(blog.timestamp))}

                                                        </span>
                                                        <span>
                                                            <i className="fas fa-clock icon" />
                                                            {new Date(blog.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            {console.log('Timestamp:', blog.timestamp)} {/* Assuming blog.readTime exists */}
                                                            <i className="fas fa-view" />
                                                            <p>View: {blog.viewCount}</p>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            ))}
                            {/* <div className="col-lg-4 col-sm-6">
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
                            </div> */}


                        </div>
                    </div>
                </div>
            </div>
            {/*blog end*/}
        </div>
    );
};
export default Blog;
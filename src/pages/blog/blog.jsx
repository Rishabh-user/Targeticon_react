import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { apiEndpoint1 } from '../../js/api';
import { apiCategory } from '../../js/api'
import Undermaintenance from '../../assets/images/Under-Maintenance.png'
import Loader from "../../components/loader";

const Blog = () => {

    const [users, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Fetch blog and category data from APIs
        axios.get(`${apiEndpoint1}/read`).then(response => {
            setBlogs(response.data.items);
            setLoading(false);
        });

        axios.get(`${apiCategory}/read`).then(response => {
            setCategories(response.data.skills);
            setLoading(false);
        });
    }, []);


    const calculateReadingTime = (long_desc) => {
        const description = long_desc || '';

        // Count the number of words in the long description
        const words = description.trim().split(/\s+/).length;

        // Calculate the reading time in seconds based on average reading speed (150 words per minute)
        const readingSpeed = 150; // Words per minute
        const readingTimeInSeconds = words / readingSpeed * 60;

        if (readingTimeInSeconds < 1) {
            return 'Less than a minute';
        }

        // Calculate the reading time in minutes, hours, and seconds
        const hours = Math.floor(readingTimeInSeconds / 3600);
        const minutes = Math.floor((readingTimeInSeconds % 3600) / 60);
        const seconds = Math.round(readingTimeInSeconds % 60);

        let result = '';

        if (hours > 0) {
            result += `${hours} hrs${hours > 1 ? 's' : ''}`;
        }

        if (minutes > 0) {
            if (result !== '') {
                result += ' ';
            }
            result += `${minutes} min${minutes > 1 ? 's' : ''}`;
        }

        if (seconds > 0 && result === '') {
            result += `${seconds} sec${seconds > 1 ? 's' : ''}`;
        }

        return result;
    };
    const limitParagraph = (text, limit) => {
        const paragraphs = text.split('</p>');
        const firstParagraph = paragraphs[0];
        if (firstParagraph && firstParagraph.length > limit) {
            return `${firstParagraph.substr(0, limit)}...`;
        }
        return firstParagraph;
    };
   
    return (
        <div>
            {/*blog*/}
            <div className=" pt60 pb60 blog-banner">
                <div className="container">
                    <div className="row vcenter justify-content-center">
                        <div className="col-lg-12">
                            <div className="page-headings">
                                {/* <h1 className="mb15 text-white text-center">Our Blogs</h1> */}
                            </div >
                        </div >                        
                    </div >
                </div >
            </div >
            {/* {console.log(users)}; */}
            <div className="blog-block pt60 pb60">
                <div className="container">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="blog-post">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row">                               
                                        {users.map(blog => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={blog.id}>
                                            <div className="ree-media-crd">
                                                <div className="rpl-img">
                                                    <NavLink to={`/blog/${blog.id}/${blog.blog_title ? encodeURIComponent(blog.blog_title.replace(/[^a-zA-Z0-9]+/g, '-')) : ''}`}>
                                                        <img src={blog.blog_image} alt="loading" className="fill-fixed" />
                                                    </NavLink>
                                                </div>
                                                <div className="display">
                                                    <div className="rpl-conttt post-date">
                                                        <div className="blog-quick-inf mb-3 calc-time">
                                                            <span className="calender">
                                                                <i className="far fa-calendar-alt icon" /> 
                                                                
                                                                    {new Intl.DateTimeFormat('en-IN', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                }).format(new Date(blog.timestamp))}
                                                               
                                                                <span className="calenderlink">
                                                                    <NavLink to="/" className="company"> / By Targeticon</NavLink>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="time-zone">
                                                        <span className="category" style={{ color: "#83858f;" }}>

                                                            {blog.categories.map((blogCategory, index) => {
                                                                const matchingCategory = categories.find(
                                                                    category => category.id === blogCategory.id
                                                                );

                                                                if (matchingCategory) {
                                                                    return (
                                                                        <span key={matchingCategory.id} >
                                                                            {matchingCategory.category_title}
                                                                            {index < blog.categories.length - 1 ? ',' : ''}
                                                                        </span>
                                                                    );
                                                                }

                                                                return null;
                                                            })}
                                                        </span>
                                                        <span className="reading-time">                                                            
                                                            <i className="fas fa-book reading icon readbook" />
                                                            {calculateReadingTime(blog.long_desc)}                                                            
                                                        </span>
                                                    </div>
                                                    <div className="heading-description">
                                                        <h4>
                                                            <NavLink to={`/blog/${blog.id}/${blog.blog_title ? encodeURIComponent(blog.blog_title.replace(/[^a-zA-Z0-9]+/g, '-')) : ''}`}>
                                                                {blog.blog_title}
                                                            </NavLink>
                                                        </h4>
                                                        <p className="short-description">
                                                            {typeof blog.short_desc === 'string' ? (
                                                                <p dangerouslySetInnerHTML={{ __html: limitParagraph(blog.short_desc, 120) }} />
                                                            ) : null}
                                                        </p>
                                                    </div>
                                                    <div className="read-button">
                                                        <NavLink to={`/blog/${blog.id}/${blog.blog_title ? encodeURIComponent(blog.blog_title.replace(/[^a-zA-Z0-9]+/g, '-')) : ''}`} className="details">
                                                            Read More{" "}
                                                        </NavLink>
                                                        <spam>
                                                            <i className="fas fa-eye icon" />
                                                            {blog.views}
                                                        </spam>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div >
                    </div >
                )}
                </div >
            </div >
            {/*blog end*/}
        </div >
    );
};
export default Blog;
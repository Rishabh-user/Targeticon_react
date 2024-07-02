import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import axios from 'axios';
import {apiEndpoint1} from "../../../js/api";
import {apiCategory} from "../../../js/api";

const BlogDetail = () => {
    const [blog, setBlog] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState([null]);
    //const [people, setPeople] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchBlogAndCategory = async () => {
            try {
                if (id) {
                    const blogResponse = await axios.get(`${apiEndpoint1}/read/${id}`);
                    const selectedBlog = blogResponse.data.items[0];
                    setBlog([selectedBlog]);
                    setSelectedCategoryId(selectedBlog.categories); // Make sure this matches the structure of selectedBlog.categories
                }
            } catch (error) {
                        console.error('Error fetching blog:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const categoryResponse = await axios.get(`${apiCategory}/read`);
                    setCategories(categoryResponse.data.skills);
            } catch (error) {
                        console.error('Error fetching categories:', error);
            }
        };
        fetchBlogAndCategory();
        fetchCategories();
    }, [id]);

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
            result += `${hours} hour${hours > 1 ? 's' : ''}`;
        }

        if (minutes > 0) {
            if (result !== '') {
                result += ' ';
            }
            result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
        }

        if (seconds > 0 && result === '') {
            result += `${seconds} second${seconds > 1 ? 's' : ''}`;
        }
            return result;
    };

    return (
    <div> 
        {blog.map(blogs => (
            <div key={blogs.id}>
                <div className="pt120 pb120 blog-details-banner">
                    <div className="container w-992">
                        <div className="row pt80">
                            <div className="col-lg-12">
                                <div className="page-headings text-center">
                                    <ul className="breadcrus mb20">
                                        <li className="bread-non">
                                            <NavLink to="/blog">Blog </NavLink>
                                        </li>
                                        <li>&nbsp;/&nbsp;</li>
                                        <li className="bread-active">
                                            {blogs.categories.map((blogCategory, index) => {
                                                const matchingCategory = categories.find(
                                                    category => category.id === blogCategory.id
                                                );
                                                if (matchingCategory) {
                                                    return (
                                                        <span key={matchingCategory.id}>
                                                            <NavLink
                                                                to={`/blog/category/${matchingCategory.id}/${encodeURIComponent(
                                                                    matchingCategory.category_title.replace(/[^a-zA-Z0-9]+/g, '-')
                                                                )}`}
                                                            >
                                                                {matchingCategory.category_title}
                                                            </NavLink>
                                                            {index < blogs.categories.length - 1 ? ',' : ''}
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </li>
                                    </ul>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
                <div className="r-bg-x pb120">
                    <div className="container w-992">
                        <div className="blog-details">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="sol-img mt60">
                                        <p>
                                            {blogs.short_desc}
                                            {console.log(blogs.shortDescription)};
                                        </p >
                                    </div >
                                    <div className="ree-blog-details">
                                        <div className="info-bar">
                                            <div className="info-b-left">
                                                {" "}
                                                By <NavLink to="/">Targeticon</NavLink> <span>
                                                <i className="far fa-calendar-alt icon addicon readbook" />
                                                {new Intl.DateTimeFormat('en-IN', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                                }).format(new Date(blogs.timestamp))}</span>{" "}
                                            </div>
                                            <div className="info-b-right">
                                                <i className="fas fa-book reading icon readbook" />
                                                {calculateReadingTime(blogs.long_desc)}
                                                <i className="fas fa-eye icon addicon readbook" />
                                                {blogs.views}
                                                {/* <NavLink to="#">#Marketing</NavLink> <NavLink to="#">#Seo</NavLink> */}
                                            </div>
                                        </div >
                                        <div className="sol-img mt45 mb45">
                                            {" "}
                                            <img
                                                src={blogs.blog_image}
                                                alt="blog"     
                                                className="img-fluid" 
                                            />{" "}
                                        </div>
                                        <p className="small pb25">
                                            {/* {blogs.long_desc} */}
                                            {typeof blogs.long_desc === 'string' ? (
                                                <p dangerouslySetInnerHTML={{ __html: blogs.long_desc }} className="longdesc" />
                                            ) : null}

                                        </p>
                                    </div >
                                    <div className="center-btn">
                                        {" "}
                                        <NavLink to="/blog" className="ree-btn  ree-btn-grdt2 mr20">
                                        Back to Blogs <i className="fas fa-arrow-left fa-btn" />
                                        </NavLink>{" "}
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        ))}
    </div >
    );
};
export default BlogDetail;
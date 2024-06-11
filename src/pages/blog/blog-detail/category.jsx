import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

// import { apiEndpoint1 } from "../../../js/api";
import { apiCategory } from "../../../js/api";
import Undermaintenance from '../../../assets/images/Under-Maintenance.png';


const Category = () => {

    const [categoryItems, setCategoryItems] = useState([]);
    const { categoryId, categoryTitle } = useParams();

    useEffect(() => {
        // Fetch category items API
        fetch(`${apiCategory}/read`)
            .then(response => response.json())
            .then(data => setCategoryItems(data.skills))
            .catch(error => console.error('Error fetching category items:', error));
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
            <div className="r-bg-we pt60 pb60">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-lg-5">
                            <div className="page-headings">
                                <h1 className="mb15">{decodeURIComponent(categoryTitle.replace(/-/g, ' '))}</h1>
                                <p style={{ color: "#f00" }}></p>
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
            <div className="blog-block pt60 pb60">
                <div className="container">
                    <div className="blog-post">
                        <div className="row vcenter">
                            {categoryItems
                                .filter(category => category.id === parseInt(categoryId))
                                .map(category => (
                                    category.items.map(blogItem => (
                                        <div className="col-lg-4 col-sm-6" key={blogItem.id}>
                                            <div className="ree-media-crd"  >
                                                <div className="ree-media-crd blog" >
                                                    <div className="rpl-img">
                                                        <NavLink to={`/blog/${blogItem.id}/${encodeURIComponent(blogItem.blog_title ? blogItem.blog_title.replace(/[^a-zA-Z0-9]+/g, '-') : '')}`}>
                                                            <img src={blogItem.blog_image} alt="loading" className="fill-fixed" />
                                                        </NavLink>

                                                    </div>
                                                    <div className="display">
                                                        <div className="rpl-conttt ">
                                                            <div className="blog-quick-inf mb-3 calc-time">
                                                                <span className="calender">

                                                                    <i className="far fa-calendar-alt icon" />
                                                                    {new Intl.DateTimeFormat('en-IN', {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric'
                                                                    }).format(new Date(blogItem.timestamp))}
                                                                    <span className="calenderlink">
                                                                        <NavLink to="/" className="company"> / By Targeticon</NavLink>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="time-zone">
                                                            <span className="category">{blogItem.blog_title} </span>
                                                            <span className="time">
                                                                <p>
                                                                    <i className="fas fa-book reading icon" />
                                                                    {calculateReadingTime(blogItem.long_desc)}
                                                                </p>
                                                            </span>
                                                        </div>

                                                        <div className="short-description">
                                                            <h4>
                                                                { }
                                                            </h4>
                                                            <p>
                                                                <NavLink to="">
                                                                    {typeof blogItem.short_desc === 'string' ? (
                                                                        <p dangerouslySetInnerHTML={{ __html: limitParagraph(blogItem.short_desc, 120) }} />
                                                                    ) : null}
                                                                </NavLink>

                                                            </p>
                                                        </div>

                                                        <div className="author">
                                                            {/* <span>
                                                        -By
                                                        <strong>
                                                            <NavLink to=""> Targeticon</NavLink>
                                                        </strong>
                                                    </span> */}

                                                        </div>
                                                        <div className="rpl-conttt ">
                                                            <div className="blog-quick-inf mb20 mt30">

                                                                <span className="timedate">
                                                                    <i className="fas fa-clock icon" />
                                                                    {new Date(blogItem.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                    {console.log('Timestamp:', blogItem.timestamp)}
                                                                    <i className="fas fa-eye icon addicon" />
                                                                    {blogItem.views}

                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;
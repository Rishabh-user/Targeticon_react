import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { apiEndpoint1 } from "../../../js/api";
import { Table, Container, Button } from 'react-bootstrap';
import { apiEndpoint } from "../../../js/api";

const BlogList = ({ initialData, onUpdate }) => {
    const [blogs, setBlogs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch blog data from your API when the component mounts
        axios.get(`${apiEndpoint1}/read`).then(response => {
            setBlogs(response.data.items);
        });
    }, []);

    const handleDelete = async (blogId) => {
        try {
            // Send a POST request to your API for blog post deletion
            const response = await axios.post(`${apiEndpoint}/items/delete`, {
                id: blogId // Send the ID to be deleted in the request body
            });

            if (response.status === 200) {
                // Deletion was successful
                // Remove the deleted blog post from the local state
                const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
                setBlogs(updatedBlogs);

                alert("Blog post deleted successfully.");
            } else {
                // Handle error cases
                alert("Failed to delete blog post.");
            }
        } catch (error) {
            console.error("Error deleting blog post:", error);
            alert("An error occurred while deleting the blog post.");
        }
    };

    return (
        <div>
            <Container>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Blog Title</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.blog_title}</td>
                                <td>{new Intl.DateTimeFormat('en-IN', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric'
                                }).format(new Date(blog.timestamp))}</td>
                                <td colSpan="2">
                                    <Button variant="outline-dark" className="me-2" onClick={() => handleDelete(blog.id)}>Delete</Button>
                                    <Button variant="outline-dark">
                                        <NavLink to={`/blog/blogform/${blog.id}`} className="edit">
                                            Edit
                                        </NavLink>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default BlogList;

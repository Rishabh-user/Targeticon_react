import React, { useState, useEffect } from "react";
import { Button, Form, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiEndpoint1 } from "../../../js/api";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const BlogForm = () => {
    const { id } = useParams();

    // Set the default value for categories here
    const defaultFormData = {
        blog_title: "",
        short_desc: "",
        long_desc: "",
        blog_image: null
    };

    const [formData, setFormData] = useState(defaultFormData);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (id) {
                    const blogResponse = await axios.get(`${apiEndpoint1}/read/${id}`);
                    const selectedBlog = blogResponse.data.items[0];
                    setFormData({ ...selectedBlog }); // Set the form data with fetched data
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setFormData({ ...formData, blog_image: selectedImage });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert the image to base64
            if (formData.blog_image) {
                const base64Image = await convertImageToBase64(formData.blog_image);

                // Include other form fields in your request payload
                const requestData = {
                    id: formData.id,
                    short_desc: formData.short_desc,
                    long_desc: formData.long_desc,
                    blog_title: formData.blog_title,
                    blog_image: base64Image,
                };

                let res;
                if (id) {
                    // If ID exists, update the existing blog post
                    res = await axios.post(`${apiEndpoint1}/update`, JSON.stringify(requestData), {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        //body: JSON.stringify(formData)

                    });
                } else {
                    // If no ID, create a new blog post
                    res = await axios.post(`${apiEndpoint1}/create`, requestData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                }

                if (res.status === 200) {
                    console.log(res.data.message);
                    if (id) {
                        window.alert("Blog updated successfully!");
                    }
                } else if (res.status === 201) { // Check if status is 201 for successful creation
                    console.log(res.data.message);
                    if (!id) {
                        window.alert("Blog created successfully!");
                    }
                } else {
                    console.log(res.data.message);
                }

            }
        } catch (err) {
            console.error(err);
        }
    };

    const convertImageToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Form.Group controlId="formGroupTitle" className="mb-3">
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="blog_title"
                            placeholder="Enter Blog Title"
                            value={formData.blog_title}
                            className="rounded-pill"
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupShortDesc" className="mb-3">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="short_desc"
                            placeholder="Enter Short Description"
                            value={formData.short_desc}
                            rows={4}
                            className="rounded"
                            onChange={handleInputChange}

                        />
                    </Form.Group>

                    <Form.Group controlId="formGroupLongDesc" className="mb-3">
                        <Form.Label>Long Description</Form.Label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={formData.long_desc}
                            onChange={(event, editor) => {
                                const newData = editor.getData();
                                setFormData(prevData => ({ ...prevData, long_desc: newData }));
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="blog_image"
                            onChange={handleImageChange} // Use handleInputChange for file input
                            accept="image/*" // Allow only image files
                        />
                        {formData.blog_image && formData.blog_image.name && (
                            <p>Selected file: {formData.blog_image.name}</p>
                        )}
                    </Form.Group>

                    <Button variant="primary" type="submit" className="rounded-pill">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default BlogForm;
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const CreateBlog = () => {

    const [blog, setBlog] = useState({
        content: "",
        user: "mahmoud",
        date: new Date().toLocaleDateString(),
        title: ""
    });
    
    const onChangeHandler = (e) => {
        setBlog((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmitHandler = (e) => {
        console.log(blog);
        e.preventDefault();
    }
    return (
        <Col className='border' style={{
            padding: '15px',
            marginRight: "50px",
            height: '700px',
            maxWidth: "80%"
        }}>
            <Row style={{ height: "20px" }}>
                <strong>
                    Post
                </strong>
            </Row>

            <hr />

            <Row>
                <Form.Group className="mb-3" controlId="Content">
                    <Form.Label style={{ marginLeft: 8 }}>Title</Form.Label>
                    <Form.Control
                        style={{ height: "50px", width: "80%", marginLeft: 8 }}
                        type="text"
                        as='input'
                        placeholder="Write here"
                        name="title"
                        onChange={onChangeHandler}

                    />

                </Form.Group>
            </Row>

            <hr />

            <Row>

                <Form.Group className="mb-3" controlId="Content">
                    <Form.Label style={{ marginLeft: 8 }}>Content</Form.Label>
                    <Form.Control
                        style={{ height: "350px", width: "80%", marginLeft: 8 }}
                        type="text"
                        as='textarea'
                        placeholder="Write here"
                        name="content"
                        onChange={onChangeHandler}

                    />
                </Form.Group>
            </Row>

            <hr />

            <Row className="d-flex flex-row-reverse justify-content-between" style={{ paddingRight: "10px", height: "40px" }}>
                <Button onClick={onSubmitHandler} style={{ width: "150px" }} variant="outline-secondary">Post now!!</Button>
            </Row>
        </Col>
    )
}

export default CreateBlog
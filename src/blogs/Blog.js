import React from 'react'
import CreateGroupForm from './CreateBlogForm'
import BlogItem from './BlogItem';
import { Col, Container, Row } from 'react-bootstrap';
const Blog = () => {

    const blogs = [1, 2, 3, 4, 5];
    return (
        <Container>
            <Row>
                <Col md='1'>
                <CreateGroupForm />    
                </Col>
                <Col>
                {blogs.map((b) => <BlogItem />)}
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default Blog
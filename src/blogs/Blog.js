import React from 'react'
import BlogItem from './BlogItem';
import { Col, Container, Row } from 'react-bootstrap';
import CreateBlog from './CreateBlog';
const Blog = () => {

    const blogs = [
        {
            user: "Mahmoud",
            title: "AI technologies ",
            date: "AUG 22, 2022",
            votes: 8,
            content: ` AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

            Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.
  
            Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.
  
            Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.
  
            Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.`
        },
        {
            user: "Mahmoud",
            title: "AI technologies ",
            date: "AUG 22, 2022",
            votes: 21,
            content: ` AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

            Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.
  
            Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.
  
            Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.
  
            Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.`
        },
        {
            user: "Mahmoud",
            title: "AI technologies ",
            date: "AUG 22, 2022",
            votes: -2,
            content: ` AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

            Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.
  
            Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.
  
            Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.
  
            Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.`
        },
        {
            user: "Mahmoud",
            title: "AI technologies ",
            date: "AUG 22, 2022",
            votes: 5,
            content: ` AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

            Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.
  
            Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.
  
            Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.
  
            Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.`
        },
        {
            user: "Mahmoud",
            title: "AI technologies ",
            date: "AUG 22, 2022",
            votes: 0,
            content: ` AI (Artificial Intelligence) technologies are computer programs and algorithms that simulate human intelligence and can perform tasks that typically require human cognition, such as learning, problem-solving, perception, and decision-making. Some of the popular AI technologies are:

            Machine Learning: It is a subset of AI that uses statistical methods and algorithms to allow computer systems to automatically improve their performance with experience.
  
            Natural Language Processing (NLP): It involves processing and analyzing human language, allowing computers to understand, interpret, and generate natural language.
  
            Computer Vision: It uses algorithms to analyze and understand digital images and videos, allowing machines to see and recognize objects, patterns, and visual cues.
  
            Deep Learning: It is a type of machine learning that uses neural networks to learn and improve from data, allowing computers to recognize complex patterns and make decisions based on them.`
        }
    ];
    return (
        <Container>
            <Col>
                <Row md="1" >
                   <a href='http://localhost:3000/blog'>post</a>
                </Row>

                <Row >
                    {blogs.map((b) => <BlogItem blog={b} />)}
                </Row>
            </Col>


        </Container>
    )
}

export default Blog
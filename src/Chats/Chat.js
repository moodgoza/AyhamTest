import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { MDBFormInline } from "mdbreact";
import MasChat from "./MasChat";
import RecChat from "./RecChat";
import { ChatBubble, ChatBubbleOutlineOutlined, ChatBubbleSharp, ChatTwoTone } from "@mui/icons-material";
import ChatCard from "./ChatCard";
import { Avatar, Chip } from "@mui/material";
import Bar from "./Bar";



export default function Chat() {

  const [messages, setMessages] = useState([
    {
      date: "21/11/2005",
      content: "Hello My sir abo ghozah",
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      type: "1"
    },
    {
      date: "21/11/2005",
      content: "HI, whats your name boy",
      user: "Mahmoud",
      imgSrc: "/image/mahmoud_abu_ghozah.jpg",
      type: "2"
    },
    {
      date: "21/11/2005",
      content: "My name is Ayham full stack al fataaaaaaaaaaaaaaaak",
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      type: "1"
    },
    {
      date: "21/11/2005",
      content: "My name is Ayham full stack al fataaaaaaaaaaaaaaaak",
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      type: "1"
    },
    {
      date: "21/11/2005",
      content: "My name is Ayham full stack al fataaaaaaaaaaaaaaaak",
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      type: "1"
    },
    {
      date: "21/11/2005",
      content: "My name is aaaaaaaaaaaaaaaak",
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      type: "1"
    }]);

  const chats = [
    {
      user: "Ayham",
      imgSrc: "/image/ayham_abu_khamish.jpg",
      messages: messages
    },
    {
      user: "Amr",
      imgSrc: "/image/amr.jpg",
      messages: messages
    },
    {
      user: "Boooz",
      imgSrc: "/image/booz.jpg",
      messages: messages
    },
    {
      user: "saloom",
      imgSrc: "/image/saloom.jpg",
      messages: messages
    },
    {
      user: "hisham",
      imgSrc: "/image/hisham.jpg",
      messages: messages
    },
    {
      user: "laith",
      imgSrc: "/image/laith.jpg",
      messages: messages
    },
    {
      user: "yazan",
      imgSrc: "/image/yazan.jpg",
      messages: messages
    },
  ];

  const [message, setMessage] = useState('');
  const onChangeHandler = (e) => {
    setMessage(e.target.value)
  }

  const onClickHandler = (e) => {

    const d = []

    for (let i = 0; i < messages.length; i++) {
      d.push(messages[i])
    }
    d.push({
      date: "21/11/2005",
      content: message,
      user: "Mahmoud",
      imgSrc: "/image/mahmoud_abu_ghozah.jpg",
      type: "2"
    })
    setMessages(d);
    console.log(messages);
  }
  
  return (
    <MDBContainer  fluid className="py-3">
      <MDBRow>
        <MDBCol md="7" lg="6" xl="5" className="mb-4 mb-md-0">
         
          <MDBCard style={{
            border: '2px solid #000',
            padding: '15px',
            marginRight: "50px",
            overflowY: 'auto',
            height: '698px'
          }}>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
              <Bar/>
                {chats.map((c) => <ChatCard chat={c} />)}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol style={{ border: '2px solid #000' }} md="5" lg="6" xl="7">
          <MDBTypography listUnStyled>
            <div style={{
              border: '2px solid #000',
              padding: '15px',
              overflowY: 'auto',
              height: '500px',
              margin: "15px"
            }}>
              {messages.map(m => (m.type === "1" ? <MasChat message={m} /> : <RecChat message={m} />))}
            </div>
            <li className="bg-white mb-3">
              <MDBTextArea value={message} onChange={onChangeHandler} id="textAreaExample" rows={4} />
            </li>
            <MDBBtn onClick={onClickHandler} color="info" rounded className="float-end">
              Send
            </MDBBtn>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
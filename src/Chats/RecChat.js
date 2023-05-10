import React from 'react'
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
import { calcTimeAgo } from '../accumulates';
const MasChat = ({ message }) => {
  return (
    <li className="d-flex flex-row-reverse mb-4">
     
     <img
        src={message.imgSrc}
        alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
        width="60"
        height="60"
      />
      <MDBCard className='me-3'>
        <MDBCardHeader className="d-flex justify-content-between p-3">
          <p className="fw-bold mb-0">{message.user}</p>
          <p className="text-muted small mb-0">
            <MDBIcon far icon="clock" /> 
          </p>
        </MDBCardHeader>
        <MDBCardBody>
          <p className="mb-0" >
            {message.content}
          </p>
        </MDBCardBody>
      </MDBCard>
      
    </li>
  )
}

export default MasChat
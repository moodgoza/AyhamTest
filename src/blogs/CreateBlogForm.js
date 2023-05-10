import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const CreateGroupForm = (props) => {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal((prevState) => !prevState);
  
  const [formData, setFormData] = useState({
    name: "",
  });
 
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };
 
  return (
    <>
    
      <Button
        onClick={toggleShow}
        style={{position: 'fixed'}}
      >
        +Blog
      </Button>
      <Form
        onSubmit={onSubmit}
        style={{
          marginBottom: "20px",
        }}
      >
        <MDBModal
          show={basicModal}
          setShow={setBasicModal}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Post</MDBModalTitle>
                <Button
                  type="button"
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></Button>
              </MDBModalHeader>

              <MDBModalBody>
                <Form.Group className="mb-3" controlId="Content">
                  <Form.Label style={{ marginLeft: 8 }}>Content</Form.Label>
                  <Form.Control
                    style={{height:500 , width: 400, marginLeft: 8 }}
                    type="text"
                    as='textarea'
                    placeholder="Write here"
                    name="name"
                    onChange={onChange}
                    value={formData.name}
                  />
                </Form.Group>
              </MDBModalBody>

              <MDBModalFooter>
                <Button
                  type="button"
                  color="secondary"
                  onClick={toggleShow}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: 150,
                    marginLeft: 3,
                  }}
                >
                  post now
                </Button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </Form>
    </>
  );
};

export default CreateGroupForm;
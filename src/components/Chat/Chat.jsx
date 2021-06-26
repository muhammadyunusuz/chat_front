import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../Login/Login";

import { io } from "socket.io-client";

import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Input,
  Form,
  Button,
} from "reactstrap";

export default function Chat() {
  const [token, setToken] = useAuth();

  if (!token) {
    return <Login />;
  }

  let socket = io("http://192.168.1.218:8080");

  return (
    <Container className="text-center my-3">
      <h1>Hello chat</h1>
      <Row>
        <Col md={3}>
          <h2>Members</h2>
          <ListGroup>
            <ListGroupItem>Muhammad</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Form>
            <Input type="textarea" name="text" id="exampleText" />
            <Button className="w-100 mt-2 mb-4">Send</Button>
          </Form>
          <ListGroup>
            <ListGroupItem>
              <Card className="text-start">
                <Row>
                  <Col md={3}>
                    <CardHeader>
                      <CardTitle>Muhammad</CardTitle>
                    </CardHeader>
                  </Col>
                  <Col md={9}>
                    <CardBody>
                      <CardText>Salom dunyo</CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

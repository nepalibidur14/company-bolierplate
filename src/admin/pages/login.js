import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import axios from "axios";
import { server } from "../config/server";
import metaRoutes from "../metaRoutes";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const onHandleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };
    await server
      .post("/user/login", body)
      .then((res) => {
        if (res.data.success) {
          props.history.push(metaRoutes.product);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        window.alert(err.response.data);
      });
  };
  return (
    <Container>
      <Card className="shadow w-50 m-5">
        <CardHeader className="h4">Login here</CardHeader>
        <Form onSubmit={handleSubmit}>
          <CardBody>
            <FormGroup className="m-2">
              <Label className="h5">Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="m-2">
              <Label className="h5">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={onHandleChange}
              />
            </FormGroup>
          </CardBody>
          <CardFooter className="d-flex justify-content-end">
            <Button color="info" className="text-white">
              Submit
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;

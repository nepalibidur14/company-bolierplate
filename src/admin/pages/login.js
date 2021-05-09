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
    await axios
      .post("http://localhost:8000/api/v1/user/login", body)
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
      <Card className="shadow w-50 ">
        <CardHeader>Login here</CardHeader>
        <Form onSubmit={handleSubmit}>
          <CardBody>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={onHandleChange}
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;

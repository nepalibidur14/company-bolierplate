import axios from "axios";
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
import metaRoutes from "../../metaRoutes";
import server from "../../config/server";

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      productName: name,
      description: description,
      price: price,
    };
    await axios
      .post("http://localhost:8000/api/v1/products", body)
      .then((res) => {
        if (res.data.success) {
          props.history.push(metaRoutes.product);
        }
      });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const onChange = (e) => {
    setPrice(e.target.value);
  };
  const onHandleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Container>
      <Card className="shadow w-50 ">
        <CardHeader>Add Product</CardHeader>
        <Form onSubmit={handleSubmit}>
          <CardBody>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="product"
                value={name}
                placeholder="Enter product name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                value={price}
                placeholder="Enter Price"
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Enter description"
                value={description}
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

export default AddProduct;

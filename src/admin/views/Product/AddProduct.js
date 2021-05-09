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
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productName", name);
    data.append("price", price);
    data.append("description", description);
    data.append("file", selectedFiles);

    await axios
      .post("http://localhost:8000/api/v1/products", data)
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

  const uploadHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFiles(e.target.files[0]);
  };

  return (
    <Container>
      <Card className="shadow w-50 m-5 ">
        <CardHeader className="h4">Add Product</CardHeader>
        <Form onSubmit={handleSubmit}>
          <CardBody>
            <FormGroup className="m-2">
              <Label className="h5">Name</Label>
              <Input
                type="text"
                name="product"
                value={name}
                placeholder="Enter product name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="m-2">
              <Label className="h5">Price</Label>
              <Input
                type="text"
                name="price"
                value={price}
                placeholder="Enter Price"
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup className="m-2">
              <Label className="h5">Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Enter description"
                value={description}
                onChange={onHandleChange}
              />
            </FormGroup>
            <FormGroup className="m-2">
              <Label className="h5 m-2">Upload File</Label>
              <Input
                type="file"
                name="file"
                placeholder="upload File"
                onChange={uploadHandler}
              />
            </FormGroup>
          </CardBody>
          <CardFooter className="d-flex justify-content-end">
            <Button color="info text-white">Submit</Button>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
};

export default AddProduct;

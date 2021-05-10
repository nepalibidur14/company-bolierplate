import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  CardFooter,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import axios from "axios";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const Product = ({ product }) => {
    let productName = product.productName
      ? product.productName.toUpperCase()
      : null;
    return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className="h5">{productName}</ModalHeader>
          <ModalBody>
            <img src={product.file} height="200px" />
            <p>Name: {productName}</p>
            <p> Description: {product.description}</p>
            <p>Price:{product.price}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Card className="mt-1 shadow">
          <CardBody>
            <img src={product.file} height="80px" className="productImg" />
            <p className="h5">{product.productName}</p>
            <div className="d-flex justify-content-end">
              <Button
                color="white"
                size="sm"
                onClick={toggle}
                className="text-primary"
              >
                View
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products").then((item) => {
      console.log(item);
      setProducts(item.data.data);
    });
  }, []);
  console.log(products);
  return (
    <div className=" bg-light" id="products">
      <div className="container">
        <h2 className="text-left pt-5">Our Products</h2>

        <div className="row py-5">
          {products.map((product) => {
            return (
              <Col md={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductComponent;

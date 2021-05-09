import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products").then((item) => {
      console.log(item);
      setProducts(item.data.data);
    });
  }, []);
  return (
    <>
      <Container>
        <Card className="m-5">
          <CardHeader>
            <Row>
              <Col md={3} className="h4">
                Products
              </Col>
              <Col md={9} className="d-flex justify-content-end">
                <Link
                  to="/admin/products/add"
                  className="btn btn-sm btn-info text-white "
                >
                  Add Products
                </Link>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr>
                    <td key={idx}>{product.id}</td>
                    <td key={idx}>{product.productName}</td>
                    <td key={idx}>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Product;

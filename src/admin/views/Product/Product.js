import React from "react";
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import metaRoutes from "../../metaRoutes";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Row>
            <Col md={3}>Product</Col>
            <Col md={9}>
              <Link to="/admin/products/add" className="btn btn-sm btn-info">
                Add Products
              </Link>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Product;

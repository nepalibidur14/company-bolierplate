import React, { useEffect, useState } from "react";
import { Card, CardText, CardBody, CardTitle, CardDeck, Col } from "reactstrap";
import axios from "axios";

const ProductComponent = () => {
  const [product, setProduct] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products", (err, data) => {
      console.log(data);
      setProducts(data);
    });
  });
  return (
    <div className=" bg-light" id="products">
      <div className="container">
        <h2 className="text-left pt-5">Our Products</h2>

        <div className="row py-5">
          <CardDeck>
            {products.map((item) => {
              <h5>{item}</h5>;
            })}
          </CardDeck>
        </div>
      </div>
    </div>
  );
};
export default ProductComponent;

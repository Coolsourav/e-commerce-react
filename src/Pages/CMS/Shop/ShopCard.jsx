import React from "react";
import { Button, Card } from "react-bootstrap";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ShopCard() {
  const cardDetails = [
    {
      
      key:1,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-01.jpg",
      description: "Esprit Ruffle Shirt",
      price: "$16.64",
    },
    {
      key:2,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-02.jpg",
      description: "Herschel supply",
      price: "$16.64",
    },
    {
      key:3,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-03.jpg",
      description: "Only Check Trouser",
      price: "$16.64",
    },
    {
      key:4,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-04.jpg",
      description: "Classic Trench Coat",
      price: "$16.64",
    },
    {
      key:5,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-05.jpg",
      description: "Front Pocket Jumper",
      price: "$16.64",
    },
    {
      key:6,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-06.jpg",
      description: "Vintage Inspired Classic",
      price: "$16.64",
    },
    {
      key:7,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-07.jpg",
      description: "Shirt in Stretch Cotton",
      price: "$16.64",
    },
    {
      key:8,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-08.jpg",
      description: "Pieces Metallic Printed",
      price: "$16.64",
    },
    {
      key:9,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-09.jpg",
      description: "Converse All Star Hi Plimsolls",
      price: "$34.56",
    },
    {
      key:10,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-10.jpg",
      description: "Converse All Star Hi Plimsolls",
      price: "$34.56",
    },
    {
      key:11,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-11.jpg",
      description: "Converse All Star Hi Plimsolls",
      price: "$34.56",
    },
    {
      key:12,
      image:
        "https://preview.colorlib.com/theme/cozastore/images/product-12.jpg",
      description: "Converse All Star Hi Plimsolls",
      price: "$34.56",
    },
  ];
  return (
    <>
      {cardDetails.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>{item.description}</Card.Title>
                <FavoriteBorderOutlinedIcon />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <Card.Text className="m-0">{item.price} </Card.Text>
                <Button variant="secondary" size="sm">Buy Now</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

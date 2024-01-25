import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Card.css";

const DataCards = ({ data }) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap", // Allow cards to wrap on smaller screens
      }}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 270,
            width: "100%", // Ensure cards take full width on smaller screens
            marginBottom: "20px", // Add space between cards on smaller screens
            backgroundColor: "#303132",
          }}
        >
          <CardActionArea sx={{ "&:hover img": { transform: "scale(1.1)" } }}>
            <CardMedia
              component={item.image.component}
              height={item.image.height}
              image={item.image.url}
              alt={`Image ${index + 1}`}
              sx={{ transition: "transform 0.3s ease-in-out" }}
            />
            <CardContent>
              <p className="p">{item.image.info}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default DataCards;

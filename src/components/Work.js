import { Card } from "@mui/material";
import React from "react";

export default function Work({ name, description, link, imgSrc }) {
  return (
    <div
      className="center-align"
      style={{ textAlign: "center", marginBottom: "5rem" }}
    >
      <Card
        style={{
          borderRadius: "25px",
          backdropFilter: "blur(6px)",
          padding: "1rem",
          backgroundColor: "transparent",
        }}
        elevation={3}
      >
        <a href={link}>
          <img
            src={imgSrc}
            alt={imgSrc}
            style={{ width: "80px", height: "80px" }}
          />
        </a>
      </Card>
      <p>
        <b>{name}</b>
      </p>
      <span>
        <small>{description}</small>
      </span>
    </div>
  );
}

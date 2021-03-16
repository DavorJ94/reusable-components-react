import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="title">List of reusable components</h1>
      <p className="subtitle">Click on any link to check it out</p>
      <p className="note">
        Note: I just started this list, it is still pretty short
      </p>
      <div className="link-list">
        <Link to="/buttons" style={{ textDecoration: "none" }}>
          <div className="link-button">Buttons</div>
        </Link>
      </div>
    </div>
  );
}

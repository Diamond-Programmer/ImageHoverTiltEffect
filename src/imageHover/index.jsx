import React from "react";
import "./style.css";
import image from "./background-3628553.jpg";
function MyPage() {
  return (
    <div className="container">
      <div className="box-wrapper">
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <span className="over"></span>
        <div className="box">
          <strong>
            <img src={image} alt="" />
          </strong>
        </div>
      </div>
    </div>
  );
}

export default MyPage;

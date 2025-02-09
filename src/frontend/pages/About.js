import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <h1>About Page</h1>
            <p>We offer various services to meet your needs.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

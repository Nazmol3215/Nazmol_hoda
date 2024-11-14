import React from "react";
import dddgr from '../Images/ts9l37.jpg';


const FrstCon = () => {
  return (
    <div className="container mt-5">
              <div className='First_text'>
      <h1 className='build'>
<h4 className='hi'>hi, I'm Nazmol</h4>
        
        I build beautiful websites <br />
      for my clients
      <h4>see my Portfolio</h4>

      </h1>

</div>
      <div className="row align-items-center">
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">

          <img
            src= {dddgr}// Replace with your image path or URL
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <div className="col-12 col-md-7">
          <h2 className="mb-3">My Name Is Nazmol hoda.</h2>
          <p className="mb-4">
            I’m a freelance web developer with years of experience. As a web
            developer, I have experience with HTML, CSS, Bootstrap, WordPress,
            JavaScript, JQuery, and PHP. Most of my skills are based on
            WordPress, and I love to use it to develop websites. My dream is to
            bring the web to everyone. I am available for any job opportunity
            that suits my interests.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: "#17c9b2", border: "none" }}>
           Get Offer's
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrstCon;

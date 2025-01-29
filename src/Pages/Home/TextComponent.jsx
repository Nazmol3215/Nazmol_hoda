import React from "react";
import './TextComponent.css'; 



const TextComponent = () => {
  return (
    <div className="container mt-4  TextComponentOne" >
      <div className="row">

<h1 className="How_can">How can I help?</h1>
        <div className="col-md-4 mb-4 paragraph">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Full Website Design</h5>
              <p className="card-text">
                The full website design service includes everything you need to
                launch a professional, functional website. Using my creative
                and technical skills, I will bring your vision to life by
                understanding your unique needs and goals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 paragraph">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Landing Page Design</h5>
              <p className="card-text">
                The landing page design service is perfect for businesses
                looking to make a splash with a targeted, focused message.
                Whether you’re promoting a specific product or service or want
                to capture leads and boost conversions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 paragraph">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Ecommerce Design</h5>
              <p className="card-text">
                The eCommerce design service is tailored specifically for online
                stores. If you work with me, you can create a shopping
                experience that appeals to your customers and encourages them to
                make purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import ftjr from '../Images/ts9l37.jpg';
import ftjr1 from '../Images/-Black-2-copy-600x600.webp';


const TestimonialSlider = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center display-6 fw-bold mb-5">Take A Look What My Clients Say About My Works.</h2>
      <Carousel className="testimonial-carousel">
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center">
            <div className="card p-4 text-center" style={{ maxWidth: '700px', backgroundColor: '#f7f7ff' }}>
              <p className="text-muted">
                hey hoda Nazmol hoda on our company's web development projects has been a pleasure.
                Sirajum Mahdi is an exceptionally talented developer with a keen eye for design and a deep
                understanding of user experience. He is able to take complex technical concepts and
                translate them into practical solutions that meet our business needs. Sirajum Mahdi is a
                valuable asset to our team, and I highly recommend him for any web development project.
              </p>
            </div>
            <div className="mt-3 text-center">
              <img
                src= {ftjr} // replace with client image path
                alt="Client"
                className="rounded-circle"
                style={{ width: '60px', height: '60px' }}
              />
              <h6 className="mt-2">Tanzim Ahmad</h6>
            </div>
          </div>
        </Carousel.Item>
        <div className="d-flex flex-column align-items-center">
            <div className="card p-4 text-center" style={{ maxWidth: '700px', backgroundColor: '#f7f7ff' }}>
              <p className="text-muted">
             243  hey hoda NAzmol hoda on our company's web development projects has been a pleasure.
                Sirajum Mahdi is an exceptionally talented developer with a keen eye for design and a deep
                understanding of user experience. He is able to take complex technical concepts and
                translate them into practical solutions that meet our business needs. Sirajum Mahdi is a
                valuable asset to our team, and I highly recommend him for any web development project.
              </p>
            </div>
            <div className="mt-3 text-center">
              <img
                src= {ftjr1} // replace with client image path
                alt="Client"
                className="rounded-circle"
                style={{ width: '60px', height: '60px' }}
              />
              <h6 className="mt-2">Tanzim Ahmad</h6>
            </div>
          </div>
        {/* You can add more <Carousel.Item> blocks here for additional testimonials */}
      </Carousel>
    </section>
  );
};

export default TestimonialSlider;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import kjgjk1 from "../Images/jhb .png.webp"
import kjgjk2 from "../Images/hnbhvg.png.webp"
import kjgjk from "../Images/ilo.png.webp"


const projects = [
  {
    name: "PBook",
    image: kjgjk2,
    link: "https://new-bag-t-fqbg.vercel.app/",
  },
  {
    name: "AProject USA",
    image: kjgjk,
    link: "https://secend-kinenen.vercel.app/",
  },
  {
    name: "Tokbird",
    image: kjgjk1,
    link: "https://mulliganmode.vercel.app/",
  },
  {
    name: "Stop The Waste",
    image: kjgjk2,
    link: "https://new-bag-t.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="text-white py-5">
      <div className="container text-left">
        <h2 className="mb-4">My Portfolio</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card bg-secondary text-white shadow">
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light"
                  >
                    Visit The Website ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

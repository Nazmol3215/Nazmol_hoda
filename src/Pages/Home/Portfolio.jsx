import React from 'react';
import './Portfolio.css'; // CSS ফাইলটি আলাদা রাখতে চাইলে এখানে লিংক করুন

const Portfolio = () => {
  return (
    <div className="Min_portfolio">
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my personal website</p>
      </header>
      <div className="This_ddescripion">
        <div className="project-card">
          <h2>Project 1</h2>
          <p>This is a description of Project 1.</p>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>This is a description of Project 2.</p>
        </div>
        <div className="project-card">
          <h2>Project 3</h2>
          <p>This is a description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

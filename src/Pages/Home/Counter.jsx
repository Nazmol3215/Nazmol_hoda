import React, { useEffect, useState } from "react";

const StatsSection = () => {
  // State variables for stats (these could be fetched or calculated dynamically)
  const [completedProjects, setCompletedProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  // Simulate the dynamic calculation or fetching values
  useEffect(() => {
    const incrementValues = () => {
      if (completedProjects < 68) {
        setCompletedProjects((prev) => prev + 1);
      }
      if (happyClients < 17) {
        setHappyClients((prev) => prev + 1);
      }
      if (customerSatisfaction < 99) {
        setCustomerSatisfaction((prev) => prev + 1);
      }
    };

    const interval = setInterval(incrementValues, 50); // Adjust timing as needed

    // Clear interval after max values are reached
    return () => clearInterval(interval);
  }, [completedProjects, happyClients, customerSatisfaction]);

  return (
    <div className="container mt-4 text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 mb-4">
          <h1>{completedProjects}+</h1>
          <p>Completed Projects</p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h1>{happyClients}+</h1>
          <p>Happy Clients</p>
        </div>

        <div className="col-12 col-md-4 mb-4">
          <h1>{customerSatisfaction}%</h1>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

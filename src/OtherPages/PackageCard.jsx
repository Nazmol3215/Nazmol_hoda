import React, { useState } from 'react';

const OfferPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('Basic');

  const packages = {
    Basic: {
      price: '$110',
      delivery: '3-day delivery',
      revisions: 'Unlimited Revisions',
      features: [
        'Functional website',
        '5 pages',
        'Responsive design',
        'Content upload',
        '3 plugins/extensions',
        'E-commerce functionality',
        '15 products',
        'Payment processing',
        'Opt-in form',
        'Autoresponder integration',
        'Speed optimization',
        'Hosting setup',
        'Social media icons',
      ],
    },
    Standard: {
      price: '$220',
      delivery: '5-day delivery',
      revisions: 'Unlimited Revisions',
      features: [
        'Functional website',
        '10 pages',
        'Responsive design',
        'Content upload',
        '5 plugins/extensions',
        'E-commerce functionality',
        '30 products',
        'Payment processing',
        'Opt-in form',
        'Autoresponder integration',
        'Speed optimization',
        'Hosting setup',
        'Social media icons',
        'SEO Optimization',
      ],
    },
    Premium: {
      price: '$330',
      delivery: '7-day delivery',
      revisions: 'Unlimited Revisions',
      features: [
        'Functional website',
        'Unlimited pages',
        'Responsive design',
        'Content upload',
        '10 plugins/extensions',
        'E-commerce functionality',
        '50 products',
        'Payment processing',
        'Opt-in form',
        'Autoresponder integration',
        'Speed optimization',
        'Hosting setup',
        'Social media icons',
        'SEO Optimization',
        'Custom Branding',
      ],
    },
  };

  const handlePackageChange = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-3">
        {Object.keys(packages).map((packageType) => (
          <button
            key={packageType}
            onClick={() => handlePackageChange(packageType)}
            className={`btn ${selectedPackage === packageType ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
          >
            {packageType}
          </button>
        ))}
      </div>
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h5 className="card-title text-center">{selectedPackage} SHOPIFY STORE</h5>
          <h2 className="text-center">{packages[selectedPackage].price}</h2>
          <p className="text-center text-muted">Save up to 10% with <span className="text-primary">Subscribe to Save</span></p>
          <p><strong>{packages[selectedPackage].delivery}</strong></p>
          <p><strong>{packages[selectedPackage].revisions}</strong></p>
          <ul className="list-unstyled">
            {packages[selectedPackage].features.map((feature, index) => (
              <li key={index} className="d-flex align-items-center mb-2">
                <span className="me-2">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary w-100"
            onClick={() => alert(`${selectedPackage} package selected!`)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferPackages;

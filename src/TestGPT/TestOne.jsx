// FaqPage.js
import React, { useState } from 'react';
import './FaqPage.css';

const FaqPage = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Array of FAQ data
  const faqs = [
    {
      question: "How long will it take to build my e-commerce website?",
      answer: "The timeline depends on the complexity of the website. A basic e-commerce site with essential features may take 2-4 weeks, while an advanced site with custom features, payment integration, and admin panels may take 6-8 weeks. If you need additional customizations, it might take longer."
    },
    {
      question: " How will my customers make payments on the website?",
      answer: "Your customers can make payments using credit/debit cards, mobile banking, and digital wallets like Stripe, PayPal, bKash, or Rocket. I will integrate secure payment gateways and ensure transactions are encrypted and PCI-compliant for maximum security."
    },
    {
      question: " Will my website be mobile-friendly?",
      answer: "Yes, absolutely! Your e-commerce website will be fully responsive, meaning it will work smoothly on desktops, tablets, and mobile devices. A mobile-friendly design improves user experience and increases sales."
    },
    {
      question: "How will I manage products and orders on my website?",
      answer: " I will provide you with an admin dashboard where you can: Add, edit, and delete products. Manage inventory and stock levels. View and process orders. Generate reports and analytics. You will have full control over your e-commerce store."},
  

{
      question: " What will be the total cost of building the website?",
      answer: "The cost depends on the features and complexity of your e-commerce website. A basic store may cost $500-$1,500, while a more advanced store with custom functionalities may cost $2,000 or more. I can provide a detailed breakdown based on your specific requirements"
    },
  ];

  // Toggle function to open/close FAQ answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h6>{faq.question}</h6>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;

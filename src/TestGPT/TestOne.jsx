// FaqPage.js
import React, { useState } from 'react';
import './FaqPage.css';

const FaqPage = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Array of FAQ data
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, primarily used for single-page applications."
    },
    {
      question: "How do I use React?",
      answer: "You can start using React by creating components, which are reusable pieces of code for UI elements. Components can be functional or class-based."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML in React components."
    },
    {
      question: "What are React hooks?",
      answer: "React hooks are functions that let you 'hook into' React state and lifecycle features from function components."
    },
    {
      question: "What is the virtual DOM?",
      answer: "The virtual DOM is a lightweight representation of the actual DOM. React uses it to efficiently update the UI by only rendering components that have changed."
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
              <h3>{faq.question}</h3>
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

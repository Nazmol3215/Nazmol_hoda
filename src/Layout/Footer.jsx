import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faFlickr, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 mb-2">
            <a href="https://facebook.com" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://whatsapp.com" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://flickr.com" className="btn btn-pink w-100" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ff0084', color: '#fff' }}>
              <FontAwesomeIcon icon={faFlickr} /> Flickr
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://github.com" className="btn btn-dark w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://youtube.com" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              <FontAwesomeIcon icon={faPhone} /> 01824525986
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> sirajummahdigmail.com
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h5>Sirajum Mahdi</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

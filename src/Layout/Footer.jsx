// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faWhatsapp, faFlickr, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white text-center p-4">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-2 mb-2">
//             <a href="https://web.facebook.com/nazmul.hoda.854659" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faFacebook} /> Facebook
//             </a>
//           </div>
//           <div className="col-md-2 mb-2">
//             <a href="https://whatsapp.com" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
//             </a>
//           </div>
//           <div className="col-md-2 mb-2">
//             <a href="https://github.com/Nazmol3215" className="btn btn-dark w-100" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ff0084', color: '#fff' }}>
//               <FontAwesomeIcon icon={faGithub} /> GitHub
//             </a>
//           </div>
//           <div className="col-md-2 mb-2">
//             <a href="https://youtube.com" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faYoutube} /> YouTube
//             </a>
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <p>
//               <FontAwesomeIcon icon={faPhone} /> 01893717875
//               01941165110
//             </p>
//             <p>
//               <FontAwesomeIcon icon={faEnvelope} /> nazmolhoda8@gmail.com
//             </p>
//           </div>
//         </div>
//         <div className="mt-4">
//           <h5>Nazmol hoda</h5>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 mb-2">
            <a href="https://web.facebook.com/nazmul.hoda.854659" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://wa.me/01893717875" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://github.com/Nazmol3215" className="btn btn-dark w-100" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ff0084', color: '#fff' }}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://www.youtube.com/@yourchannel" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              <FontAwesomeIcon icon={faPhone} /> <a href="tel:01893717875" className="text-white">01893717875</a>, <a href="tel:01941165110" className="text-white">01941165110</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:nazmolhoda8@gmail.com" className="text-white">nazmolhoda8@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h5>Nazmol Hoda</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

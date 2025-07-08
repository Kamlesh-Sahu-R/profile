import { useState } from 'react';
import './Certificates.css';
import CertArray from './CertArray';


export default function Certificates() {
  
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="certificates-wrapper">
      <h2>Certifications</h2>
      <ul>
        {CertArray.map((cert, index) => (
          <li key={index} onClick={() => setModalImage(cert.img)}>
            {cert.title}
          </li>
        ))}
      </ul>

      {modalImage && (
        <div className="modal" >
          <div className="modal-content" >
            <img src={modalImage} alt="Certificate" />
            <button onClick={() => setModalImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

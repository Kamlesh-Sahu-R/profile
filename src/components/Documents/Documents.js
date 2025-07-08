import { useState } from 'react';
import './Documents.css';
import DocArray from './DocArray';

export default function Documents() {
  const [modalFile, setModalFile] = useState(null);

  const isPDF = (file) => file && file.endsWith('.pdf');
  const isImage = (file) => /\.(jpe?g|png|gif|webp)$/i.test(file);
  const isDoc = (file) => file && file.endsWith('.docx');

  return (
    <div className="documents-wrapper">
      <h2>Documents</h2>
      <ul>
        {DocArray.map((doc, index) => (
          <li key={index} onClick={() => setModalFile(doc.file)}>
            {doc.title}
          </li>
        ))}
      </ul>

      {modalFile && (
        <div className="modal" onClick={() => setModalFile(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isPDF(modalFile) ? (
              <iframe
                src={modalFile}      //download and print option will show
                // src={`${modalFile}#toolbar=0&navpanes=0&scrollbar=0`}   //To remove download and print option
                title="PDF File"
                width="100%"
                height="600px"
              ></iframe>
            ) : isImage(modalFile) ? (
              <img src={modalFile} alt="ImageFile" />
            ) : isDoc(modalFile) ? (
              <div>
                <p>This is a .docx file. Click below to open/download:</p>
                <a href={modalFile} target="_blank" rel="noopener noreferrer">
                  Open Document
                </a>
              </div>
            ) : (
              <p>Unsupported file format</p>
            )}
            <button onClick={() => setModalFile(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

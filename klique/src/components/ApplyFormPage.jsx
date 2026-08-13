import { useState, useRef, useEffect } from 'react';
import './ApplyFormPage.css';

function ApplyFormPage({ role = 'trainer' }) {
  const [fileName, setFileName] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Capitalize role for display
  const displayRole = role.charAt(0).toUpperCase() + role.slice(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
      if (fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const removeFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="apply-page-wrapper">
      <div className="form-card">
        <div className="form-header">
          <span className="eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Careers at Klique
          </span>
          <h2>Apply for this role</h2>
          <p>Fill in your details and we'll get back to you within 3–5 working days.</p>
        </div>

        <form className="form-body" onSubmit={(e) => e.preventDefault()}>
          <div className="field-group">
            <div className="field">
              <label>Full Name <span className="req">*</span></label>
              <input type="text" placeholder="Your full name" required />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input type="text" placeholder="+91 00000 00000" />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label>Email <span className="req">*</span></label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label>Subject <span className="req">*</span></label>
              <input type="text" placeholder="Position you're applying for" required defaultValue={displayRole} />
            </div>
          </div>

          <div className="field" style={{ marginBottom: '20px' }}>
            <label>Resume <span className="req">*</span></label>
            <div 
              className={`upload-box ${dragActive ? 'dragover' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                accept=".pdf,.doc,.docx" 
                onChange={handleChange}
              />
              <div className="upload-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div className="upload-text">Click or drag file to upload</div>
              <div className="upload-hint">PDF, DOC or DOCX — max 5MB</div>
            </div>
            {fileName && (
              <div className="file-chip show">
                <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>{fileName}</span>
                <span className="remove-file" onClick={removeFile}>✕</span>
              </div>
            )}
          </div>

          <div className="field" style={{ marginBottom: 0 }}>
            <label>Your Message (optional)</label>
            <textarea placeholder="Tell us a bit about yourself..."></textarea>
          </div>

          <button className="submit-btn" type="submit">
            Submit Application
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <p className="privacy-note">Your information is kept confidential and used only for this application.</p>
        </form>
      </div>
    </div>
  );
}

export default ApplyFormPage;

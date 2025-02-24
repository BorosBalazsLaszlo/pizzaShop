import React from 'react';
import '../css/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">© 2025 Geri Pizzéria. All rights reserved.</p>
        <div className="links">
          <a href="/privacy" className="link">Adatvédelem</a>
          <a href="/terms" className="link">Felhasználási feltételek</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

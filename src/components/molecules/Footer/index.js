import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Edited with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/ahmad-fajar//"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Ahmad Fajar
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://computing.kau.edu.sa"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Faculty of Computing and Information Technology KAU
        </a>
        <a>| Algorithm Course
        </a>
      </section>
    </footer>
  );
};

export default Footer;

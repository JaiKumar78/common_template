import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    bottom: 0,
    marginLeft: '-7.5vw',
    width: '100vw', 
  };

  return (
    <footer style={footerStyle}>
      All rights reserved St. Joseph's Institute of Technology | Designed by <a href='https://www.linkedin.com/in/department-of-artificial-intelligence-and-data-science-st-joseph-s-institute-of-tech-70422328a/' target='_blank' style={{color: 'white'}}>Department of Artificial Intelligence and Data Science</a>
    </footer>
  );
}

export default Footer;

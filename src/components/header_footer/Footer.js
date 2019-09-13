import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = (props) => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="font_copyright">
          The Venue 2018.All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer

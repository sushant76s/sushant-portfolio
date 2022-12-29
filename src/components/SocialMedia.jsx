import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
      <div>
        <a href="https://www.github.com/susverma/" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/susverma/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/sushantverma__/">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/sushantverma__">
          <BsInstagram />
        </a>
      </div>
    </div>
);

export default SocialMedia;
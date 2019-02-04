import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer class="footer" id="contacts">
    <div class="grid">
      <div class="unit half">
        <p class="author-copyright">
        &#169; {new Date().getFullYear()} rightright.me
        </p>
      </div>
      <div class="unit half">
        <p class="author-social">
          <a target="_blank" href="https://twitter.com/glsorre"><FaTwitter /></a> 
          <a target="_blank" href="https://it.linkedin.com/in/glsorrentino"><FaLinkedin /></a> 
          <a target="_blank" href="https://github.com/glsorre"><FaGithub /></a> 
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

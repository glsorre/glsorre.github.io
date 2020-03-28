import React from "react"
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';

const Footer = () => (
  <footer class="footer clearfix" id="contacts">
    <div class="grid">
      <div class="unit whole">
        <p class="author-contacts">
          <div class="email"><span><FaEnvelope /></span><span>giuseppe [at] rightright [dot] me</span></div> 
          <div class="others">
            <a target="_blank" href="https://twitter.com/glsorre"><FaTwitter /></a> 
            <a target="_blank" href="https://it.linkedin.com/in/glsorrentino"><FaLinkedin /></a> 
            <a target="_blank" href="https://github.com/glsorre"><FaGithub /></a>
            <a target="_blank" href="/feed.xml"><FaRss /></a>
          </div>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

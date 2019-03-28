import React from "react"
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa';

const Footer = () => (
  <footer class="footer clearfix" id="contacts">
    <div class="grid">
      <div class="unit one-third">
        <p class="author-copyright">
        &#169; {new Date().getFullYear()} rightright.me
        </p>
      </div>
      <div class="unit two-thirds">
        <p class="author-contacts">
          <div><span><FaEnvelope /></span><span>giuseppe [at] rightright [dot] me</span></div> 
          <a target="_blank" href="https://twitter.com/glsorre"><FaTwitter /></a> 
          <a target="_blank" href="https://it.linkedin.com/in/glsorrentino"><FaLinkedin /></a> 
          <a target="_blank" href="https://github.com/glsorre"><FaGithub /></a>
          <a target="_blank" href="/feed.xml"><FaRss /></a> 
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

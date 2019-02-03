import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer class="footer" id="contacts">
    <div class="grid">
      <div class="unit whole">
        <p class="author-copyright">
        &#169; {new Date().getFullYear()} rightright.me
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

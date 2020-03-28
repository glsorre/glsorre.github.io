import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  });

  return (
    <Layout location={props.location}>
      <SEO title="Home" keywords={[`home`, `rightright`, `giuseppe sorrentino`]} />
      <CSSTransition in={animation} timeout={700} classNames="animation" unmountOnExit>
        <div>
          <div class="home grid">
            <div class="unit whole">
              <div class="intro">
                <p>I am a professional with a long experience in <b>ux design/research</b> and <b>software development</b>. I am an <b>agile enthusiast</b> too.</p>

                <p>fsd sdMy professional objective is to <b>avoid failure of digital products</b> by thinking/managing them <b>right</b> (using ux and agile) and developing them <b>right</b>.</p>
              </div>
            </div>
          </div>
          <div class="home grid">
            <div class="unit whole">
              <div class="intro-container">
                <h1 class="intro-title"><span>I am a</span> <Link to="/blog" state={{ filterLink: 'project' }}>developer</Link></h1>
                <p class="intro-paragraph">I work as User Interface Engineer II and Hotels.com. I write useful and usable code.</p>
              </div>
              <div class="intro-container">
                <h1 class="intro-title"><span>I am a</span> <Link to="/portfolio">UX specialist</Link></h1>
                <p class="intro-paragraph">I design useful and beautiful wireframes and mockups. I do user research as well.</p>
              </div>

              <div class="intro-container">
                <h1 class="intro-title"><span>I am a </span><Link to="/blog" state={{ filterLink: 'post' }}>writer</Link><span> and a </span><Link to="/blog" state={{ filterLink: 'slides' }}>speaker</Link></h1>
                <p class="intro-paragraph">I talk and write about ux, agile and development.</p>
              </div>
              
              <div class="intro-container">
                <h1 class="intro-title"><span>Contact</span> <Link to="/aboutme">me</Link>!</h1>
              </div>

            </div>
          </div>
        </div>
      </CSSTransition>
    </Layout>
  )
}

export default IndexPage
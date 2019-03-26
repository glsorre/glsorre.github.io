import React from "react"
import { Link } from "gatsby"

class BlogFilter extends React.Component {
  handleClick = (e) => {
    this.props.onHeaderClick(this.props.value)
    e.preventDefault()
  }

  render() {
    return (
      <Link to="/blog"
            className={"filter-anchor " + (this.props.filterLink == this.props.value ? 'active' : 'inactive')}
            state={{ filterLink: this.props.value }}>{this.props.value}
      </Link>
    );
  }
}

export default BlogFilter

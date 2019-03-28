import React from "react"
import { Link } from "gatsby"

const BlogFilter = (props) => {
  return (
    <Link to="/blog"
          className={"filter-anchor " + (props.filterLink == props.value ? 'active' : 'inactive')}
          state={{ filterLink: props.value }}>{props.value}
    </Link>
  );
}

export default BlogFilter

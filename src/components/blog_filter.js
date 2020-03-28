import React from "react"
import { Link } from "gatsby"
import { GiUnicorn } from 'react-icons/gi';

const BlogFilter = (props) => {
  const text = props.value == "🦄" ? <GiUnicorn /> : props.value;

  return (
    <Link to="/"
          className={"filter-anchor " + (props.filterLink == props.value ? 'active' : 'inactive')}
          state={{ filterLink: props.value }}>{text}
    </Link>
  );
}

export default BlogFilter

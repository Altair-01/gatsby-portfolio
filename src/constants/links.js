import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "accueil",
    url: "/",
  },
  {
    id: 2,
    text: "à propos",
    url: "/about/",
  },
  {
    id: 3,
    text: "projets",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]
const tempLinks = data.map(link => {
  return (<li key={Link.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
  )
})

export default ({ styleClass }) => {
  return(
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

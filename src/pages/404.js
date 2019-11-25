import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="wrapper">
    <div className="error_404">
      <h3>Упс, кажется такой страницы не существует...</h3>
        <Link to="/">
          <p>
            Вернуться на главную
          </p>
        </Link>
    </div>      
  </div>
)

export default NotFoundPage

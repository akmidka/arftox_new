import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
class Header extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <header>
        <div className="header_top">
            <Link className="logo_nav" to="/">
              <img src={logo} />
            </Link>
          <div className="navbar">
            <Link to="/">
              о нас
            </Link>
            <Link to="/schedule/">
              расписание
            </Link>
            <Link to="/">
              работы учеников
            </Link>
            <Link to="/">
              связаться с нами
            </Link>
          </div>
          </div>
        {/* <div className="header_name">
          <img src={name} />
          <h1>art makes you happy</h1>
        </div> */}
        
      </header>
    )
  }
}
  




export default Header

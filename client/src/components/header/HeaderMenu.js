import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './HeaderMenu.css'
import { AuthContext } from '../../context/auth.context'
export const HeaderMenu = () => {
  const { userDetails, isAdmin } = useContext(AuthContext)

  let link = null
  //TODO in production change to  if (userDetails && isAdmin)
  if (userDetails)
    link = (<Link className="navLink" to="/adminPage">ADMIN
            </Link>)
  return (
    <Navbar bg="light" expand="sm">
      <img src="/public/images/commonIcon.jpg" alt="-" height="60"></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="navLink" to="/start">
            Home
          </Link>
          <Link className="navLink" to="/takePhoto">
            Photo
          </Link>
          {link} {/*  to admin page */}
          <Link className="navLink" to="/logout">
            LogOut
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

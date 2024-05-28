import React from 'react'
import { Link } from 'react-router-dom'
export const Hnav = () => {
  return (
    <>
         <header className="section-one">
      <div class="nav-container">
          <div className="logo">
              <a href="index.html"><img src="images/logo.png" alt="logo of the website" width="15%" height="auto"/></a>
          </div>
          <nav className="navbar">
              <ul>
                  <li className="nav-item"> <Link to="/" className="nav-link" >Home</Link></li>
                  <li className="nav-item"> <Link to="" className="nav-link" >Products</Link></li>
                  <li className="nav-item"> <Link to="" className="nav-link" >About</Link></li>
                  <li className="nav-item"> <Link to="/contact" className="nav-link" >Contact</Link></li>
                  <li className="nav-item"> <Link to="" className="nav-link" ><i className="fa-solid fa-user"></i></Link></li>
                  <li className="nav-item"> <Link to="" className="nav-link" ><i className="fa-solid fa-cart-shopping"> 0 </i></Link></li>
                  </ul>
          </nav>
      </div>
  </header>
    </>
  )
}

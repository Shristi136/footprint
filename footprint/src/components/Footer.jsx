import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    {/* <!-- contect section start  --> */}
<section className="section-7">
    <div className="head-container">
        <h2 className="common-heading">contact us</h2>
        {/* <p className="common-subheading">contact to Waggy pet shop.</p> */}
    </div>
    <div className="con-center">
    <div className="contact-grid">
        <div className="startnow">
            <h2 className="contact-title">Footprint Create quality, well-designed products</h2>
          <p>Talk to us today...</p>
          <div>
            <Link className="btn" href="contact.html">contact now 
                <i className="fa-solid fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>
        <div className="contact-img">
            <img src="images/contact.jpg" alt="shoes" width="300"/>
        </div>
    </div>
    </div>

</section>
{/* <!-- contect section end  --> */}
{/* <!-- footer section start  --> */}
<div className="footer-big">
    <div className="footer">
        <div className="footer-1--div">
            <div className="logo">
                <Link to="/"><img src="images/logo.png" alt="logo of the website" width="10%" height="auto"/></Link>
            </div>
            <p>Subscribe us to get updates about our grand offers.</p>
            <br/>
            <h3 className="footer-subheading">connect</h3>
            <div className="social-icon">
                <Link to=""><i className="fa-brands fa-linkedin"></i></Link>
                <Link to=""><i className="fa-brands fa-youtube"></i></Link>
                <Link to=""><i className="fa-brands fa-square-instagram"></i></Link>
            </div>
        </div>
        <div className="footer-2--div">
            <h3 className="footer-subheading">Quick Links</h3>
            <ul>
                <li> <Link to=""> Home </Link> </li>
                <li> <Link to=""> Products </Link> </li>
                <li> <Link to=""> Men</Link> </li>
                <li> <Link to="">Women</Link> </li>
                <li> <Link to="">About us</Link> </li>
              </ul>
        </div>
        <div className="footer-2--div">
            <h3 className="footer-subheading">Help Center</h3>
            <ul>
                <li> <Link to="">FAQs</Link> </li>
                <li> <Link to="">Checkout</Link> </li>
                <li> <Link to="">Delivery Info</Link> </li>
                <li> <Link to="">contact us</Link> </li>
              </ul>
        </div>
        <div className="footer-3--div">
            <h3 className="footer-subheading">contact</h3>
            <p>43 laxminagar vijay Rd. Delhi:110092, India 3910 </p>
                <p>+1(123)-456-7890 </p>
               <p>+1(123)-456-7890</p> 
               <p>info@footprintshop.com</p>
        </div>
    </div>
    <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash;</p>
</div>
{/* <!-- footer section end  --> */}
    </>
  )
}

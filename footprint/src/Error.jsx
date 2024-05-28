import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
    <div className='error-page'>
     <div className="error-con">
        <div>
          <h2 className="big--heading">404</h2>
          <br />
          <h3 className='contact-title'>UH OH! You're lost.</h3>
          <br />
          <p className="common-subheading">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <Link to="/">
            <button className="btn">Go Back to Home</button>
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}

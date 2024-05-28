import React from 'react'

export const Services = () => {
  return (
    <>
    {/* <!-- service section start  --> */}
<section className="section-3">
  <div className="head-container">
      <h2 className="common-heading">explore Services</h2>
      <p className="common-subheading">We Work for Our Customer</p>
  </div>
  <div className="service-grid">
      <div className="service-div">
          <div className="service-icon">
              <img src="images/delivary.png" alt="fast delivary"/>
          </div>
          <h3 className="common-tittle">Free&Fast-Delivary</h3>
      </div>
      <div className="service-div">
          <div className="service-icon">
              <img src="images/chat.png" alt="secure chat"/>
          </div>
          <h3 className="common-tittle">Non-Context Shipping</h3>
      </div>
      <div className="service-div">
          <div className="service-icon">
              <img src="images/money-back.png" alt="money-back"/>
          </div>
          <h3 className="common-tittle">Money-Back Guarantee</h3>
      </div>
      <div className="service-div">
        <div className="service-icon">
            <img src="images/payment.png" alt="secure payment"/>
        </div>
        <h3 className="common-tittle">Secure-Payment</h3>
    </div>
  </div>
</section>
{/* <!-- service section end  --> */}
    </>
  )
}

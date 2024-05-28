import React from 'react'

export const Contact = () => {
  return (
    <>
     {/* <!-- contect form start  --> */}
 <div className="contact-page">
    <div className="head-container">
        <h2 className="common-heading">contact us</h2>
        <p className="common-subheading">Get in touch with us. we are always here to help you.</p>
    </div>
    <div className="contact-form-grid">
        <div className="form">
            <form action="https://formspree.io/f/mvoewyjl" method="POST">
                <div className="form-1--div mb-3">
                <div className="fname">
                    <label for="username">User name</label>
                    <input type="text" name="name" id="name" required placeholder=" Enter full name" autocomplete="off"/>
                </div>
                <div className="email">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" required placeholder="abc@gmail.com" autocomplete="off"/>
                </div>
                </div>
                <div className="form-2--div mb-3">
                    <label for="subject">Subject</label>
                    <input type="subject" name="subject" id="subject" autocomplete="off" required placeholder="write your topic/subject"/>
                </div>
                <div className="form-3--div mb-3">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" autocomplete="off" required placeholder="write your message"></textarea>
                </div>
                <div className="form-4--div mb-3">
                    <button className="btn">Send Message</button>
                </div>
            </form>
        </div>
        <div className="location"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.176955021836!2d77.25929279100535!3d28.635928343767514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac7381f671%3A0x531f06064145554a!2sLaxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712074408361!5m2!1sen!2sin" 
        width="100%" 
        height="600"
        title="Google Maps Location of Laxmi Nagar, Delhi" // descriptive title
         style={{border:0}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
    </div>
    
 </div>
 {/* <!-- contect form end  --> */}

    </>
  )
}

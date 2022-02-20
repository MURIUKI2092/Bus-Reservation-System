import React from 'react';

const ContactDetails= () => {
  return(
    <section  className="ContactDetails">
      <h3>Contact Information</h3>

      <form>
        <h5>Email Id</h5>
        <input type={'email'} placeholder=""></input>
        
        <h5>Phone</h5>
        <input type={'number'} placeholder=""></input>

      </form>
    </section>

  )
}
export default ContactDetails;
import React,{ useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact=()=> {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

    emailjs.sendForm("service_hv5k1bb", "template_cjw5tpv", form.current, {publicKey:'ivFBQB27xWGxGYEUL'})
      .then((result) => {
        alert(result.text)
          console.log(result.text);
          e.target.reset();
          console.log("Message sent")
        },
        (error) => {
          console.log( error.text);
        }
      );
    };
  return (
    <div className="contact">
      <div className="contactheading">
        <h1>Contact Me</h1>
      </div>
      <div className="content">
        <h3>Please fill out the form to contact me</h3>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" className="input1" placeholder="Your Name" name='user_name'/>
        <br />
        <input type="email" className="input2" placeholder="Your Email" name='user_email'/>
        <br />
        <textarea placeholder="Your Message" className="text" cols="50" rows="5" name="message"></textarea>
        <br />
        <input type="submit" value="Send" className="submitbtn"/>
      </form>
    </div>
  );
}
export default Contact;

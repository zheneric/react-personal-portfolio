import { useState } from "react";
import "./contact.scss";
import { Mail } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const handleChange = (e) => {
    setMessage(false);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Let's get in touch!</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className={message && "msgSent"}>
            {!message ? "Send" : "Sent!"}
          </button>
        </form>
      </div>
    </div>
  );
}

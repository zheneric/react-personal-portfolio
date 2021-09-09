import { useState } from "react";
import "./contact.scss";
import { send } from "emailjs-com";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Eric",
    message: "",
    reply_to: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_vzno38b",
      "template_ritdw1f",
      toSend,
      "user_elYIO0aOADKUPRUjVXjXw"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      from_name: "",
      to_name: "Eric",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Let's get in touch!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Tell me your best joke!"
            name="message"
            id=""
            cols="30"
            rows="10"
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

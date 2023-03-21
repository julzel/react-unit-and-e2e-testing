import React, { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const successMessageRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasSuccessful, setWasSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      successMessageRef.current.textContent =
        "Your message was sent successfully!";
      setIsSubmitting(false);
      setWasSuccessful(true);
    }, 2000);
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <div
        className={wasSuccessful ? "success-message" : ""}
        ref={successMessageRef}
      />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            ref={messageRef}
            disabled={isSubmitting}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;

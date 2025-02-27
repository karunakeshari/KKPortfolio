import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let isValid = false;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid =
      name.trim() !== "" && emailRegex.test(email) && message.trim() !== "";
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    validateForm();
    if (isValid) {
      e.preventDefault();
      emailjs
        .send(serviceId, templateId, formData, userId)
        .then((response) => {
          alert("Message sent successfully! ✅");
        })
        .catch((error) => {
          alert("Failed to send message. ❌");
        });
    }
  };
  return (
    <div className="flex flex-row py-4 px-6">
      <div className="flex flex-col justify-center md:w-1/2 m-4">
        <h2 className="text-3xl font-bold text-blue-600 flex justify-center">
          Let's Connect!
        </h2>
        <p className="text-black-300 mt-3 text-center max-w-lg">
          If you're looking to connect for a meaningful tech discussion, a
          virtual coffee, or an engaging conversation, you can find me on social
          media or drop me a message here!
        </p>

        <form className="w-full mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="input input-bordered w-full border-blue-400 focus:border-blue-600"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="input input-bordered w-full border-blue-400 focus:border-blue-600"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message*"
            name="message"
            className="textarea textarea-bordered w-full border-blue-400 focus:border-blue-600"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="btn bg-blue-600 text-white w-full hover:bg-blue-700"
            onClick={handleSubmit}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="flex flex-row md:w-1/2 m-4 justify-center items-center">
        <h3 className="font-bold text-xl">Email - &nbsp;</h3>
        <a
          href="mailto:karunakesharii84@gmail.com"
          className="underline text-blue-600 hover:underline font-bold text-xl"
        >
          karunakesharii84@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;

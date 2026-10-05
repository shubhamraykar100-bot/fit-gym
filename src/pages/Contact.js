import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill all the fields.");
    } else {
      alert(`Thank you ${name}. Your message has been submitted.`);
    }
  };

  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

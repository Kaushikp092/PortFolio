import { useState } from "react";
import "./Contact.css"; // vanilla CSS file

const Form = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_URL}/users/message`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Submission Failed");
      }
      
      // If backend returns something, you can ignore it
      await res.json();
      setSuccess('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="form-section">
      <div className="form-card">
        <h2 className="form-title">Let&apos;s work together</h2>
        <p className="form-desc">
          Have a project in mind or just want to say hi? Drop a message and
          I&apos;ll get back to you as soon as I can.
        </p>

        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about what you have in mind..."
            />
          </div>

          <button type="submit" className="form-btn">
            Send Message
          </button>
        </form>

        {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p> }
      </div>
    </section>
  );
};

export default Form;

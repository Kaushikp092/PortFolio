// import { useState } from "react";

// const Form = () => {
//    const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//       message: "",
//    });

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault();
//       // You can later connect this to an API, EmailJS, etc.
//       console.log("Contact form submitted:", formData);
//    };

//    return (
//       <section
//          className="flex items-center justify-center"
//          style={{
//             maxWidth: "1100px",
//             padding: "2rem 3rem",
//             margin: "1rem auto",
//          }}
//       >
//          <div className="w-full max-w-xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10" style={{
//             padding: "1rem"
//          }}>
//             <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-2 text-center md:text-left">
//                Let&apos;s work together
//             </h2>
//             <p className="text-sm md:text-base text-white/60 mb-8 text-center md:text-left">
//                Have a project in mind or just want to say hi? Drop a message and
//                I&apos;ll get back to you as soon as I can.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-5" style={{padding: '10px'}}>
//                <div>
//                   <label
//                      className="block text-sm font-medium text-white/70 mb-1.5"
//                      htmlFor="name"
//                   >
//                      Your Name
//                   </label>
//                   <input
//                      id="name"
//                      name="name"
//                      type="text"
//                      value={formData.name}
//                      onChange={handleChange}
//                      placeholder="Enter your name"
//                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent transition"
//                   />
//                </div>

//                <div>
//                   <label
//                      className="block text-sm font-medium text-white/70 mb-1.5"
//                      htmlFor="email"
//                   >
//                      Your Email
//                   </label>
//                   <input
//                      id="email"
//                      name="email"
//                      type="email"
//                      value={formData.email}
//                      onChange={handleChange}
//                      placeholder="you@example.com"
//                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent transition"
//                   />
//                </div>

//                <div>
//                   <label
//                      className="block text-sm font-medium text-white/70 mb-1.5"
//                      htmlFor="message"
//                   >
//                      Your Message
//                   </label>
//                   <textarea
//                      id="message"
//                      name="message"
//                      rows={4}
//                      value={formData.message}
//                      onChange={handleChange}
//                      placeholder="Tell me a bit about what you have in mind..."
//                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent transition resize-none"
//                   />
//                </div>

//                <button
//                   type="submit"
//                   className="w-full inline-flex items-center justify-center rounded-full bg-blue-500/90 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
//                >
//                   Send Message
//                </button>
//             </form>
//          </div>
//       </section>
//    );
// };

// export default Form;

import { useState } from "react";
import "./Contact.css"; // vanilla CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
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
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you have in mind..."
            />
          </div>

          <button type="submit" className="form-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;


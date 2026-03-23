import { useState } from "react";
import "./Contact.css";
import { BorderBeam } from "../ui/border-beam";
import { InView } from "../ui/in-view";

const Form = () => {
	const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!VITE_BACKEND_URL) {
			setError("Backend URL not configured. Check .env file.");
			return;
		}
		setLoading(true);
		setError("");
		setSuccess("");

		try {
			const res = await fetch(`${VITE_BACKEND_URL}/api/users/message`, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ name, email, message }),
			});

			if (!res.ok) {
				const errData = await res.json();
				throw new Error(errData.error || "Submission Failed");
			}

			// If backend returns something, you can ignore it
			setSuccess("Message sent successfully!");
			setName("");
			setEmail("");
			setMessage("");
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<InView
				variants={{
					hidden: {
						opacity: 0,
						scale: 1.5,
					},
					visible: {
						opacity: 1,
						scale: 1,
					},
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				viewOptions={{ margin: "0px 0px -350px 0px" }}
			>
				<section className="form-section">
					<div className="form-card">
						<BorderBeam
							size={80}
							duration={8}
							colorFrom="#3b82f6"
							colorTo="#9333ea"
						/>
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
									id="email"
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
									id="message"
									name="message"
									rows={4}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									placeholder="Tell me a bit about what you have in mind..."
									required
								/>
							</div>

							<button type="submit" className="form-btn" disabled={loading}>
								{loading ? "Sending..." : "Send Message"}
							</button>
						</form>

						{error && <p className="error">{error}</p>}
						{success && <p className="success">{success}</p>}
					</div>
				</section>
			</InView>
		</>
	);
};

export default Form;

import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ContactUs() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "4b542c88-6bc7-482f-ace9-5ba13dbcc74e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent.",
                    icon: "success",
                    confirmButtonText: "Great!"
                });
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: data.message || "Something went wrong.",
                    icon: "error",
                    confirmButtonText: "Try Again"
                });
                setResult(data.message);
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Network error. Please try again later.",
                icon: "error",
                confirmButtonText: "Okay"
            });
            setResult("Network error. Please try again.");
        }
    };

    return (
        <div className="contact-container align-middle">
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    className="contact-input"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                    className="contact-input"
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    required
                    className="contact-textarea"
                />
                <button type="submit" className="contact-button">Submit</button>
            </form>
            {result && <span className="result-message">{result}</span>}
        </div>
    );
}

export default ContactUs;

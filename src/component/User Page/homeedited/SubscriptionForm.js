import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend with the subscribed email
    fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle any response or success message if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle any error that occurred during the request
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscriptionForm;

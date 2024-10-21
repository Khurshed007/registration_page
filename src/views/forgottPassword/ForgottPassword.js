import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { DiscountForm } from "../discount-form/discount-form";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = (formData) => {
    const auth = getAuth();
       console.log(formData.userEmail, "asd")
    if (!formData.userEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    // Отправка email для сброса пароля
    sendPasswordResetEmail(auth, formData.userEmail)
      .then(() => {
        // Если email существует, показываем сообщение о том, что письмо отправлено
        setMessage("Password reset email sent! Please check your inbox.");
        setError("");
      })
      .catch((error) => {
        // Если email не найден
        if (error.code === 'auth/user-not-found') {
          setError("No user found with this email.");
        } else {
          // Любые другие ошибки (например, формат email)
          setError("Failed to send password reset email. Please try again.");
        }
        setMessage("");
      });
  };

  return (
    <div className="App-header">
    <DiscountForm handle={handleForgotPassword} forgotPassword={true} formText={"Forgott Password"} />
  </div>
  );
};

export default ForgotPassword;
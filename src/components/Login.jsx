import React, { useState, useEffect } from 'react';

const initialValues = {
  email: "",
  password: "",
  terms: false
};

export default function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isEmailValid = formData.email.includes("@");
    const isPasswordValid = formData.password.length >= 8;
    const isTermsAccepted = formData.terms === true;

    setIsValid(isEmailValid && isPasswordValid && isTermsAccepted);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      onLoginSuccess(); 
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            data-cy="email-input"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email && !formData.email.includes("@") && (
            <p data-cy="error-message" style={{ color: 'red' }}>Geçerli bir email giriniz!</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Şifre: </label>
          <input
            id="password"
            name="password"
            type="password"
            data-cy="password-input"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password && formData.password.length < 8 && (
            <p data-cy="error-message" style={{ color: 'red' }}>Şifre en az 8 karakter olmalı!</p>
          )}
        </div>

        <div>
          <label>
            <input
              name="terms"
              type="checkbox"
              data-cy="terms-checkbox"
              checked={formData.terms}
              onChange={handleChange}
            />
            Şartları kabul ediyorum
          </label>
        </div>

        <button 
          type="submit" 
          data-cy="submit-button" 
          disabled={!isValid}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
import React from 'react';

export default function Success() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 data-cy="success-message">Giriş Başarılı!</h1>
      <p>Başarıyla sisteme giriş yaptınız.</p>
    </div>
  );
}
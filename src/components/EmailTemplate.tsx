import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #eee' }}>
    <h2>Yeni Portfolyo Mesajı!</h2>
    <p><strong>Gönderen:</strong> {name}</p>
    <p><strong>E-posta:</strong> {email}</p>
    <div style={{ marginTop: '20px', padding: '10px', background: '#f9f9f9' }}>
      <strong>Mesaj:</strong>
      <p>{message}</p>
    </div>
  </div>
);
import React from 'react';

interface PasswordResetEmailProps {
  resetUrl: string;
}

export default function PasswordResetEmail({ resetUrl }: PasswordResetEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>InnoSTEMLab</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Password Reset Request</p>
      </div>
      
      {/* Main Content */}
      <div style={{ padding: '40px', background: 'white' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Hello!</h2>
        
        <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
          We received a request to reset your password for your InnoSTEMLab account. 
          If you didn't make this request, you can safely ignore this email.
        </p>
        
        {/* Reset Button */}
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <a 
            href={resetUrl}
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block',
              fontWeight: 'bold'
            }}
          >
            Reset Password
          </a>
        </div>
        
        <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '20px' }}>
          Or copy and paste this link into your browser:
        </p>
        
        {/* Fallback Link */}
        <p style={{
          background: '#f3f4f6',
          padding: '15px',
          borderRadius: '6px',
          wordBreak: 'break-all',
          color: '#666',
          fontSize: '14px'
        }}>
          {resetUrl}
        </p>
        
        {/* Security Information */}
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '10px' }}>
            <strong>Important:</strong>
          </p>
          <ul style={{ color: '#999', fontSize: '14px', lineHeight: 1.6, margin: 0, paddingLeft: '20px' }}>
            <li>This link will expire in 1 hour</li>
            <li>If you didn't request this reset, please ignore this email</li>
            <li>For security, this link can only be used once</li>
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ background: '#f9fafb', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
          © 2025 InnoSTEMLab. All rights reserved.
        </p>
      </div>
    </div>
  );
} 
import * as React from 'react';

interface EmailTemplateProps {
  services: string;
  duration: string;
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  services,
  duration,
  name,
  email,
  message,
}) => (
  <div className="bg-gray-100 font-sans">
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">New Contact Form Submission</h1>
      <div className="mb-4">
        <p className="text-gray-600"><strong className="text-gray-800">Name:</strong> {name}</p>
        <p className="text-gray-600"><strong className="text-gray-800">Email:</strong> {email}</p>
        <p className="text-gray-600"><strong className="text-gray-800">Required Services:</strong> {services}</p>
        <p className="text-gray-600"><strong className="text-gray-800">Contract Duration:</strong> {duration}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Message:</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  </div>
);
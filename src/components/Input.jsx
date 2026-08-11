import React from 'react';

export default function Input({ id, value, onChange, placeholder, type = 'text', error }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all ${
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20'
      }`}
    />
  );
}

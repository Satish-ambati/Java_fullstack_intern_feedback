import React from 'react';

export default function Textarea({ id, value, onChange, placeholder, rows = 4, error }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full p-3 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all resize-y ${
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-200 focus:border-brand-blue focus:ring-brand-blue/20'
      }`}
    />
  );
}

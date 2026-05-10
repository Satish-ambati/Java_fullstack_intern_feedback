import React from 'react';

export default function Field({ label, id, error, required, children, helperText }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-brand-blue">
        {label} {required && <span className="text-brand-orange">*</span>}
      </label>
      {children}
      {helperText && !error && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="text-sm text-red-500 animate-fade-in-up">{error}</p>
      )}
    </div>
  );
}

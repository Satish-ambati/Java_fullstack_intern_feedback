import React, { useState } from 'react';
import StarRating from './StarRating';
import Field from './Field';
import Input from './Input';
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';
import Toast from './Toast';
import { validateFeedback, isEmpty } from '../utils/validate';
import { submitFeedback } from '../services/feedbackApi';
import { motion } from 'framer-motion';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', regdNumber: '', rating: 0, query: '', suggestion: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear specific error on change
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
    if (errors.rating) setErrors((prev) => ({ ...prev, rating: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateFeedback(formData);
    if (!isEmpty(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
      await submitFeedback(formData);
      setToast({ message: 'Feedback submitted successfully! Thank you.', type: 'success' });
      setFormData({ name: '', email: '', regdNumber: '', rating: 0, query: '', suggestion: '' });
    } catch (err) {
      setToast({ message: err.message || 'Failed to submit feedback. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange to-brand-blue" />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-blue mb-2">We value your input</h2>
        <p className="text-gray-600 text-sm">Help us improve the Academy of Tech Masters experience.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Field 
              id="name" 
              label="Full Name" 
              required 
              error={errors.name}
            >
              <Input 
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                error={!!errors.name}
              />
            </Field>
          </div>

          <Field 
            id="email" 
            label="Email Address" 
            required 
            error={errors.email}
          >
            <Input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email address" 
              error={!!errors.email}
            />
          </Field>

          <Field 
            id="regdNumber" 
            label="Registration Number" 
            required 
            error={errors.regdNumber}
          >
            <Input 
              id="regdNumber" 
              value={formData.regdNumber} 
              onChange={handleChange} 
              placeholder="" 
              error={!!errors.regdNumber}
            />
          </Field>
        </div>

        <Field 
          id="rating" 
          label="Course Rating" 
          required 
          error={errors.rating}
        >
          <StarRating 
            value={formData.rating} 
            onChange={handleRatingChange} 
          />
        </Field>

        <Field 
          id="query" 
          label="Your Feedback / Query" 
          required 
          error={errors.query}
          helperText="Minimum 10 characters."
        >
          <Textarea 
            id="query" 
            value={formData.query} 
            onChange={handleChange} 
            placeholder="What did you like? What can we improve?" 
            error={!!errors.query}
          />
        </Field>

        <Field 
          id="suggestion" 
          label="Additional Suggestions" 
        >
          <Textarea 
            id="suggestion" 
            value={formData.suggestion} 
            onChange={handleChange} 
            placeholder="Any questions to ask?" 
            rows={3}
          />
        </Field>

        <div className="pt-4">
          <SubmitButton isSubmitting={isSubmitting} />
        </div>
      </form>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: '' })} 
      />
    </motion.div>
  );
}

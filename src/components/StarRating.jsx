import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StarRating({ value, onChange, error }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            type="button"
            key={star}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`p-1 focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-full transition-colors ${
              (hover || value) >= star ? 'text-brand-orange' : 'text-gray-300'
            }`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className="w-8 h-8"
              fill={(hover || value) >= star ? 'currentColor' : 'none'}
            />
          </motion.button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1 animate-fade-in-up">{error}</p>}
    </div>
  );
}

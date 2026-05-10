import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg text-white font-medium ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {type === 'success' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
          <p>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

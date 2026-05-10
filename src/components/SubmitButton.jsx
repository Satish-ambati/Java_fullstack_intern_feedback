import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export default function SubmitButton({ isSubmitting }) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      className={`w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-md ${
        isSubmitting
          ? 'bg-brand-blue/70 cursor-not-allowed'
          : 'bg-brand-blue hover:bg-brand-blue-mid focus:ring-4 focus:ring-brand-blue/30'
      }`}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          <span>Submit Feedback</span>
        </>
      )}
    </motion.button>
  );
}

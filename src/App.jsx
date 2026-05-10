import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden selection:bg-brand-orange/30 selection:text-brand-blue">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange/5 blur-[120px]" />
      </div>

      <header className="relative z-10 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-mid p-2 rounded-lg shadow-md animate-bounce-light">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-blue leading-tight tracking-tight">AOTMS</h1>
              <p className="text-[10px] uppercase font-semibold tracking-wider text-brand-orange">Academy of Tech Masters</p>
            </div>
          </div>
          <a href="https://www.aotms.in" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors items-center gap-1.5">
            <Globe className="w-4 h-4" /> Visit Website
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-brand-orange/20">
                Student Portal
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue leading-tight">
                Java Full Stack <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">
                  Internship Feedback
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-lg">
                Your feedback drives our curriculum. Tell us about your experience with our courses, labs, and mentorship. Together, we build the future of tech education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-brand-blue/5 text-brand-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Support Call</h3>
                  <a href="tel:8106204119" className="text-brand-orange hover:underline font-medium mt-1 inline-block">8106204119</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-brand-orange/5 text-brand-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a href="mailto:satish.ambati0804@gmail.com" className="text-brand-blue hover:underline font-medium mt-1 inline-block break-all">satish.ambati0804@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4 py-2 mt-8">
              <p className="italic text-gray-500 font-medium tracking-wide">
                "Learn Today, Lead Tomorrow"
              </p>
            </div>
          </motion.div>

          <div className="w-full max-w-md mx-auto">
            <FeedbackForm />
          </div>

        </div>
      </main>

      <footer className="relative z-10 py-6 text-center border-t border-gray-200 mt-auto bg-white">
        <p className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Academy of Tech Masters. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

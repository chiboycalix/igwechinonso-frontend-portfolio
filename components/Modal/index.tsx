import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm dark:backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-auto max-w-lg mx-auto my-6 z-50"
          >
            <div className="relative p-12 flex flex-col w-full bg-white dark:bg-[#0F151B] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex-auto">
                <div className="text-gray-800 dark:text-gray-200">
                  {children}
                </div>
              </div>
              <div className="flex items-center justify-center mt-8">
                <Button
                  className="text-md font-bold uppercase"
                  caption=" OK"
                  onClick={onClose}
                />

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
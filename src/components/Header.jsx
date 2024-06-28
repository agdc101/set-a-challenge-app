import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {/* Check for exit property in these elements in order to animate the rendering of this element */}
      <AnimatePresence> 
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          transition={{ type: 'spring', stiffness: 600 }} 
          onClick={handleStartAddNewChallenge} 
          className="button">
          Add Challenge 
          </motion.button>
      </header>
    </>
  );
}

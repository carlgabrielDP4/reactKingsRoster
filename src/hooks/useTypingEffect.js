import { useState, useEffect } from 'react';

export const useTypingEffect = (text = '', speed = 200) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    setDisplayedText(text[0]);
    let currentIndex = 0;
    

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length-1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed]);

  return displayedText;
};

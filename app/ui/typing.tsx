'use client';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import React, { useEffect, useRef } from 'react';
import './clock.css';

const TypingComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typing = (text, index) => {
      textRef.current.textContent = text.substring(0, index);

      if (index < text.length) {
        textRef.current.textContent += text[index];
        index++;
        setTimeout(() => {
          typing(text, index);
        }, Math.floor(Math.random() * 100) + 100);
      } else {
        setTimeout(() => {
          textRef.current.textContent = '';
          typing(text, 0);
        }, 3000);
      }
    };

    typing('Best Landing Pages For Startup', 0);
    // typing('Best', 0);


  
     function randomColor(){
       let color = `#${Math.floor(Math.random() * (256 * 256 *256)).toString(16).padStart(6, '0')}`;
       document.querySelector('.my-text').style.color = color;
     }

    setInterval(randomColor,1000);
  }, []);

  return (
    <h1 className="my-text" ref={textRef}></h1>
  );
};

export default TypingComponent;

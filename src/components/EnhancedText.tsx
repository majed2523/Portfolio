import React, { useState, useEffect } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const SplitText = ({ text, className = '', delay = 0, stagger = 50 }: SplitTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
          style={{
            transitionDelay: isVisible ? `${index * stagger}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
}

export const ScrambleText = ({ 
  text, 
  className = '', 
  scrambleSpeed = 50,
  revealSpeed = 100 
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayText(prev => {
          const scrambled = text
            .split('')
            .map((char, index) => {
              if (index < currentIndex) return char;
              if (index === currentIndex) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
          return scrambled;
        });
      }, scrambleSpeed);

      const revealTimer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, revealSpeed);

      return () => {
        clearInterval(interval);
        clearTimeout(revealTimer);
      };
    } else {
      setDisplayText(text);
    }
  }, [currentIndex, text, scrambleSpeed, revealSpeed, chars]);

  return <span className={className}>{displayText}</span>;
};

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
}

export const GradientText = ({ 
  text, 
  className = '', 
  colors = ['#3B82F6', '#06B6D4', '#8B5CF6'] 
}: GradientTextProps) => {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${colors.join(', ')})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 3s ease infinite',
  };

  return (
    <span className={className} style={gradientStyle}>
      {text}
    </span>
  );
};
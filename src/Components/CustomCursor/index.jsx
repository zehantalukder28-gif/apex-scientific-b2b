import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-interact'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
      return interactiveElements;
    };

    let elements = addListeners();
    
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      elements = addListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      observer.disconnect();
    };
  }, [moveCursor]);

  const [isTouch, setIsTouch] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false
  );

  useEffect(() => {
    const handleMediaChange = (e) => setIsTouch(e.matches);
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    mediaQuery.addEventListener('change', handleMediaChange);
    setIsTouch(mediaQuery.matches);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Don't render on touch devices
  if (isTouch) {
    return null;
  }

  return (
    <>
      {/* 
        CRITICAL: Do NOT use mix-blend-difference — it inverts blue (#3b82f6) 
        to yellow on white backgrounds. Instead, use a high z-index with no blend mode.
      */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 99999,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 52 : 8,
            height: isHovering ? 52 : 8,
            backgroundColor: isHovering ? 'rgba(59, 130, 246, 0)' : 'rgba(59, 130, 246, 1)',
            borderColor: isHovering ? 'rgba(96, 165, 250, 0.8)' : 'rgba(59, 130, 246, 0)',
            borderWidth: isHovering ? 1.5 : 0,
            boxShadow: isHovering 
              ? '0 0 10px rgba(59,130,246,0.5), 0 0 25px rgba(59,130,246,0.15)' 
              : '0 0 6px rgba(59,130,246,0.3)',
          }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;

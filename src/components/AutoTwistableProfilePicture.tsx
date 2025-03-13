'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';

interface AutoTwistableImageProps extends Omit<ImageProps, 'className'> {
  twistInterval?: number; // Time in ms between twists
  twistDuration?: number; // Duration of twist animation in ms
  twistDegrees?: number; // Degrees to twist (default 180)
  className?: string; // Allow custom classes
  initialTwist?: boolean; // Whether to twist on mount
}

const AutoTwistableImage: React.FC<AutoTwistableImageProps> = ({
  twistInterval = 5000,
  twistDuration = 1500,
  twistDegrees = 180,
  className = '',
  initialTwist = false,
  ...imageProps
}) => {
  const [rotation, setRotation] = useState(initialTwist ? twistDegrees : 0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const startTwisting = () => {
    // Prevent multiple animations from starting
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    
    // Toggle rotation between 0 and twistDegrees
    setRotation(prev => (prev === 0 ? twistDegrees : 0));
    
    // Clear animation flag after animation completes
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, twistDuration + 50); // Add a small buffer to ensure animation completes
  };

  // Set up twist interval
  useEffect(() => {
    // Start the interval for automatic twisting
    timerRef.current = setInterval(() => {
      startTwisting();
    }, twistInterval);
    
    // Clean up interval on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [twistInterval, twistDuration, twistDegrees]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`transform transition-transform rounded-full overflow-hidden ${className}`}
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: `transform ${twistDuration}ms ease-in-out`,
        }}
      >
        <Image
          className="rounded-full"
          {...imageProps}
        />
      </div>
    </div>
  );
};

export default AutoTwistableImage;
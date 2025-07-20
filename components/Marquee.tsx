import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getTechStackRows, Tech } from '@/data/techStack';

interface TechBadgeProps {
  tech: Tech;
}

interface MarqueeRowProps {
  items: Tech[];
  direction?: 'left' | 'right';
  speed?: number;
}

const TechMarquee: React.FC = () => {
  const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => (
    <motion.div 
      className="flex items-center space-x-2 bg-[#262626] backdrop-blur-sm border border-[#404040] rounded-full px-6 py-2 text-white whitespace-nowrap flex-shrink-0 cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(75, 85, 99, 0.5)',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white`}>
        {typeof tech.icon === 'string' ? (
          tech.icon
        ) : (
          <div className="text-white">
            {tech.icon}
          </div>
        )}
      </div>
      <span className="text-sm font-medium">{tech.name}</span>
    </motion.div>
  );

  const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction = 'left', speed = 40 }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Duplicate items multiple times for seamless infinite loop
    const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

    return (
      <div 
        className="relative overflow-hidden mask-fade w-full mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex space-x-4"
          animate={{
            x: direction === 'left' 
              ? [0, -100 / duplicatedItems.length * items.length + '%'] 
              : [-100 / duplicatedItems.length * items.length + '%', 0]
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
          style={{ 
            width: 'max-content',
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <TechBadge key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </div>
    );
  };

  // Organize tech stack into rows
  const { row1, row2, row3 } = getTechStackRows();

  return (
   <div className="w-full py-8">
    <div className="relative overflow-hidden">
      <div className="space-y-2 relative z-10">
        <MarqueeRow items={row1} direction="left" speed={30} />
        <MarqueeRow items={row2} direction="right" speed={30} />
        <MarqueeRow items={row3} direction="left" speed={30} />
      </div>
    </div>
  </div>
  );
};

export default TechMarquee;
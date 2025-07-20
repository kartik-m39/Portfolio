import React from 'react';
import Splash from '@/pages/Splash';

export default function MatrixBackground() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden z-[100]">
      {/* Matrix Grid Pattern */}
     <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64, 64, 64, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 64, 64, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          maskImage: `
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
            linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          maskComposite: 'intersect'
        }}
      />
      
      {/* Subtle overlay gradients */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(30, 30, 30, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(30, 30, 30, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(30, 30, 30, 0.6) 0%, transparent 50%)
          `
        }}
      />

    {/* Rendering the Intro Page Component */}
      <Splash />

      {/* Additional matrix elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-800/20 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-800/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-800/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gray-800/20 to-transparent" />
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';

interface ScratchBlockProps {
  block: {
    id: string;
    type: string;
    label: string;
    color: string;
    code: string;
    params: string[];
  };
  onRemove: () => void;
  index: number;
}

export default function ScratchBlock({ block, onRemove, index }: ScratchBlockProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBlockShape = () => {
    switch (block.type) {
      case 'control':
        return 'rounded-t-lg rounded-br-lg'; // C-shaped
      case 'motion':
        return 'rounded-lg'; // Rectangle
      case 'sensing':
        return 'rounded-lg'; // Rectangle
      default:
        return 'rounded-lg';
    }
  };

  const getBlockIcon = () => {
    switch (block.type) {
      case 'control':
        return '⚡';
      case 'motion':
        return '🔧';
      case 'sensing':
        return '👁️';
      default:
        return '📦';
    }
  };

  return (
    <div
      className={`relative group ${getBlockShape()} ${block.color} text-white p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `translateX(${index * 20}px)`,
        zIndex: index
      }}
    >
      {/* Block Content */}
      <div className="flex items-center space-x-3">
        <span className="text-lg">{getBlockIcon()}</span>
        <span className="font-semibold text-lg">{block.label}</span>
        
        {/* Parameter inputs */}
        {block.params.map((param, paramIndex) => (
          <div key={paramIndex} className="bg-white bg-opacity-20 rounded px-2 py-1 min-w-[60px]">
            <input
              type="text"
              placeholder={param}
              className="bg-transparent text-white placeholder-white placeholder-opacity-70 text-sm w-full outline-none"
              defaultValue={param}
            />
          </div>
        ))}
      </div>

      {/* Remove Button */}
      {isHovered && (
        <button
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors shadow-lg"
          title="Remove block"
        >
          ×
        </button>
      )}

      {/* Block Connector (bottom) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-b"></div>
      
      {/* Block Connector (top) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-t"></div>
    </div>
  );
} 
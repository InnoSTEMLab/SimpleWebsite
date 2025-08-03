'use client';

import { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScratchBlock from '../components/ScratchBlock';
import CodeOutput from '../components/CodeOutput';

export default function ScratchPage() {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const workspaceRef = useRef<HTMLDivElement>(null);

  const controlBlocks = [
    {
      id: 'if',
      type: 'control',
      label: 'if',
      color: 'bg-yellow-500',
      code: 'if (condition) {\n  // code here\n}',
      params: ['condition']
    },
    {
      id: 'if-else',
      type: 'control',
      label: 'if-else',
      color: 'bg-yellow-500',
      code: 'if (condition) {\n  // code here\n} else {\n  // code here\n}',
      params: ['condition']
    },
    {
      id: 'for',
      type: 'control',
      label: 'repeat',
      color: 'bg-yellow-500',
      code: 'for (int i = 0; i < times; i++) {\n  // code here\n}',
      params: ['times']
    },
    {
      id: 'while',
      type: 'control',
      label: 'repeat until',
      color: 'bg-yellow-500',
      code: 'while (condition) {\n  // code here\n}',
      params: ['condition']
    }
  ];

  const motionBlocks = [
    {
      id: 'digitalWrite',
      type: 'motion',
      label: 'set pin',
      color: 'bg-blue-500',
      code: 'digitalWrite(pin, value);',
      params: ['pin', 'value']
    },
    {
      id: 'analogWrite',
      type: 'motion',
      label: 'set pin PWM',
      color: 'bg-blue-500',
      code: 'analogWrite(pin, value);',
      params: ['pin', 'value']
    },
    {
      id: 'delay',
      type: 'motion',
      label: 'wait',
      color: 'bg-blue-500',
      code: 'delay(time);',
      params: ['time']
    }
  ];

  const sensingBlocks = [
    {
      id: 'digitalRead',
      type: 'sensing',
      label: 'read pin',
      color: 'bg-green-500',
      code: 'digitalRead(pin)',
      params: ['pin']
    },
    {
      id: 'analogRead',
      type: 'sensing',
      label: 'read analog pin',
      color: 'bg-green-500',
      code: 'analogRead(pin)',
      params: ['pin']
    }
  ];

  const handleDragStart = (e: React.DragEvent, block: any) => {
    e.dataTransfer.setData('block', JSON.stringify(block));
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const blockData = JSON.parse(e.dataTransfer.getData('block'));
    const newBlock = {
      ...blockData,
      id: `${blockData.id}-${Date.now()}`,
      position: { x: e.clientX, y: e.clientY }
    };
    
    setBlocks([...blocks, newBlock]);
    generateCode([...blocks, newBlock]);
  };

  const generateCode = (currentBlocks: any[]) => {
    let code = `// Generated Arduino Code\n\n`;
    code += `void setup() {\n`;
    code += `  // Setup code here\n`;
    code += `}\n\n`;
    code += `void loop() {\n`;
    
    currentBlocks.forEach(block => {
      code += `  ${block.code}\n`;
    });
    
    code += `}\n`;
    setGeneratedCode(code);
  };

  const removeBlock = (blockId: string) => {
    const newBlocks = blocks.filter(block => block.id !== blockId);
    setBlocks(newBlocks);
    generateCode(newBlocks);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="flex h-screen pt-16">
        {/* Block Palette */}
        <div className="w-80 bg-white border-r border-gray-300 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Blocks</h2>
          
          {/* Control Blocks */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-700">Control</h3>
            <div className="space-y-2">
              {controlBlocks.map((block) => (
                <div
                  key={block.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block)}
                  className={`${block.color} text-white p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity`}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>

          {/* Motion Blocks */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Motion</h3>
            <div className="space-y-2">
              {motionBlocks.map((block) => (
                <div
                  key={block.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block)}
                  className={`${block.color} text-white p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity`}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>

          {/* Sensing Blocks */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-700">Sensing</h3>
            <div className="space-y-2">
              {sensingBlocks.map((block) => (
                <div
                  key={block.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block)}
                  className={`${block.color} text-white p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity`}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">Arduino Scratch Programming</h1>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    setBlocks([]);
                    setGeneratedCode('');
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={copyCode}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex">
            {/* Scratch Workspace */}
            <div 
              ref={workspaceRef}
              className="flex-1 bg-gray-50 p-4 overflow-auto"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="min-h-full">
                {blocks.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-500">
                      <div className="text-6xl mb-4">🧩</div>
                      <p className="text-xl">Drag blocks here to start programming</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {blocks.map((block, index) => (
                      <ScratchBlock
                        key={block.id}
                        block={block}
                        onRemove={() => removeBlock(block.id)}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Code Output */}
            <div className="w-96 bg-gray-900 border-l border-gray-700">
              <CodeOutput code={generatedCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
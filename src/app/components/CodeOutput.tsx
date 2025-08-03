'use client';

interface CodeOutputProps {
  code: string;
}

export default function CodeOutput({ code }: CodeOutputProps) {
  const formatCode = (code: string) => {
    return code
      .split('\n')
      .map((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('//')) {
          return `<span class="text-green-400">${line}</span>`;
        } else if (trimmedLine.includes('void') || trimmedLine.includes('if') || trimmedLine.includes('for') || trimmedLine.includes('while')) {
          return `<span class="text-purple-400">${line}</span>`;
        } else if (trimmedLine.includes('digitalWrite') || trimmedLine.includes('analogWrite') || trimmedLine.includes('delay')) {
          return `<span class="text-blue-400">${line}</span>`;
        } else if (trimmedLine.includes('digitalRead') || trimmedLine.includes('analogRead')) {
          return `<span class="text-yellow-400">${line}</span>`;
        } else if (trimmedLine.includes('{') || trimmedLine.includes('}')) {
          return `<span class="text-pink-400">${line}</span>`;
        } else {
          return `<span class="text-gray-300">${line}</span>`;
        }
      })
      .join('\n');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">Generated Arduino Code</h3>
        <p className="text-sm text-gray-400">Copy this code to your Arduino IDE</p>
      </div>
      
      <div className="flex-1 p-4 overflow-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: formatCode(code || `// Generated Arduino Code

void setup() {
  // Setup code here
}

void loop() {
  // Drag blocks to generate code
}`) 
            }}
          />
        </pre>
      </div>
      
      <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {code.split('\n').length} lines of code
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              alert('Code copied to clipboard!');
            }}
            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
} 
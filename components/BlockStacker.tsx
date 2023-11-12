import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];

const BlockStacker = () => {
  const [stack, setStack] = useState<string[]>([]);

  const addBlock = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setStack(prevStack => [...prevStack, color]);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={addBlock} className="p-2 bg-blue-500 text-white rounded mt-4">Add Block</button>
      <div className="mt-4">
        {stack.map((color, index) => (
          <div key={index} className={`h-10 w-10 bg-${color}-500`}></div>
        ))}
      </div>
    </div>
  );
};

export default BlockStacker;
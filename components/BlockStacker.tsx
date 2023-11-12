import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];

const BlockStacker = () => {
  const [stack, setStack] = useState<{color: string, top: string, left: string}[]>([]);

  const addBlock = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = `${Math.floor(Math.random() * 100)}%`;
    const left = `${Math.floor(Math.random() * 100)}%`;
    setStack(prevStack => [...prevStack, {color, top, left}]);
  };

  return (
    <div className="relative h-screen w-screen">
      <button onClick={addBlock} className="p-2 bg-blue-500 text-white rounded mt-4 absolute top-0 right-0">Add Block</button>
      {stack.map((block, index) => (
        <div key={index} className={`h-10 w-10 bg-${block.color}-500 absolute`} style={{top: block.top, left: block.left}}></div>
      ))}
    </div>
  );
};

export default BlockStacker;
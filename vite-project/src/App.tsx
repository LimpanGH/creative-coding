import { useState } from 'react';
import Canvas from './components/Canvas';
import Controls from './components/Controls';

import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff');
  const [size, setSize] = useState(50)
  console.log(size);
  return (
    <>
      <div>
        <Canvas color={color} size={size}/>
        <Controls onColorChange={setColor} onSizeChange={setSize} size={size}/>
      </div>
    </>
  );
}

export default App;

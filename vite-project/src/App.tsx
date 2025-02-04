import { useState, useRef } from 'react';
import Canvas from './components/Canvas';
import Controls from './components/Controls';
import classes from './App.module.css';

function App() {
  const [color, setColor] = useState('#ffffff');
  const [size, setSize] = useState(50);
  const canvasRef = useRef<{ exportToSVG: () => void }>(null);

  const handleExport = () => {
    canvasRef.current?.exportToSVG();
  };
  console.log(size);
  return (
    <>
      <div className={classes['wrapper']}>
        <Canvas ref={canvasRef} color={color} size={size} />
        <Controls
          onColorChange={setColor}
          onSizeChange={setSize}
          size={size}
          onExport={handleExport}
        />
      </div>
    </>
  );
}

export default App;

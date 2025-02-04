import { useRef, useEffect } from 'react';
import classes from './Canvas.module.css'

interface CanvasProps {
  color: string;
  size: number;
}

const Canvas: React.FC<CanvasProps> = ({ color, size }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#282c34';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = color;
      context.beginPath();
      context.arc(250, 150, size, 0, Math.PI * 2);
      context.fill();
    }
  }, [color, size]);

  return (
    <div className={classes['canvasContainer']}>
      <canvas ref={canvasRef} width={500} height={300} className={classes['canvas']}/>;
    </div>
  );
};

export default Canvas;

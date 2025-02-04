import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import classes from './Canvas.module.css';

interface CanvasProps {
  color: string;
  size: number;
}

// const Canvas: React.FC<CanvasProps> = ({ color, size }) => {
const Canvas = forwardRef(({ color, size }: CanvasProps, ref) => {
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
      context.arc(canvas.width / 2, canvas.height / 2, size, 0, Math.PI * 2);
      context.fill();
    }
  }, [color, size]);

  const exportToSVG = () => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300">
        <rect width="500" height="300" fill="#282c34"/>
        <circle cx="250" cy="150" r="${size}" fill="${color}" />
      </svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'circle.svg';
    link.click();

    URL.revokeObjectURL(url);
  };

  useImperativeHandle(ref, () => ({ exportToSVG }));

  return (
    <div className={classes['canvasContainer']}>
      <canvas ref={canvasRef} width={500} height={300} className={classes['canvas']} />
    </div>
  );
});

export default Canvas;

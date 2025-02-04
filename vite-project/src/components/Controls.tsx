// import React from 'React';
import classes from './Controls.module.css';

interface ControlProps {
  onColorChange: (color: string) => void;
  onSizeChange: (size: number) => void;
  size: number;
}

const Controls: React.FC<ControlProps> = ({ onColorChange, onSizeChange, size }) => (
  <div className={classes['controls']}>
    <div className={classes['controlItem']}>
      <label>Pick a color:</label>
      <input type='color' onChange={(e) => onColorChange(e.target.value)} />
    </div>

    <div className={classes['controlItem']}>
      <label>Circle size: {size}px</label>
      <input
        type='range'
        min='10'
        max='150'
        value={size}
        onChange={(e) => onSizeChange(Number(e.target.value))}
      />
    </div>
  </div>
);

export default Controls;

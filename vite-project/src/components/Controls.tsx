import classes from './Controls.module.css';

interface ControlProps {
  onColorChange: (color: string) => void;
  onSizeChange: (size: number) => void;
  onExport: () => void;
  size: number;
}

const Controls: React.FC<ControlProps> = ({ onColorChange, onSizeChange, size, onExport }) => (
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

    <div className={classes['controlItem']}>
      <button onClick={onExport}>Export as SVG</button>
    </div>
  </div>
);

export default Controls;

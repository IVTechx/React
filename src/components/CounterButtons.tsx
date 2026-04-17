import styles from "./Counterbuttons.module.css";

interface CounterButtonsProps {
  onInc: () => void;
  onDec: () => void;
  onReset: () => void;
}

const CounterButtons = ({ onInc, onDec, onReset }: CounterButtonsProps) => {
  return (
    <div className={styles.btnGroup}>
      <button className={styles.btnDec} onClick={onDec}>Decrement</button>
      <button className={styles.btnReset} onClick={onReset}>Reset</button>
      <button className={styles.btnInc} onClick={onInc}>Increment</button>
    </div>
  );
};

export default CounterButtons;

import { firstUpperChar } from '../lib';
import classess from './input.module.css'

const Input = ({ onChange, value, name }: any) => {
const title = firstUpperChar(name);
  return (
    <div className={classess.formPart}>
      <label className={classess.label} htmlFor={name}>
        {title}
      </label>
      <input
        className={classess.input}
        onChange={onChange}
        value={value}
        type="text"
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;

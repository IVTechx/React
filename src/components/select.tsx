import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import { firstUpperChar } from "../lib";
import classess from "./select.module.css";

const Select = ({ onChange, value, name }: any) => {
  const title = firstUpperChar(name);

  return (
    <div className={classess.formPart}>
      <p>{title} </p>
      <select className={classess.label} onChange={onChange} value={value} name={name} id={name}>
        <option value="" hidden>
          Select {title}
        </option>
        <option value={Image1}>Alex</option>
        <option value={Image2}>Jordan</option>
        <option value={Image3}>Samantha</option>
      </select>
    </div>
  );
};

export default Select;

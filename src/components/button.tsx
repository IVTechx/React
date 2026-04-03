import { firstUpperChar } from "../lib";
import classess from "./button.module.css";

import { useEffect, useState } from "react";

const Button = ({ name, isDisabled }: any) => {
  const title = firstUpperChar(name);

  const [style, setStyle] = useState(classess.button);

  useEffect(() => {
    if (!isDisabled) {
      setStyle(classess.button + " " + classess.active);
    }
  }, [isDisabled]);

  return (
    <div className={classess.formPart}>
      <button className={style} type={name} disabled={isDisabled}>
        {title}
      </button>
    </div>
  );
};

export default Button;

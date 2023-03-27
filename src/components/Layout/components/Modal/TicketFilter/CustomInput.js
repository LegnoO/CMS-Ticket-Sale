/** @format */

import { forwardRef, useRef, useImperativeHandle } from "react";

const CustomInput = forwardRef(({ value, onClick, icon }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return (
    <div style={{ display: "flex" }} onClick={onClick}>
      <input type="text" value={value} ref={inputRef} readOnly />
      {icon}
    </div>
  );
});

export default CustomInput;

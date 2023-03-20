/** @format */

import React from "react";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({
  children,
  icon,
  small = false,
  iconLeft,
  iconRight,
  classNames,
}) => {
  const Comp = "button";

  const classes = cx("wrapper", { [classNames]: classNames, small });

  return (
    <Comp className={classes}>
      {iconLeft && <span className={cx("icon")}>{icon}</span>}
      <span className={cx("content")}>{children}</span>
      {iconRight && <span className={cx("icon")}>{icon}</span>}
    </Comp>
  );
};

export default Button;

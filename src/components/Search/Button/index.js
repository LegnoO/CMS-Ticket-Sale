/** @format */

import React from "react";
import { BsSearch } from "react-icons/bs";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = ({ placeholder }) => {
  return (
    <div className={cx("wrapper")}>
      <form>
        <input placeholder={placeholder} spellCheck={false} />
        <BsSearch className={cx("icon")} />
      </form>
    </div>
  );
};

export default Search;

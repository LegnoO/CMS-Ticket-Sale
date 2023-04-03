
/** @format */

import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { fetchTicket, searchTicket } from "../../features/ticketSlice";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Search = ({ placeholder }) => {
  let searchValue = useRef("");
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.firebase);

  useEffect(() => {
    if (searchValue.current === "" && isLoading) {
      dispatch(fetchTicket("ticket"));
    }
  }, [searchValue.current]); // check search value and callback api when empty

  return (
    <div className={cx("wrapper")}>
      <form>
        <input
          onChange={(e) => {
            searchValue.current = e.target.value;
            dispatch(searchTicket({ data, searchValue }));
          }}
          placeholder={placeholder}
          spellCheck={false}
        />
        <BsSearch className={cx("icon")} />
      </form>
    </div>
  );
};

export default Search;

/** @format */

import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./TicketFilter.module.scss";
import Button from "../../../../Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import ModalWrapper from "../ModalWrapper";
import CustomInput from "./CustomInput";

import { findTicketByDate } from "../../../../../features/ticketSlice.js";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

const TicketFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checkStatus, setCheckStatus] = useState();
  const [checkGate, setCheckGate] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.firebase.data);
  useEffect(() => {}, []);

  const dateFilter = {
    startDate: startDate.getTime() / 1000,
    endDate: endDate.getTime() / 1000,
    // testDate: new Date("03/26/2023").getTime() / 1000,
  };

  const checkStatusInput = [
    { name: "status_all", label: "Tất cả" },
    { name: "used", label: "Đã sử dụng" },
    { name: "unused", label: "Chưa sử dụng" },
    { name: "expired", label: "Hết hạn" },
  ];

  const checkGateInput = [
    { name: "gate1", label: "Cổng 1" },
    { name: "gate2", label: "Cổng 2" },
    { name: "gate3", label: "Cổng 3" },
    { name: "gate4", label: "Cổng 4" },
    { name: "gate5", label: "Cổng 5" },
  ];

  const handleSearchTicket = () => {
    dispatch(findTicketByDate({ data, dateFilter }));
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={cx("wrapper")}>
      <h2>Lọc vé</h2>

      <div className={cx("date")}>
        {/* defaultValue={new Date().toISOString().substr(0, 10)} */}
        <div className={cx("date-picker")}>
          <div className={cx("content")}>
            <h4>Từ ngày</h4>
            <div className={cx("start-date")}>
              <DatePicker
                classNames="test"
                selected={startDate.setHours(0, 0, 0, 0)}
                onChange={(date) => {
                  setStartDate(date);
                  console.log(dateFilter);
                }}
                dateFormat="dd/MM/yyyy"
                timeZone="Asia/Shanghai"
                customInput={
                  <CustomInput
                    icon={<FaCalendarAlt style={{ color: "#FF993C" }} />}
                    ref={inputRef}
                  />
                }
              />
            </div>
          </div>
          <div className={cx("content")}>
            <h4>Đến ngày</h4>
            <div className={cx("end-date")}>
              <DatePicker
                classNames="test"
                selected={endDate.setHours(23, 59, 59, 59)}
                onChange={(date) => {
                  setEndDate(date);
                  console.log(dateFilter);
                }}
                dateFormat="dd/MM/yyyy"
                customInput={
                  <CustomInput
                    icon={<FaCalendarAlt style={{ color: "#FF993C" }} />}
                    ref={inputRef}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cx("status")}>
        <h4>Tình trạng sử dụng</h4>

        <div className={cx("checkbox")}>
          {checkStatusInput.map((data, index) => (
            <div key={index} className={cx("checkbox-item")}>
              <input
                onChange={(e) => setCheckStatus(e.target.name)}
                id={data.name}
                name={data.name}
                type="radio"
                checked={checkStatus === data.name}
              />
              <label htmlFor={data.name}>{data.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={cx("gate")}>
        <h4>Cổng Check-in</h4>
        <div className={cx("checkbox")}>
          <div className={cx("checkbox-item")}>
            <input
              onChange={(e) => {
                setCheckAll((prev) => !prev);
                setCheckGate(e.target.name);
              }}
              type="checkbox"
              id="gate_all"
              name="gate_all"
            />
            <label htmlFor="gate_all">Tất cả</label>
          </div>

          {checkGateInput.map((data, index) => (
            <div key={index} className={cx("checkbox-item")}>
              <input
                onChange={(e) => {
                  setCheckGate(e.target.name);
                }}
                type="checkbox"
                id={data.name}
                name={data.name}
                disabled={checkAll}
              />
              <label htmlFor={data.name}>{data.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={cx("button")}>
        {/* <span
          onClick={() => {
            console.log(dateFilter, " ", {
              startDate: new Date(startDate),
              endDate: new Date(endDate),
            });

            console.log("nhập ", new Date(1681059600 * 1000));
          }}
          style={{ display: "" }}>
          <Button>Show</Button>
        </span> */}

        <span onClick={handleSearchTicket}>
          <Button className={cx("")}>Lọc</Button>
        </span>
      </div>
    </div>
  );
};

export default TicketFilter;

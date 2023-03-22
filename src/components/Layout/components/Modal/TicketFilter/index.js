/** @format */

import React from "react";
import classNames from "classnames/bind";
import styles from "./TicketFilter.module.scss";
import Button from "../../../../Button";
const cx = classNames.bind(styles);

const TicketFilter = () => {
  return (
    <div
      onClick={() => {
        alert();
      }}
      className={cx("wrapper")}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cx("inner")}>
        <div className={cx("close")}>&times;</div>
        <h2>Lọc vé</h2>
        <div className={cx("date")}></div>

        <div className={cx("status")}>
          <h4>Tình trạng sử dụng</h4>

          <div className={cx("checkbox")}>
            <div className={cx("checkbox-item")}>
              <input type="checkbox" />
              <label for="all">Tất cả</label>
            </div>
            <div className={cx("checkbox-item")}>
              <input id="used" type="checkbox" />
              <label for="used">Đã sử dụng</label>
            </div>
            <div className={cx("checkbox-item")}>
              <input id="unused" type="checkbox" />
              <label for="unused">Chưa sử dụng</label>
            </div>
            <div className={cx("checkbox-item")}>
              <input type="checkbox" />
              <label for="expired">Hết hạn</label>
            </div>
          </div>
        </div>

        <div className={cx("gate")}>
          <h4>Cổng Check-in</h4>
          <div className={cx("checkbox")}>
            <div className={cx("col-1")}>
              <div className={cx("checkbox-item")}>
                <input id="check-all" type="checkbox" />
                <label for="check-all">Tất cả</label>
              </div>
              <div className={cx("checkbox-item")}>
                <input id="gate1" type="checkbox" />
                <label for="gate1">Cổng 1</label>
              </div>
              <div className={cx("checkbox-item")}>
                <input id="gate2" type="checkbox" />
                <label for="gate2">Cổng 2</label>
              </div>
            </div>
            <div className={cx("col-2")}>
              <div className={cx("checkbox-item")}>
                <input id="gate3" type="checkbox" />
                <label for="gate3">Cổng 3</label>
              </div>
              <div className={cx("checkbox-item")}>
                <input id="gate4" type="checkbox" />
                <label for="gate4">Cổng 4</label>
              </div>
              <div className={cx("checkbox-item")}>
                <input id="gate5" type="checkbox" />
                <label for="gate5">Cổng 5</label>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("button")}>
          <button style={{ display: "none" }}>Hủy</button>
          <Button className={cx("")}>Lọc</Button>
        </div>
      </div>
    </div>
  );
};

export default TicketFilter;

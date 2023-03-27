/** @format */

import classNames from "classnames/bind";
import styles from "./ModalWrapper.module.scss";
const cx = classNames.bind(styles);

const ModalWrapper = ({ children, modal, toggleModal }) => {
  return (
    <>
      {modal && (
        <div
          onClick={() => {
            toggleModal(!modal);
          }}
          className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div
              onClick={() => {
                toggleModal(!modal);
              }}
              className={cx("close")}>
              &times;
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWrapper;

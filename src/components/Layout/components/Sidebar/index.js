/** @format */

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Button from "../../../Button";
const cx = classNames.bind(styles);

const Sidebar = () => {
  const menuItem = [
    {
      text: "Trang chủ",
      icon: <AiOutlineHome />,
    },
    {
      text: "Quản lý vé",
      icon: <BsTicketPerforated />,
    },
    {
      text: "Đối soát vé",
      icon: <TbFileInvoice />,
    },
    {
      text: "Cài đặt",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <a href="">
          <img
            src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/335968345_131426836542206_8133676188727322024_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=h1EauwMC5-kAX-8cQ2T&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTML3UUgL9hTpFTziFXt_G50NGYoLreMWfyMYiMDf-OIw&oe=643A08EC"
            alt=""
          />
        </a>
      </div>

      <div className={cx("menu")}>
        <ul className={cx("list")}>
          {menuItem.map((data, index) => (
            <li key={index} className={cx("item")}>
              <Button iconLeft icon={data.icon}>
                {data.text}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

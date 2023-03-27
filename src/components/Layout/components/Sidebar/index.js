/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { fetchTicket } from "../../../../features/ticketSlice";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Button from "../../../Button";
const cx = classNames.bind(styles);

const Sidebar = () => {
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const menuItem = [
    {
      text: "Trang chủ",
      icon: <AiOutlineHome />,
      to: "/",
    },
    {
      text: "Quản lý vé",
      icon: <BsTicketPerforated />,
      to: "/list",
      onClick: () => {
        dispatch(fetchTicket("ticket"))
      },
    },
    {
      text: "Đối soát vé",
      icon: <TbFileInvoice />,
      to: "/control",
    },
    {
      text: "Cài đặt",
      icon: <FiSettings />,
      to: "/setting",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <Link to="/">
          <img
            src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/335968345_131426836542206_8133676188727322024_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=h1EauwMC5-kAX-8cQ2T&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTML3UUgL9hTpFTziFXt_G50NGYoLreMWfyMYiMDf-OIw&oe=643A08EC"
            alt=""
          />
        </Link>
      </div>

      <div className={cx("menu")}>
        <ul className={cx("list")}>
          {menuItem.map((data, index) => (
            <li
              key={index}
              onClick={() => {
                setActive(index);
              }}
              className={cx(["item", active === index ? "active" : undefined])}>
              {/* className={cx("item","active")}> */}
              <Button
                onClick={data.onClick}
                contentLeft
                className={cx(["test"])}
                iconLeft
                icon={data.icon}
                to={data.to}>
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

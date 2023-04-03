/** @format */
import "./datePicker.css";
import { useState, useEffect } from "react";
import {
  fetchTicket,
  findTicketByDate,
  searchTicket,
} from "../../features/ticketSlice";
import { FiFilter } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { dateFormat } from "../../services/date";
import { useDispatch, useSelector } from "react-redux";
import { FiMoreVertical } from "react-icons/fi";
import { addData, updateData } from "../../api";

import classNames from "classnames/bind";
import styles from "./TicketList.module.scss";
import Search from "../../components/Search";
import Button from "../../components/Button";
import TicketFilter from "../../components/Layout/components/Modal/TicketFilter";
import TicketUpdate from "../../components/Layout/components/Modal/TicketUpdate";

import ModalWrapper from "../../components/Layout/components/Modal/ModalWrapper";
const cx = classNames.bind(styles);

const TicketList = () => {
  const [modalFilterTicket, toggleModalFilterTicket] = useState(false);
  const [updateTicket, setUpdateTicket] = useState({});
  const [modalEdit, toggleModalEdit] = useState(false);

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.firebase);

  const ticketStatus = (data) => {
    const status = data;
    let statusClass = cx("");
    if (status === "Hết hạn") {
      statusClass = cx("red");
    } else if (status === "Chưa sử dụng") {
      statusClass = cx("green");
    } else if (status === "Đã sử dụng") {
      statusClass = cx("normal");
    }
    return (
      <td id={cx(["status"])} className={statusClass}>
        <Button iconLeft icon={<GoPrimitiveDot />}>
          {data}
        </Button>
      </td>
    );
  };

  useEffect(() => {
    dispatch(fetchTicket("ticket"));
  }, []);

  const titleTicket = [
    "STT",
    "Booking code",
    "Số vé",
    "Tên sự kiện",
    "Tình trạng sử dụng",
    "Ngày sử dụng",
    "Ngày xuất vé",
    "Cổng",
    "",
  ];

  return (
    <div className={cx("wrapper")}>
      <ModalWrapper
        modal={modalFilterTicket}
        toggleModal={toggleModalFilterTicket}>
        <TicketFilter />
      </ModalWrapper>

      <ModalWrapper modal={modalEdit} toggleModal={toggleModalEdit}>
        <TicketUpdate data={updateTicket} />
      </ModalWrapper>

      <h2>Danh sách vé</h2>
      <div className={cx("nav")}>
        <Search className={cx("search-nav")} placeholder="Tìm bằng số vé" />
        <div className={cx("action-btn")}>
          <span
            onClick={(e) => {
              e.preventDefault();
              toggleModalFilterTicket((prev) => !prev);
            }}>
            <Button
              borderColor="#ff993c"
              color="#ff993c"
              iconLeft
              icon={<FiFilter />}>
              Lọc vé
            </Button>
          </span>

          <Button
            borderColor="#ff993c"
            color="#ff993c"
            className={cx("export-btn")}>
            Xuất file (.csv)
          </Button>
        </div>
      </div>

      <div className={cx("data-list")}>
        <table>
          <thead>
            <tr className={cx("thread")}>
              {titleTicket.map((data, index) => (
                <th key={index} className={cx("title")}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={cx("list")}>
            {data?.map((data, index) => {
              return (
                <tr key={data.id} className={cx("item")}>
                  <td id="stt">{index + 1}</td>
                  <td id="booking-code">{data.data.blocking_code}</td>
                  <td id="ticket-number">{data.data.ticket_number}</td>
                  <td id="event-name">{data.data.event}</td>
                  {ticketStatus(data.data.status)}
                  <td id="date-use">
                    {dateFormat(data.data.date_use.seconds)}
                  </td>
                  <td id="issuance_date">
                    {dateFormat(data.data.issuance_date.seconds)}
                  </td>
                  <td id="gate">{data.data.gate}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        setUpdateTicket({
                          id: data.id,
                          blocking_code: data.data.blocking_code,
                          gate_type: data.data.gate_type,
                          event: data.data.event,
                          number: data.data.ticket_number,
                          date: data.data.issuance_date,
                        });
                        e.preventDefault();
                        toggleModalEdit((prev) => !prev);
                      }}
                      className={cx("edit-button")}>
                      <FiMoreVertical />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;

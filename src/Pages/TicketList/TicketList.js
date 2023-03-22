/** @format */
import { useState, useEffect } from "react";
import { fetchTicket } from "../../features/ticketSlice";
import { FiFilter } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { dateFormat } from "../../services/date";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./TicketList.module.scss";
import Search from "../../components/Search/Button";
import Button from "../../components/Button";
import TicketFilter from "../../components/Layout/components/Modal/TicketFilter";

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const cx = classNames.bind(styles);

const TicketList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.firebase.data);
  const status = useSelector((state) => state.firebase.status);
  const error = useSelector((state) => state.firebase.error);

  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const result = await fetchData();
  //   // console.log(
  //   //   result.filter((data) => {
  //   //     return data;
  //   //   })
  //   // );
  //   result.sort((a, b) => a.data.stt - b.data.stt);
  //   setData(result);
  // };


  const ticketStatus = (data) => {
    const status = data;
    let statusClass = cx("");
    if (status === "Đã hết hạn") {
      statusClass = cx("red");
    } else if (status === "Đã sử dụng") {
      statusClass = cx("green");
    } else if (status === "Đang sử dụng") {
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
  }, [dispatch]);

  const titleTicket = [
    "STT",
    "Booking code",
    "Số vé",
    "Tên sự kiện",
    "Tình trạng sử dụng",
    "Ngày sử dụng",
    "Ngày xuất vé",
    "Cổng",
  ];

  // console.log(new Date("2023-03-20"));
  return (
    <div className={cx("wrapper")}>
      {/* <TicketFilter /> */}
      <h2>Danh sách vé</h2>
      <div className={cx("nav")}>
        <Search className={cx("search-nav")} placeholder="Tìm bằng số vé" />
        <div className={cx("action-btn")}>
          <Button iconLeft icon={<FiFilter />}>
            Lọc vé
          </Button>
          <Button className={cx("export-btn")}>Xuất file (.csv)</Button>
        </div>
      </div>

      {/* <div className={cx("table")}> */}
      {/* <ul className={cx("list")}>
                {titleTicket.map((data) => (
                  <li className={cx("name")}>{data}</li>
                ))}
              </ul> */}
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
            {data?.map((data) => {
              return (
                <tr key={data.id} className={cx("item")}>
                  <td id="stt">{data.data.stt}</td>
                  <td id="booking-code">{data.data.blockingcode}</td>
                  <td id="ticket-number">{data.data.ticket_number}</td>
                  <td id="event-name">{data.data.event}</td>

                  {ticketStatus(data.data.status)}

                  <td id="date-use">
                    {dateFormat(data.data.date_use.seconds)}
                  </td>
                  <td id="issuance_date">
                    {dateFormat(data.data.issuance_date.seconds)}
                    {/* {console.log(dateFormat(1496275200))} */}
                  </td>
                  <td id="gate">{data.data.gate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TicketList;

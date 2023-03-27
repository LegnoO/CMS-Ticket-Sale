/** @format */

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const fetchData = async (collectionName) => {
  const getTicket = await getDocs(collection(db, collectionName));
  const result = getTicket.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
  // console.log(result)
  return result;
};

export const filterTicketsByDate = ({ data, dateFilter }) => {
  const newData = [...data].filter((value) => {
    return (
      (value.data.date_use.seconds >= dateFilter.startDate &&
        value.data.date_use.seconds <= dateFilter.endDate) ||
      (value.data.issuance_date.seconds >= dateFilter.startDate &&
        value.data.issuance_date.seconds <= dateFilter.endDate)
    );
  });
  // console.log(newData);
  return newData;
};

export const searchData = ({ data, searchValue }) => {
  const newData = [...data];
  const result = newData.filter((value) => {
    return value.data.ticket_number.includes(searchValue);
  });
  // console.log(result);
  return result;
};





export const addData = async (data) => {
  addDoc(collection(db, "ticket"), {
    blocking_code: "FPT7512",
    date_use: new Date("2023-4-10"),
    event: "Sự kiện khai giảng 2023",
    gate: "cổng 1",
    gate_type: "Vé cổng",
    issuance_date: new Date(),
    status: "Đang sử dụng",
    stt: "2",
    ticket_number: "741954876",
  }).then((response) => {
    console.log(response).catch((error) => {
      console.log(error.message);
    });
  });
};

/** @format */

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export const fetchData = async (collectionName) => {
  const getTicket = await getDocs(collection(db, collectionName));
  const result = getTicket.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
  // console.log(result);
  return result;
};

export const updateData = async (id, { issuance_date }) => {
  console.log(id, " ", issuance_date);
  const ticketRef = doc(db, "ticket", id);
  await updateDoc(ticketRef, { issuance_date: issuance_date });
};

export const filterTicketsByDate = ({
  data,
  dateFilter,
  checkStatus,
  checkGate,
}) => {
  // console.log({ data, dateFilter, checkStatus, checkGate });
  const newData = [...data].filter((value) => {
    return (
      ((value.data.date_use.seconds >= dateFilter.startDate &&
        value.data.date_use.seconds <= dateFilter.endDate) ||
        (value.data.issuance_date.seconds >= dateFilter.startDate &&
          value.data.issuance_date.seconds <= dateFilter.endDate)) &&
      checkStatus.includes(value.data.status) &&
      checkGate.includes(value.data.gate)
    );
  });
  // console.log(newData);
  return newData;
};

export const searchData = ({ data, searchValue }) => {
  const newData = [...data];

  const result = newData.filter((value) => {
    return value.data.ticket_number.includes(searchValue.current);
  });
  // console.log(result);
  return result;
};

function randomDateInRange(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const randomTime = Math.random() * (end - start) + start;
  const randomDate = new Date(randomTime);
  randomDate.setHours(0, 0, 0);
  return randomDate;
}

const randomStatus = () => {
  const random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      return "Đã sử dụng";
    case 2:
      return "Chưa sử dụng";
    case 3:
      return "Hết hạn";
    default:
      return "";
  }
};

const randomTicketType = () => {
  const random = Math.floor(Math.random() * 2 + 1);
  switch (random) {
    case 1:
      return "Vé sự kiện";
    case 2:
      return "Vé gia đình";
    default:
      return "";
  }
};

export const addData = async () => {
  await addDoc(collection(db, "ticket"), {
    blocking_code: "ALT20210501",
    date_use: randomDateInRange("2022-01-01", "2023-12-31"),
    event: "Sự kiện khai giảng 2023",
    gate: `Cổng ${Math.round(Math.random() * (5 - 1) + 1)}`,
    gate_type: randomTicketType(),
    issuance_date: randomDateInRange("2022-01-01", "2023-12-31"),
    status: randomStatus(),
    ticket_number: Math.round(
      Math.random() * (1000000000 - 100000000) + 100000000
    ).toString(),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

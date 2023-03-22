/** @format */

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const fetchData = async (collectionName) => {
  const getTicket = await getDocs(collection(db, collectionName));

  return getTicket.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
};

// export const addData = async (data) => {
//   addDoc(collection(db, "ticket"), {
//     blockingcode: "FPT7512",
//     // date_use: Date.parse("January 12, 2023 at 12:00:00 AM UTC+7"),
//     date_use: new Date("2023-4-10"),
//     event: "Sự kiện khai giảng 2023",
//     gate: "cổng 1",
//     gate_type: "Vé cổng",
//     issuance_date: new Date(),
//     status: "Đang sử dụng",
//     stt: "2",
//     ticket_number: "741954876",
//   }).then((response) => {
//     console.log(response).catch((error) => {
//       console.log(error.message);
//     });
//   });
// };

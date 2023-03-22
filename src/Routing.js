/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/Layout/DefaultLayout";
import TicketControl from "./Pages/TicketControl/TicketControl";
import TicketList from "./Pages/TicketList/TicketList";
import Setting from "./Pages/Setting/Setting";
import Home from "./Pages/Home/Home";

function Routing() {

  const pages = [
    {
      page: <Home />,
      path: "/",
    },
    {
      page: <TicketList />,
      path: "/list",
    },
    {
      page: <TicketControl />,
      path: "/control",
    },
    {
      page: <Setting />,
      path: "/setting",
    },
  ];

  return (
    <Router>
      <Routes>
        {pages.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<DefaultLayout>{route.page}</DefaultLayout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default Routing;

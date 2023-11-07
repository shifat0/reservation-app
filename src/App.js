import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HotelList from "./Pages/HotelList/HotelList";
import Hotel from "./Pages/Hotel/Hotel";
import Login from "./Pages/Login/Login";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/hotels",
      element: <HotelList />,
    },
    {
      path: "/hotels/:id",
      element: <Hotel />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {/* <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<Hotel />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

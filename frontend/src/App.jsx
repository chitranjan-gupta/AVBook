import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Error from "./components/Error";
import Advertise from "./components/Advertise";
import Download from "./components/Download";
import Movies from "./components/Movies";
import Request from "./components/Request";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Signout from "./components/Signout";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/advertise" element={<Advertise />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/signout" element={<Signout />}></Route>
        <Route path="/404" element={<Error />}></Route>
        <Route element={<Error />}></Route>
      </Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

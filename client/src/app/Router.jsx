import { Route, Routes } from "react-router-dom";
import { ROUTES, SIDEBAR_ROUTES } from "../constants";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashLayout from "./layouts/DashLayout";
import HomeLayout from "./layouts/HomeLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Route>
      <Route element={<DashLayout />}>
        <Route path={SIDEBAR_ROUTES.home} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

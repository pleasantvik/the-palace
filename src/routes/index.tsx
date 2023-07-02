import AppLayout from "@/layout/Dashboard";
import Bookings from "@/views/Bookings";
import Settings from "@/views/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import CabinsHomePage from "@/views/cabins/index";
import DrawerContextProvider from "@/context/DrawerContext";

const index = () => {
  return (
    <DrawerContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<p>Hello</p>} />
            <Route path="cabins" element={<CabinsHomePage />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DrawerContextProvider>
  );
};

export default index;

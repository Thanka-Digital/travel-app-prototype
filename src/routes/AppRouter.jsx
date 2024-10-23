import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home_Page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

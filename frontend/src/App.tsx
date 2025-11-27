import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AllRequest from "./pages/request/AllRequest";
import MyRequest from "./pages/request/MyRequest";
import AddRequest from "./pages/request/AddRequest";
import SpecificRequest from "./pages/request/SpecificRequest";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Chat from "./pages/Chat";
import Notification from "./pages/Notification";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className=" min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/requests" element={<AllRequest />} />
        <Route path="/myrequests" element={<MyRequest />} />
        <Route path="/addrequests" element={<AddRequest />} />
        <Route path="/request/:id" element={<SpecificRequest />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/notifications" element={<Notification />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

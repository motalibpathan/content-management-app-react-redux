import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-[#003580] h-[calc(100vh-25px)] p-5 rounded-lg text-white">
      <ul className="flex gap-3  flex-col h-full">
        <li className="border-b pb-3 border-white">Admin Dashboard</li>
        <li>
          <Link to="/dashboard">Post List</Link>
        </li>
        <li>
          <Link to="write">Add Post </Link>
        </li>
        <li className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

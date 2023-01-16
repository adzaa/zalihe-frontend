import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Kontrolna tabla
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Proizvodi
            </NavLink>
          </li>
          <li>
            <NavLink to={"/suppliers"}>
              <IoPricetag /> Dobavljači
            </NavLink>
          </li>
          <li>
            <NavLink to={"/sirovine"}>
              <IoPricetag /> Sirovine
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Zaposlenici
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
        <li>
        {user && user.uuid && (
           <NavLink to={`/users/edit/${user.uuid}`}> <IoPerson />Postavke Naloga</NavLink>
      )}  
      </li>
        <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Odjava
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

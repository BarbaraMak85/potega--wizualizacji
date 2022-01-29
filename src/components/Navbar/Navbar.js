import React from "react";
import { useState, useEffect } from "react";
import { getListFromApi } from "../../api/listApi";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [listMenu, setListMenu] = useState([]);

  const getListMenu = async () => {
    const response = await getListFromApi();
    console.log(response, "respose");
    setListMenu(response.data.items);
  };
  useEffect(() => {
    getListMenu();
  }, []);
  return (
    <div className={style.container}>
      <ul className={style.containerList}>
        {listMenu.map((item) => (
          <li className={style.list} key={item.id}>
            <NavLink to={item.url}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <hr className={style.lineMenu}></hr>
    </div>
  );
};

export default Navbar;

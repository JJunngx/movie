import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon";
const NavBar = () => {
  const [navbarClass, setNavbarClass] = useState("fixed-top");

  useEffect(() => {
    // Hàm xử lý sự kiện scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarClass("fixed-top bg-dark");
      } else {
        setNavbarClass("fixed-top");
      }
    };

    // Đăng ký sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Hủy đăng ký sự kiện khi unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`d-flex justify-content-between p-2  ${navbarClass} `}>
        <Link to="/" className="text-decoration-none">
          <h1 className="text-danger fw-bold">Movie App</h1>
        </Link>

        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>
    </>
  );
};

export default NavBar;

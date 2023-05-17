"use client";

import Pages from "@/components/pages/Pages";
import SideMenu from "@/components/sideMenu/SideMenu";
import "./page.scss";
import React, { useState } from "react";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user: string | undefined = "Evano";

  return (
    <div className={`page container ${isMenuOpen ? "menu-open" : ""}`}>
      <div onClick={toggleMenu} className="page__menu menu">
        <button type="button" className="menu__icon icon__menu">
          <span></span>
        </button>
      </div>
      <aside className="page-aside">
        <SideMenu user={user} />
      </aside>
      <main className="page-main main">
        <p className="main-text__hello">Hello {user} 👋🏼,</p>
        <Pages />
      </main>
    </div>
  );
};

export default page;

"use client";

import Pages from "@/components/pages/Pages";
import SideMenu from "@/components/sideMenu/SideMenu";
import "./page.scss";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user: string | undefined = "Evano";
  const pageAsideRef = useRef<HTMLElement | null>(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleClickOutside() {
    if (pageAsideRef.current) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className={`page container ${isMenuOpen ? "menu-open" : ""}`}>
      <div onClick={toggleMenu} className="page__menu menu">
        <button type="button" className="menu__icon icon__menu">
          <span></span>
        </button>
      </div>
      <aside ref={pageAsideRef} className="page-aside">
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

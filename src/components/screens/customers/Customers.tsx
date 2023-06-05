import Image from "next/image";
import "./Customers.scss";
import SearchIconImage from "@/img/customers/searchIcon/search.svg";
import React, { useState } from "react";
import Link from "next/link";

const Customers = () => {
  const searchIcon = {
    sizeSearchIcon: 24,
    imageSearchIcon: SearchIconImage,
  };

  const customers = [
    {
      customerName: "Jane Cooper",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      customerName: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      customerName: "Marvin McKinney",
      company: "Tesla",
      phoneNumber: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      customerName: "Jerome Bell",
      company: "Google",
      phoneNumber: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      customerName: "Kathryn Murphy",
      company: "Microsoft",
      phoneNumber: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      customerName: "Jacob Jones",
      company: "Yahoo",
      phoneNumber: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      customerName: "Kristin Watson",
      company: "Facebook",
      phoneNumber: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ];

  const [searchValue, setSearchValue] = React.useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  function customersSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const handleButtonSearch = () => {
    console.log("click");
    const searchInput: HTMLElement | null =
      document.querySelector<HTMLElement>("#customersSearch");
    if (searchInput !== null) {
      searchInput.style.display !== "block"
        ? (searchInput.style.display = "block")
        : searchInput.style.display = "none";
    }
  };

  return (
    <section className="customers">
      <div className="customers__container">
        <div className="customers-menu">
          <div className="customers-menu__header customers-header">
            <h2 className="customers-header__title">All Customers</h2>
            <p className="customers-header__sup-title">Active Members</p>
          </div>
          <div className="customers-search-block">
            <button
              className="customers-search-button"
              onClick={handleButtonSearch}
            >
              <Image
                alt="Search"
                src={searchIcon.imageSearchIcon}
                width={searchIcon.sizeSearchIcon}
                height={searchIcon.sizeSearchIcon}
              />
            </button>
            <input
              id="customersSearch"
              className="customers-search"
              type="text"
              placeholder="Search"
              onChange={customersSearchChange}
            />
          </div>
        </div>
        <div className="customers__table-block">
          <table className="customers-table">
            <thead className="customers-thead">
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="customers-tbody">
              {customers
                .filter((item) =>
                  Object.values(item).some(
                    (value) =>
                      value
                        .toString()
                        .toLowerCase()
                        .indexOf(searchValue.toLowerCase()) !== -1
                  )
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.customerName}</td>
                    <td>{item.company}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.country}</td>
                    <td
                      id="status"
                      className={
                        item.status === "Active"
                          ? "active"
                          : item.status === "Inactive"
                          ? "inactive"
                          : ""
                      }
                    >
                      <button> {item.status}</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="customers-pagination">
          <div className="customers-pagination__info">
            Showing data 1 to 8 of 256K entries
          </div>
          <ul className="customers-pagination__numbers pagination-list">
            <li className="pagination-list__item">
              <Link href="#prev">{"<"}</Link>
            </li>
            <li className="pagination-list__item pagination-item__active">
              <Link href="#1">1</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#2">2</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#3">3</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#4">4</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#...">...</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#40">40</Link>
            </li>
            <li className="pagination-list__item">
              <Link href="#next">{">"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Customers;

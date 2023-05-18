import Image from "next/image";
import "./Customers.scss";
const Customers = () => {
  const sizeSearchIcon = 24;
  const data = [
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
  return (
    <section className="customers">
      <div className="customers__container">
        <div>
          <div>
            <h2>All Customers</h2>
            <p>Active Members</p>
          </div>
          <div>
            <Image
              alt="Search"
              src="@/img/customers/searchIcon/search.svg"
              width={sizeSearchIcon}
              height={sizeSearchIcon}
            />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.customerName}</td>
                <td>{item.company}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Customers;

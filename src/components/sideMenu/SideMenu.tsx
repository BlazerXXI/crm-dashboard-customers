import Link from "next/link";
import "./SideMenu.scss";
import Image from "next/image";
import icon1 from "@/img/aside/icons/key-square.svg";
import icon2 from "@/img/aside/icons/3d-square.svg";
import icon3 from "@/img/aside/icons/user-square.svg";
import icon4 from "@/img/aside/icons/wallet-money.svg";
import icon5 from "@/img/aside/icons/discount-shape.svg";
import icon6 from "@/img/aside/icons/message-question.svg";
import avatar from "@/img/aside/avatar.jpg";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu__title side-title">
        <Link className="side-title__link side-title-link" href={"/"}>
          <h2 className="side-title-link__title">Dashboard</h2>
          <p className="side-title-link__suptitle">v.01</p>
        </Link>
      </div>
      <nav>
        <ul className="side-menu__list">
          <li className="side-menu__item">
            <Image src={icon1} alt="image" width={24} height={24} />
            <Link className="side-item__link" href={"/"}>
              Dashboard
            </Link>
          </li>
          <li className="side-menu__item">
            <Image src={icon2} alt="image" width={24} height={24} />{" "}
            <Link className="side-item__link" href={"/"}>
              Product
            </Link>
          </li>
          <li className="side-menu__item">
            <Image src={icon3} alt="image" width={24} height={24} />{" "}
            <Link className="side-item__link" href={"/"}>
              Customers
            </Link>
          </li>
          <li className="side-menu__item">
            <Image src={icon4} alt="image" width={24} height={24} />{" "}
            <Link className="side-item__link" href={"/"}>
              Income
            </Link>
          </li>
          <li className="side-menu__item">
            <Image src={icon5} alt="image" width={24} height={24} />
            <Link className="side-item__link" href={"/"}>
              Promote
            </Link>
          </li>
          <li className="side-menu__item">
            <Image src={icon6} alt="image" width={24} height={24} />
            <Link className="side-item__link" href={"/"}>
              Help
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="side-menu__user side-user" href={"/user"}>
        <Image className="side-user__image" src={avatar} alt="user" />
        <div className="side-user__name-block user-name-block">
          <h3 className="user-name-block__name">Evano</h3>
          <p className="user-name-block__role">Project Manager</p>
        </div>
      </Link>
    </div>
  );
};

export default SideMenu;

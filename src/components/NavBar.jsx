import "./NavBar.css";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.png";
import SearchBar from "./SearchBar";
import CategoriesNavBar from "./CategoriesNavBar";
import { useEffect, useState } from "react";

function NavBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div>
      <div className="containerNavBar">
        <p className="import"></p>
        <img src={logo} className="logo"></img>
        <div className="instruction-presentation">
          <p className="instruction">Mode&nbsp;d&rsquo;Emploi</p>
          <p className="presentation">Qui&nbsp;sommes&#8209;nous&nbsp;?</p>
        </div>
        {isDesktop && <SearchBar />}
        <img src={user} className="user"></img>
      </div>
      {!isDesktop && <SearchBar />}
      <CategoriesNavBar />
    </div>
  );
}

export default NavBar;

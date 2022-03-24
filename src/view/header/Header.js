import React from "react";
import "./Header.css";
import InstallMobileOutlinedIcon from "@mui/icons-material/InstallMobileOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import TokopediaLogo from "../../assets/icons/tokopedia.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { fontSize, width } from "@mui/system";

function Header() {
  return (
    <div className="header">
      {/* Header Head */}
      <div className="header__head">
        <div className="header__headOptionLeft">
          <InstallMobileOutlinedIcon
            sx={{ fontSize: 18, color: "rgba(49, 53, 59, 0.68)" }}
          />
          &nbsp;
          <a href="#" className="header__headOptionFont">
            Download Tokopedia App
          </a>
        </div>
        <div className="header__headOptionRight">
          <a href="#" className="header__headOptionFont">
            Tentang Tokopedia
          </a>
          <a href="#" className="header__headOptionFont">
            Mitra Tokopedia
          </a>
          <a href="#" className="header__headOptionFont">
            Mulai Berjualan
          </a>
          <a href="#" className="header__headOptionFont">
            Promo
          </a>
          <a href="#" className="header__headOptionFont">
            Tokopedia Care
          </a>
        </div>
      </div>
      {/* Header Body */}
      <div className="header__body">
        <div className="header__bodyContainer">
          <a href="" className="header__bodyLogo">
            <img src={TokopediaLogo} alt="Tokopedia logo" />
          </a>
          <div className="header__bodyCategoryContainer">
            <div className="header__bodyCategoryBox">
              <div className="header__bodyCategory">Kategori</div>
            </div>
          </div>
          <div className="header__bodySearchContainer">
            <form action="" className="header__bodySearchBox">
              <div className="header__bodySearchForm">
                <input
                  className="header__bodySearchInput"
                  type="text"
                  placeholder="Tokopedia clone"
                />
                <button
                  className="header__bodySearchButton"
                  type="button"
                ></button>
              </div>
            </form>
          </div>
          <div className="header__bodyBasketContainer">
            <div className="header__bodyBasketBox">
              <ShoppingCartRoundedIcon
                sx={{ fontSize: 20, color: "#6c727c" }}
              />
            </div>
          </div>
          <div className="separator"></div>
          <div className="header__bodyAuthContainer">
            <button className="loginBtn">Masuk</button>
            <button className="registerBtn">Daftar</button>
          </div>
        </div>
      </div>
      {/* Header Foot */}
      <div className="header__footerLeft">
        <a href="" className="header__footerRecommendation">
          Clone
        </a>
        <a href="" className="header__footerRecommendation">
          Tokopedia
        </a>
        <a href="" className="header__footerRecommendation">
          Using
        </a>
        <a href="" className="header__footerRecommendation">
          reactJS
        </a>
      </div>

      <div className="header__footerRight">
        <div className="header__footerLocation">
          <LocationOnOutlinedIcon sx={{ fontSize: 14, color: "#898a8e" }} />
          <p className="header__footerFontDelivery">Dikirim ke </p>
          <p className="header__footerFontLocation"> Bandung</p>
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: 14, color: "#7c7e82" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

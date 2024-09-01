import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Navbar = () => {
  const userName = sessionStorage.getItem("email");
  const [activeNav, setActiveNav] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    // setUsername("");

    // Remove the reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    window.location.reload();
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
          >
            <path
              d="M17.9999 22.9552H6C5.21207 22.9552 4.43186 23.1004 3.70391 23.3827C2.97596 23.6649 2.31452 24.0786 1.75738 24.6001C1.20023 25.1216 0.758278 25.7407 0.456757 26.4221C0.155236 27.1035 5.10145e-05 27.8338 6.10356e-05 28.5713C6.10356e-05 29.8119 0.267524 30.393 2.40005 30.8178C2.40005 30.8178 9.57935 32 12 32C14.4207 32 21.6 30.8179 21.6 30.8179C23.7325 30.393 24 29.8119 24 28.5713C24 27.0819 23.3678 25.6534 22.2426 24.6002C21.1174 23.5469 19.5913 22.9552 18 22.9552L17.9999 22.9552Z"
              fill="url(#paint0_linear_1_394)"
            />
            <path
              d="M12 26.3249C11.0452 26.3249 10.1295 25.9699 9.45442 25.338C8.7793 24.706 8.40002 23.849 8.40002 22.9553V20.7088H15.5999V22.9553C15.5999 23.849 15.2206 24.706 14.5455 25.338C13.8704 25.9699 12.9547 26.3249 12 26.3249Z"
              fill="#F2A783"
            />
            <path
              d="M12 26.3249C11.0452 26.3249 10.1295 25.9699 9.45442 25.338C8.7793 24.706 8.40002 23.849 8.40002 22.9553V20.7088H15.5999V22.9553C15.5999 23.849 15.2206 24.706 14.5455 25.338C13.8704 25.9699 12.9547 26.3249 12 26.3249Z"
              fill="url(#paint1_linear_1_394)"
            />
            <path
              d="M20.3056 15.7458C20.3265 15.6296 20.3856 15.5224 20.4746 15.439C20.5636 15.3557 20.6782 15.3005 20.8024 15.281C21.3585 15.1885 21.8625 14.917 22.2273 14.5134C22.5921 14.1097 22.7947 13.5994 22.7999 13.0708V11.386C22.7945 10.8551 22.5902 10.3428 22.2226 9.93844C21.855 9.5341 21.3475 9.26336 20.7884 9.17345C20.6685 9.15428 20.5574 9.10205 20.4693 9.02344C20.3813 8.94483 20.3203 8.84341 20.2942 8.73217C20.0554 7.73319 19.4606 6.84 18.6074 6.19954C17.7542 5.55908 16.6936 5.20948 15.6 5.20825H8.39999C7.30634 5.20948 6.24571 5.55908 5.39255 6.19954C4.53939 6.84 3.94451 7.73319 3.70577 8.73217C3.67966 8.8434 3.61868 8.94481 3.53065 9.02342C3.44261 9.10203 3.33152 9.15427 3.21159 9.17345C2.65255 9.26335 2.14497 9.53407 1.77735 9.93842C1.40973 10.3428 1.20541 10.8551 1.20001 11.386V13.0708C1.20529 13.5994 1.40783 14.1097 1.7726 14.5133C2.13736 14.9169 2.6414 15.1885 3.19747 15.281C3.32164 15.3005 3.43623 15.3557 3.52527 15.439C3.61432 15.5224 3.67338 15.6296 3.69425 15.7458H20.3056Z"
              fill="#F2A783"
            />
            <path
              d="M20.3056 15.7458C20.3265 15.6296 20.3856 15.5224 20.4746 15.439C20.5636 15.3557 20.6782 15.3005 20.8024 15.281C21.3585 15.1885 21.8625 14.917 22.2273 14.5134C22.5921 14.1097 22.7947 13.5994 22.7999 13.0708V11.386C22.7945 10.8551 22.5902 10.3428 22.2226 9.93844C21.855 9.5341 21.3475 9.26336 20.7884 9.17345C20.6685 9.15428 20.5574 9.10205 20.4693 9.02344C20.3813 8.94483 20.3203 8.84341 20.2942 8.73217C20.0554 7.73319 19.4606 6.84 18.6074 6.19954C17.7542 5.55908 16.6936 5.20948 15.6 5.20825H8.39999C7.30634 5.20948 6.24571 5.55908 5.39255 6.19954C4.53939 6.84 3.94451 7.73319 3.70577 8.73217C3.67966 8.8434 3.61868 8.94481 3.53065 9.02342C3.44261 9.10203 3.33152 9.15427 3.21159 9.17345C2.65255 9.26335 2.14497 9.53407 1.77735 9.93842C1.40973 10.3428 1.20541 10.8551 1.20001 11.386V13.0708C1.20529 13.5994 1.40783 14.1097 1.7726 14.5133C2.13736 14.9169 2.6414 15.1885 3.19747 15.281C3.32164 15.3005 3.43623 15.3557 3.52527 15.439C3.61432 15.5224 3.67338 15.6296 3.69425 15.7458H20.3056Z"
              fill="url(#paint2_radial_1_394)"
            />
            <path
              d="M4.19929 15.5719L3.05648 9.15136C2.97354 8.68544 3.72609 8.56758 3.80919 9.034L4.952 15.4546L4.19929 15.5719Z"
              fill="#EAF5FB"
            />
            <path
              d="M9.15568 12.4923C9.62247 12.0554 9.62247 11.347 9.15568 10.91C8.68888 10.4731 7.93206 10.4731 7.46526 10.91C6.99847 11.347 6.99847 12.0554 7.46526 12.4923C7.93206 12.9292 8.68888 12.9292 9.15568 12.4923Z"
              fill="#3D3C3B"
            />
            <path
              d="M16.5351 12.4924C17.0019 12.0555 17.0019 11.3471 16.5351 10.9101C16.0683 10.4732 15.3115 10.4732 14.8447 10.9101C14.3779 11.3471 14.3779 12.0555 14.8447 12.4924C15.3115 12.9293 16.0683 12.9293 16.5351 12.4924Z"
              fill="#3D3C3B"
            />
            <path
              d="M20.5664 15.3907H17.0774C15.7883 15.3907 14.5493 14.9966 13.4673 14.3407C12.9944 14.054 11.7711 13.5882 10.5299 14.3407C9.44782 14.9966 8.20894 15.3906 6.91978 15.3906H3.43353C3.50068 15.774 4.28773 22.6403 11.9993 22.6403C18.2978 22.6403 20.0671 18.2569 20.5664 15.3907Z"
              fill="#EAF5FB"
            />
            <path
              d="M19.0479 15.4544L20.1907 9.03394C20.2738 8.56788 21.0263 8.68538 20.9434 9.15137L19.8006 15.5719L19.0479 15.4544Z"
              fill="#B2C8CE"
            />
            <path
              d="M20.5664 15.3907H17.0774C15.7883 15.3907 14.5493 14.9966 13.4673 14.3407C12.9944 14.054 11.7711 13.5882 10.5299 14.3407C9.44782 14.9966 8.20894 15.3906 6.91978 15.3906H3.43353C3.50068 15.774 4.28773 22.6403 11.9993 22.6403C18.2978 22.6403 20.0671 18.2569 20.5664 15.3907Z"
              fill="url(#paint3_radial_1_394)"
            />
            <path
              d="M18.3196 0.708724C15.4944 -0.0572599 9.76875 -0.399824 5.68027 0.708724C4.38687 1.06128 3.25074 1.7974 2.44277 2.80637C1.63481 3.81534 1.19869 5.04259 1.20002 6.30353V12.1548C6.08837 5.12206 17.9128 5.12384 22.7999 12.1548V6.30353C22.8013 5.04258 22.3651 3.81532 21.5572 2.80635C20.7492 1.79739 19.613 1.06127 18.3196 0.708724Z"
              fill="#56A5FC"
            />
            <path
              d="M18.3196 0.708724C15.4944 -0.0572599 9.76875 -0.399824 5.68027 0.708724C4.38687 1.06128 3.25074 1.7974 2.44277 2.80637C1.63481 3.81534 1.19869 5.04259 1.20002 6.30353V12.1548C6.08837 5.12206 17.9128 5.12384 22.7999 12.1548V6.30353C22.8013 5.04258 22.3651 3.81532 21.5572 2.80635C20.7492 1.79739 19.613 1.06127 18.3196 0.708724Z"
              fill="url(#paint4_linear_1_394)"
            />
            <path
              d="M19.1299 23.0561C17.3476 25.0675 14.8129 26.3249 12 26.3249C9.18699 26.3249 6.65223 25.0676 4.87004 23.0561C3.4999 23.3021 2.26418 23.9874 1.37538 24.9939C0.486572 26.0005 0.000235633 27.2655 0 28.5714C0 29.812 0.267463 30.393 2.39992 30.8178C2.39992 30.8178 9.57929 32 12 32C14.4206 32 21.5999 30.8178 21.5999 30.8178C23.7325 30.393 23.9998 29.812 23.9998 28.5714C23.9996 27.2655 23.5133 26.0005 22.6245 24.994C21.7357 23.9874 20.5 23.3022 19.1299 23.0561Z"
              fill="#56A5FC"
            />
            <path
              d="M19.1299 23.0561C17.3476 25.0675 14.8129 26.3249 12 26.3249C9.18699 26.3249 6.65223 25.0676 4.87004 23.0561C3.4999 23.3021 2.26418 23.9874 1.37538 24.9939C0.486572 26.0005 0.000235633 27.2655 0 28.5714C0 29.812 0.267463 30.393 2.39992 30.8178C2.39992 30.8178 9.57929 32 12 32C14.4206 32 21.5999 30.8178 21.5999 30.8178C23.7325 30.393 23.9998 29.812 23.9998 28.5714C23.9996 27.2655 23.5133 26.0005 22.6245 24.994C21.7357 23.9874 20.5 23.3022 19.1299 23.0561Z"
              fill="url(#paint5_linear_1_394)"
            />
            <path
              d="M9.15568 12.4923C9.62247 12.0554 9.62247 11.347 9.15568 10.91C8.68888 10.4731 7.93206 10.4731 7.46526 10.91C6.99847 11.347 6.99847 12.0554 7.46526 12.4923C7.93206 12.9292 8.68888 12.9292 9.15568 12.4923Z"
              fill="url(#paint6_radial_1_394)"
            />
            <path
              d="M16.5351 12.4924C17.0019 12.0555 17.0019 11.3471 16.5351 10.9101C16.0683 10.4732 15.3115 10.4732 14.8447 10.9101C14.3779 11.3471 14.3779 12.0555 14.8447 12.4924C15.3115 12.9293 16.0683 12.9293 16.5351 12.4924Z"
              fill="url(#paint7_radial_1_394)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_394"
                x1="11.9999"
                y1="32"
                x2="11.9999"
                y2="22.9552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFB" />
                <stop offset="0.521" stopColor="#F6F9FA" />
                <stop offset="0.709" stopColor="#EFF3F6" />
                <stop offset="0.843" stopColor="#E4EAEF" />
                <stop offset="0.95" stopColor="#D3DDE5" />
                <stop offset="1" stopColor="#C8D5DE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_394"
                x1="12"
                y1="26.3249"
                x2="12"
                y2="20.7088"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F2A783" stopOpacity="0" />
                <stop offset="0.064" stopColor="#F0A17F" stopOpacity="0.123" />
                <stop offset="0.198" stopColor="#ED9777" stopOpacity="0.353" />
                <stop offset="0.333" stopColor="#EA8E71" stopOpacity="0.551" />
                <stop offset="0.468" stopColor="#E7876B" stopOpacity="0.713" />
                <stop offset="0.603" stopColor="#E58167" stopOpacity="0.839" />
                <stop offset="0.736" stopColor="#E47D64" stopOpacity="0.928" />
                <stop offset="0.869" stopColor="#E37B63" stopOpacity="0.982" />
                <stop offset="1" stopColor="#E37A62" />
              </linearGradient>
              <radialGradient
                id="paint2_radial_1_394"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.096279 4.97004) scale(18.7132 17.516)"
              >
                <stop stopColor="#F2A783" stopOpacity="0" />
                <stop offset="0.139" stopColor="#F2A682" stopOpacity="0.017" />
                <stop offset="0.272" stopColor="#F1A481" stopOpacity="0.068" />
                <stop offset="0.404" stopColor="#F0A07E" stopOpacity="0.153" />
                <stop offset="0.534" stopColor="#EE9B7A" stopOpacity="0.274" />
                <stop offset="0.664" stopColor="#EC9475" stopOpacity="0.429" />
                <stop offset="0.792" stopColor="#E98B6F" stopOpacity="0.618" />
                <stop offset="0.918" stopColor="#E58167" stopOpacity="0.839" />
                <stop offset="1" stopColor="#E37A62" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_1_394"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(0.72449 11.2282) scale(18.6533 17.4599)"
              >
                <stop stopColor="#EAF5FB" stopOpacity="0" />
                <stop offset="0.18" stopColor="#E9F4FB" stopOpacity="0.014" />
                <stop offset="0.319" stopColor="#E6F2F9" stopOpacity="0.057" />
                <stop offset="0.443" stopColor="#E0EFF7" stopOpacity="0.13" />
                <stop offset="0.56" stopColor="#D8EBF5" stopOpacity="0.234" />
                <stop offset="0.67" stopColor="#CEE5F1" stopOpacity="0.367" />
                <stop offset="0.777" stopColor="#C1DEED" stopOpacity="0.531" />
                <stop offset="0.88" stopColor="#B2D5E7" stopOpacity="0.726" />
                <stop offset="0.978" stopColor="#A1CBE1" stopOpacity="0.945" />
                <stop offset="1" stopColor="#9DC9E0" />
              </radialGradient>
              <linearGradient
                id="paint4_linear_1_394"
                x1="1.20002"
                y1="6.07739"
                x2="22.7999"
                y2="6.07739"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#56A5FC" stopOpacity="0" />
                <stop offset="0.775" stopColor="#427EC1" stopOpacity="0.772" />
                <stop offset="1" stopColor="#3C73B0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_394"
                x1="0"
                y1="27.528"
                x2="23.9999"
                y2="27.528"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#56A5FC" stopOpacity="0" />
                <stop offset="0.775" stopColor="#427EC1" stopOpacity="0.772" />
                <stop offset="1" stopColor="#3C73B0" />
              </linearGradient>
              <radialGradient
                id="paint6_radial_1_394"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(6.71134 10.2498) scale(2.63853 2.46973)"
              >
                <stop offset="0.282" stopColor="#3D3C3B" stopOpacity="0" />
                <stop offset="0.514" stopColor="#393837" stopOpacity="0.169" />
                <stop offset="0.826" stopColor="#2D2C2B" stopOpacity="0.646" />
                <stop offset="1" stopColor="#242423" />
              </radialGradient>
              <radialGradient
                id="paint7_radial_1_394"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.0907 10.2499) scale(2.63853 2.46973)"
              >
                <stop offset="0.282" stopColor="#3D3C3B" stopOpacity="0" />
                <stop offset="0.514" stopColor="#393837" stopOpacity="0.169" />
                <stop offset="0.826" stopColor="#2D2C2B" stopOpacity="0.646" />
                <stop offset="1" stopColor="#242423" />
              </radialGradient>
            </defs>
          </svg>
        </Link>
      </div>

      <div
        className="nav__icon"
        onClick={() => {
          setActiveNav(!activeNav);
        }}
      >
        {activeNav ? (
          <i className="fa fa-times fa fa-bars"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      <ul className={`nav__links ${activeNav ? "active" : ""}`}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="#">Appointments</Link>
        </li>

        <li className="link">
          <Link to="#">Health Blog</Link>
        </li>

        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {userName ? (
          <>
            <Popup
              contentStyle={{ width: 180 }}
              trigger={<p>Wellcome, {userName}</p>}
              arrow={false}
            >
              <ul className="nav_profile">
                <li>
                  <a href="/profile">Your Profile</a>
                </li>
              </ul>
            </Popup>
            <li className="link">
              <button className="btn1" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <a href="/signup">
                <button className="btn1">Sign Up</button>
              </a>
            </li>

            <li className="link">
              <a href="./login">
                <button className="btn1">Login</button>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";

import "./Sign_up.css";
// import { API_URL } from "../../config";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    role: "patient",
    phone: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [showPass, setShowPass] = useState(false);
  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneNumberRegex = /^\d{10}$/;

    if (data.phone && !phoneNumberRegex.test(data.phone)) {
      setPhoneError("Phone number should be 10 digits");
      return;
    }

    delete data.role;

    // const response = await fetch(`${API_URL}/api/auth/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //   }),
    // });

    // const json = await response.json(); // Parse the response JSON
    // if (json.authtoken) {
    //   // Store user data in session storage
    //   sessionStorage.setItem("auth-token", json.authtoken);
    //   sessionStorage.setItem("name", data.name + "");
    //   sessionStorage.setItem("phone", data.phone + "");
    //   sessionStorage.setItem("email", data.email + "");
    //   // Redirect user to home page
    //   navigate("/");
    //   window.location.reload(); // Refresh the page
    // } else {
    //   if (json.errors) {
    //     for (const error of json.errors) {
    //       console.log(error.msg); // Show error messages
    //     }
    //   } else {
    //     alert(json.error);
    //   }
    // }
  };

  return (
    <div className="wrapper">
      <div className="__container">
        <h1>Sign Up</h1>
        <h2>Sign up as a patient</h2>

        <p>
          Already have an account?{" "}
          <a href="/login" className="__nav_link">
            Login
          </a>
        </p>

        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role</label>

            <div className="__select">
              <select
                required
                onChange={(e) => setData({ ...data, role: e.target.value })}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="__arrow"
              >
                <path
                  d="M13 1L7 7L1 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />

            {phoneError ? <div className="error">{phoneError}</div> : null}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="__password">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                className="__eye"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                <path
                  d="M6.1942 10.6492L7.06473 9.21504C6.41741 8.78786 5.91146 8.24879 5.54688 7.59784C5.18229 6.94688 5 6.25864 5 5.5331C5 4.71262 5.22693 3.94979 5.6808 3.24459C3.97693 4.03794 2.55952 5.23474 1.42857 6.835C2.67113 8.58443 4.25967 9.85583 6.1942 10.6492ZM10.5357 2.92929C10.5357 2.79367 10.4836 2.6784 10.3795 2.58347C10.2753 2.48854 10.1488 2.44107 10 2.44107C9.06994 2.44107 8.27195 2.74451 7.60603 3.35139C6.9401 3.95827 6.60714 4.6855 6.60714 5.5331C6.60714 5.66871 6.65923 5.78398 6.76339 5.87891C6.86756 5.97384 6.99405 6.02131 7.14286 6.02131C7.29167 6.02131 7.41816 5.97384 7.52232 5.87891C7.62649 5.78398 7.67857 5.66871 7.67857 5.5331C7.67857 4.94995 7.90551 4.45157 8.35938 4.03794C8.81324 3.62431 9.36012 3.4175 10 3.4175C10.1488 3.4175 10.2753 3.37003 10.3795 3.2751C10.4836 3.18017 10.5357 3.0649 10.5357 2.92929ZM14.5871 0.9866C14.5871 1.03407 14.5833 1.06458 14.5759 1.07814C13.7946 2.35292 12.6228 4.27187 11.0603 6.835C9.49777 9.39812 8.32217 11.3205 7.53348 12.602L6.98661 13.5073C6.9122 13.6158 6.80804 13.67 6.67411 13.67C6.58482 13.67 6.08631 13.4327 5.17857 12.958C5.05952 12.8902 5 12.7953 5 12.6732C5 12.5919 5.16369 12.2969 5.49107 11.7883C4.42708 11.3476 3.4468 10.7611 2.55022 10.0287C1.65365 9.29641 0.877976 8.46577 0.223214 7.53681C0.0744048 7.3266 0 7.09267 0 6.835C0 6.57733 0.0744048 6.3434 0.223214 6.13319C1.36161 4.53971 2.7753 3.28188 4.46429 2.3597C6.15327 1.43752 7.99851 0.976429 10 0.976429C10.6622 0.976429 11.3318 1.03407 12.0089 1.14934L12.6116 0.162738C12.686 0.054246 12.7902 0 12.9241 0C12.9613 0 13.0283 0.0203423 13.125 0.0610268C13.2217 0.101711 13.3371 0.154262 13.471 0.218679C13.6049 0.283096 13.7277 0.345818 13.8393 0.406845C13.9509 0.467872 14.0681 0.530594 14.1908 0.595011C14.3136 0.659428 14.3862 0.698418 14.4085 0.711979C14.5275 0.779787 14.5871 0.871327 14.5871 0.9866ZM15 5.5331C15 6.47562 14.7061 7.33508 14.1183 8.11148C13.5305 8.88787 12.753 9.44559 11.7857 9.78463L14.9107 4.67872C14.9702 4.98385 15 5.26865 15 5.5331ZM20 6.835C20 7.07233 19.9256 7.30626 19.7768 7.53681C19.4866 7.97078 19.0811 8.46238 18.5603 9.01162C17.4442 10.1779 16.1514 11.0831 14.6819 11.7273C13.2124 12.3715 11.6518 12.6936 10 12.6936L10.8259 11.351C12.4033 11.2289 13.8635 10.7644 15.2065 9.95754C16.5495 9.15063 17.6711 8.10978 18.5714 6.835C17.7158 5.62124 16.6667 4.62447 15.4241 3.84469L16.1272 2.70552C16.8341 3.13949 17.513 3.65822 18.1641 4.2617C18.8151 4.86519 19.3527 5.48902 19.7768 6.13319C19.9256 6.36374 20 6.59767 20 6.835Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <button className="__btn __btn--submit" type="submit">
            Submit
          </button>
          <button
            className="__btn __btn--reset"
            type="reset"
            onClick={() => {
              setPhoneError("");
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import "./FindDoctorSearchIC.css";
import { useNavigate } from "react-router-dom";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearchIC = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities] = useState(initSpeciality);
  const navigate = useNavigate();
  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/instant-consultation?speciality=${speciality}`);
    window.location.reload();
  };
  return (
    <div className="finddoctor">
      <center>
        <h1 className="finddoctor-heading">Find a doctor at your own ease</h1>
        <div>
          <img src="/images/FindDoctorSearchIC.png" alt="FindDoctorSearchIC" />
        </div>{" "}
        <div
          className="home-search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="doctor-search-box">
            {/* <p>Perform a search to see the results.</p> */}

            <div className="location-search-box">
              <input
                type="text"
                className="search-doctor-input-box"
                placeholder="Search doctors, clinics, hospitals, etc."
                onFocus={() => setDoctorResultHidden(false)}
                onBlur={() => setDoctorResultHidden(true)}
                value={searchDoctor}
                onChange={(e) => setSearchDoctor(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass search-doctor-icon" />
            </div>

            <div
              className="search-doctor-input-results"
              hidden={doctorResultHidden}
            >
              {specialities.map((speciality) => (
                <div
                  className="search-doctor-result-item"
                  key={speciality}
                  onMouseDown={() => handleDoctorSelect(speciality)}
                >
                  <span>
                    <img
                      src={"/images/search.svg"}
                      alt=""
                      style={{ height: "10px", width: "10px" }}
                      width="12"
                    />
                  </span>
                  <span>{speciality}</span>
                  <span>SPECIALITY</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearchIC;

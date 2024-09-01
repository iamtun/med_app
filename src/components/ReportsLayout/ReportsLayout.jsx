import { useState } from "react";
import "./ReportsLayout.css";
const ReportsLayout = () => {
  const [reviews,] = useState([
    {
      id: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
    },
  ]);

  return (
    <div className="report-container table-responsive ">
      <h3 className="fw-bold">Reviews</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Speciality</th>
            <th scope="col">View Report</th>
            <th scope="col">Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <th scope="row">{review.id}</th>
              <td>{review.doctorName}</td>
              <td>{review.doctorSpeciality}</td>
              <td>
                <button className="btn btn-primary btn-selected">
                  View Report
                </button>
              </td>
              <td>
                <button className="btn btn-primary btn-selected">
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;

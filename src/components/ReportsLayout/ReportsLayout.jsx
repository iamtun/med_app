import { useState } from "react";
import "./ReportsLayout.css";
const ReportsLayout = () => {
  const [reports] = useState([
    {
      id: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
      report: "/files/patient_report.pdf",
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
      report: "/files/patient_report.pdf",
    },
  ]);

  return (
    <div className="report-container table-responsive ">
      <h3 className="fw-bold">Reports</h3>
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
          {reports.map((report) => (
            <tr key={report.id}>
              <th scope="row">{report.id}</th>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              <td>
                <a
                  className="btn btn-primary btn-selected"
                  href={report.report}
                >
                  View Report
                </a>
              </td>
              <td>
                <a
                  className="btn btn-primary btn-selected"
                  download={true}
                  href={report.report}
                >
                  Download Report
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;

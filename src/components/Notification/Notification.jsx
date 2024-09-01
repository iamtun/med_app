/* eslint-disable react/prop-types */
import "./Notification.css";

const Notification = ({
  doctorName,
  speciality,
  name,
  phoneNumber,
  dateOfAppointment,
  timeSlot,
}) => {
  return (
    <div className={"notification_container"}>
      <p>Doctor: {doctorName}</p>
      <p>Speciality: {speciality}</p>
      <p>Name: {name}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Date of Appointment: {dateOfAppointment}</p>
      <p>Time Slot: {timeSlot}</p>
    </div>
  );
};

export default Notification;

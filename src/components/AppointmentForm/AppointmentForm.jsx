import { useState } from "react";

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber, dateOfAppointment, timeSlot: selectedSlot });
    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfAppointment">Date of Appointment:</label>
        <input
          type="date"
          id="dateOfAppointment"
          value={dateOfAppointment}
          onChange={(e) => setDateOfAppointment(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="bookTimeSlot">Book Time Slot:</label>
        <select
          className="custom-select"
          onChange={(e) => handleSlotSelection(e.target.value)}
        >
          <option value="09:00 AM" defaultValue>
            09:00 AM
          </option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 AM">12:00 AM</option>
          <option value="13:00 PM">13:00 PM</option>
          <option value="14:00 PM">14:00 PM</option>
          <option value="15:00 PM">15:00 PM</option>
          <option value="16:00 PM">16:00 PM</option>
          <option value="17:00 PM">17:00 PM</option>
          <option value="18:00 PM">18:00 PM</option>
        </select>
      </div>
      <button type="submit" style={{ height: 40 }}>
        Book Now
      </button>
    </form>
  );
};

export default AppointmentFormIC;

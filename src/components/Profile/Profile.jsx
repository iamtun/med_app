import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(null);

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage
      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            Email: email, // Add the email to the headers
          },
        });
        if (response.ok) {
          const user = await response.json();
          setProfile(user);
          setProfileUpdate(user);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage
      if (!authtoken || !email) {
        navigate("/login");
        return;
      }
      const payload = { ...profileUpdate };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        // Update the user details in session storage
        sessionStorage.setItem("name", profileUpdate.name);
        sessionStorage.setItem("phone", profileUpdate.phone);
        setProfileUpdate(profileUpdate);
        setEditMode(false);
        // Display success message to the user
        alert(`Profile Updated Successfully!`);
        navigate("/");
      } else {
        // Handle error case
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  return profile ? (
    <div className="profile_wrapper">
      {editMode ? (
        <div className="profile_container">
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", width: "300px" }}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileUpdate.email}
                disabled // Disable the email field
              />
            </div>

            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={profileUpdate.name}
                onChange={(e) =>
                  setProfileUpdate({ ...profileUpdate, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={profileUpdate.phone}
                onChange={(e) =>
                  setProfileUpdate({ ...profileUpdate, phone: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="profile_container">
          <div className="profile">
            <h2>Wellcome, {profile.name}</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>

            <button
              className="btn btn-primary mt-3"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="profile_wrapper">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Profile;

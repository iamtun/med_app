import { useState } from "react";
import "./ReviewForm.css";
import Popup from "reactjs-popup";
import { Rating } from "react-simple-star-rating";

const ReviewForm = () => {
  const [reviewSelected, setReviewSelected] = useState(0);
  const [review, setReview] = useState({ name: "", content: "", rating: 1 });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
      reviewContent: {
        name: "",
        content: "",
        rating: 0,
      },
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
      reviewContent: {
        name: "",
        content: "",
        rating: 0,
      },
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewIndex = reviews.findIndex(
      (review) => review.id === reviewSelected
    );

    if (reviewIndex > -1) {
      reviews[reviewIndex].reviewContent = review;
      setReviews([...reviews]);
      setReview({ name: "", content: "", rating: 0 });
      setReviewSelected(0);
    }
  };

  return (
    <div className="review-container table-responsive ">
      <h3 className="fw-bold">Reviews</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Speciality</th>
            <th scope="col">Provide Review</th>
            <th scope="col">Review Given</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <th scope="row">{review.id}</th>
              <td>{review.doctorName}</td>
              <td>{review.doctorSpeciality}</td>
              <td>
                <button
                  className="btn btn-primary btn-selected"
                  disabled={review.reviewContent.content}
                  onClick={() => {
                    setReviewSelected(review.id);
                  }}
                >
                  Give Review
                </button>
              </td>
              <td>{review.reviewContent.content}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup
        open={reviewSelected > 0}
        modal
        className="modal-wrapper"
        onClose={() => setReviewSelected(0)}
      >
        <div className="modal-container-align">
          <form className="review-form" onSubmit={handleSubmit}>
            <p className="heading">Give Your Feedback</p>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={review.name}
                onChange={(e) => setReview({ ...review, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Review">Review:</label>
              <input
                type="text"
                value={review.review}
                onChange={(e) =>
                  setReview({ ...review, content: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfAppointment">Rating:</label>
              <Rating
                onClick={(e) => setReview({ ...review, rating: e })}
                initialValue={1}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>

          <button
            className="btn btn-primary"
            onClick={() => setReviewSelected(0)}
          >
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default ReviewForm;

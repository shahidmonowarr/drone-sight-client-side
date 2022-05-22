import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Review from "../Review/Review";
import { Toast } from "bootstrap";
import { Card, Row, Spinner } from "react-bootstrap";

const Reviews =()=> {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews]=useState();
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
            setLoading(false);
          })
          .catch((error) => Toast.error(error.message));
      }, []);
  return (
    <section
    id="reviews"
    style={{ overflow: "hidden" }}
    className="reviews p-md-3"
  >

      <div className="mb-5 py-4">
        <div className="review-title text-center">
          <h2>
            Review
            <p className="fs-6 fw-normal mt-2">What our client say!</p>
          </h2>
        </div>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Card className="mt-5 mb-5">
              <Row>
            {reviews?.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </Row>
          </Card>
        )}
      </div>
  </section>
  );
}

export default Reviews;

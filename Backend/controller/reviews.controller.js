// import the review service
const reviewService = require("../services/reviews.service");

// create a function to add review
const addReview = async (req, res) => {
  try {
    console.log(req.body);
    // call the review service to add review
    const review = await reviewService.addReview(req.body);

    if (review) {
      // send the review in response
      res.status(200).json({
        message: "Review added successfully",
        review: review,
      });
    } else {
      // send the error in response
      res.status(400).send("Failed to add review");
    }
  } catch (error) {
    // send the error in response
    res.status(400).send(error.message);
  }
};

// create a function to get all reviews
const getReviews = async (req, res) => {
  try {
    // call the review service to get all reviews
    const reviews = await reviewService.getReviews();

    if (reviews) {
      // send the reviews in response
      res.status(200).json({
        message: "Reviews fetched successfully",
        reviews: reviews,
      });
    } else {
      // send the error in response
      res.status(400).send("Failed to get reviews");
    }
  } catch (error) {
    // send the error in response
    res.status(400).send(error.message);
  }
};

// create a function to get review by id
const getReviewById = async (req, res) => {
  try {
    // call the review service to get review by id
    const review = await reviewService.getReviewById(req.params.id);
    console.log(review)

    if (review.length > 0) {
      // send the review in response
      res.status(200).json({
        status: "success",
        message: "Review fetched successfully",
        review: review,
      });
    } else {
      // send the error in response
      res.status(400).json({
        status: "failed",
        message: "Review not found",
      });
    }
  } catch (error) {
    // send the error in response
    res.status(400).send(error.message);
  }
};
// create a function to update review
const updateReview = async (req, res) => {
  try {
    // call the review service to update review
    const review = await reviewService.updateReview(req.params.id, req.body);

    if (review) {
      // send the review in response
      res.status(200).json({
        message: "Review updated successfully",
        review: review,
      });
    } else {
      // send the error in response
      res.status(400).send("Failed to update review");
    }
  } catch (error) {
    // send the error in response
    res.status(400).send(error.message);
  }
};

// create a function to delete review
const deleteReview = async (req, res) => {
  try {
    // call the review service to delete review
    const review = await reviewService.deleteReview(req.params.id);

    if (review) {
      // send the review in response
      res.status(200).json({
        status: "success",
        message: "Review deleted successfully",
      });
    } else {
      // send the error in response
      res.status(400).send("Failed to delete review");
    }
  } catch (error) {
    // send the error in response
    res.status(400).send(error.message);
  }
};

// export the controller
module.exports = {
  addReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};

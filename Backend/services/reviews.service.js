// import db connection
const conn = require("../config/db.config");

// create a function to add review
const addReview = async (review) => {
  try {
    // create a query to add review
    const query = `INSERT INTO reviews (user_id, review_rating, review_comment) VALUES (?, ?, ?)`;

    // execute the query
    const result = await conn.query(query, [
      review.user_id,
      review.review_rating,
      review.review_comment,
    ]);
    // check if the review is added
    if (result.affectedRows === 0) {
      // return null if review is not added
      return null;
    }
    // return the review if added
    return review;
  } catch (error) {
    // throw error if something went wrong
    throw new Error(error.message);
  }
};

// create a function to get all reviews
const getReviews = async () => {
  try {
    // create a query to get all reviews
    const query = `SELECT * FROM reviews`;

    // execute the query
    const reviews = await conn.query(query);

    // return the reviews
    return reviews;
  } catch (error) {
    // throw error if something went wrong
    throw new Error(error.message);
  }
};

// create a function to get review by id
const getReviewById = async (id) => {
  try {
    // create a query to get review by id
    const query = `SELECT * FROM reviews WHERE review_id = ?`;

    // execute the query
    const review = await conn.query(query, [id]);

    // return the review
    return review;
  } catch (error) {
    // throw error if something went wrong
    throw new Error(error.message);
  }
};

// create a function to update review
const updateReview = async (id, review) => {
  try {
    console.log(review);
    // create a query to update review
    const query = `UPDATE reviews SET review_rating = ?, review_comment = ? WHERE review_id = ?`;

    // execute the query
    const result = await conn.query(query, [
      review.review_rating,
      review.review_comment,
      review.review_id,
    ]);

    // check if the review is updated
    if (result.affectedRows === 0) {
      // return null if review is not updated
      return null;
    }
    // return the review if updated
    return review;
  } catch (error) {
    // throw error if something went wrong
    throw new Error(error.message);
  }
};

// create a function to delete review
const deleteReview = async (id) => {
  try {
    // create a query to delete review
    const query = `DELETE FROM reviews WHERE review_id = ?`;

    // execute the query
    const result = await conn.query(query, [id]);

    // check if the review is deleted
    if (result.affectedRows === 0) {
      // return null if review is not deleted
      return null;
    }
    // return the review if deleted
    return result;
  } catch (error) {
    // throw error if something went wrong
    throw new Error(error.message);
  }
};

// export the service
module.exports = {
  addReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};

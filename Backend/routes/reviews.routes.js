// import express
const express = require('express');
// import reviews controller
const reviewsController = require('../controller/reviews.controller');
// create express router
const router = express.Router();
 
// define routes to add review
router.post('/api/add-review', reviewsController.addReview);
// define routes to get all reviews
router.get('/api/get-reviews', reviewsController.getReviews);
// define routes to get review by id
router.get('/api/get-review/:id', reviewsController.getReviewById);
// define routes to update review
router.put('/api/update-review/:id', reviewsController.updateReview);
// define routes to delete review
router.delete('/api/delete-review/:id', reviewsController.deleteReview);


// export router
module.exports = router;
export function validateFeedback({ rating, query }) {
  const errors = {};

  if (!rating || rating < 1 || rating > 5) {
    errors.rating = "Please select a star rating.";
  }

  if (!query || !query.trim()) {
    errors.query = "Please enter your query or feedback.";
  } else if (query.trim().length < 10) {
    errors.query = "Query must be at least 10 characters long.";
  }

  return errors;
}

export const isEmpty = (obj) => Object.keys(obj).length === 0;

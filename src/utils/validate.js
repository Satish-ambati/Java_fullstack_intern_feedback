const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFeedback({ name, email, regdNumber, rating, query }) {
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!email || !email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!regdNumber || !regdNumber.trim()) {
    errors.regdNumber = "Please enter your registration number.";
  }

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

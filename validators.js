const validateMovie = (req, res, next) => {
  const { title } = req.body;
  const errors = [];

  const { email } = req.body;

  const emailRegex = "/[a-z0-9._] +@[a-z0-9-]+.[a-z] {2,3}";
  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  if (title == null) {
    errors.push({ field: "title", message: "This field is required" });
  } else if (title >= 255) {
    errors.push({
      field: "title",
      message: "Should contain less than 255 characters",
    });
  }
};
if (director == null) {
  errors.push({ field: "director", message: "This field is required" });
}
if (year == null) {
  errors.push({ field: "year", message: "This field is required" });
}
if (color == null) {
  errors.push({ field: "color", message: "This field is required" });
}
if (duration == null) {
  errors.push({ field: "duration", message: "This field is required" });
}
if (errors.length) {
  res.status(422).json({ validationErrors: errors });
} else {
  next();
}

module.exports = {
  validateMovie,
};

/**
 * Global error handler middleware
 */
export const errorHandler = (err, req, res, next) => {
  console.error('Unhandled error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL || 'student@chitkara.edu.in',
    error: message
  });
};

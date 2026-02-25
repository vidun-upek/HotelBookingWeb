export default function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  // Minimal structured log
  console.error(`Error: ${err.message}`);
  if (err.stack) console.error(err.stack.split('\n').slice(0,3).join('\n'));

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
}

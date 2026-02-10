import { fibonacci, getPrimes, lcm, hcf } from '../utils/mathUtils.js';
import { queryExternal } from '../services/externalService.js';

const OFFICIAL_EMAIL = process.env.OFFICIAL_EMAIL || 'student@chitkara.edu.in';

export const handleBfhl = async (req, res, next) => {
  try {
    const body = req.body;

    // Validate request body
    if (!body || typeof body !== 'object') {
      return res.status(400).json({
        is_success: false,
        official_email: OFFICIAL_EMAIL,
        error: 'Invalid request body'
      });
    }

    // Check exactly one key
    const keys = Object.keys(body);
    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: OFFICIAL_EMAIL,
        error: 'Request must contain exactly one key'
      });
    }

    const key = keys[0];
    const value = body[key];
    let data;

    switch (key) {
      case 'fibonacci':
        if (!Number.isInteger(value)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'Fibonacci input must be an integer'
          });
        }
        if (value < 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'Fibonacci input must be non-negative'
          });
        }
        data = fibonacci(value);
        break;

      case 'prime':
        if (!Array.isArray(value)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'Prime input must be an array'
          });
        }
        if (value.length === 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'Prime input array cannot be empty'
          });
        }
        if (!value.every(num => Number.isInteger(num))) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'All elements in prime array must be integers'
          });
        }
        data = getPrimes(value);
        break;

      case 'lcm':
        if (!Array.isArray(value)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'LCM input must be an array'
          });
        }
        if (value.length === 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'LCM input array cannot be empty'
          });
        }
        if (!value.every(num => Number.isInteger(num) && num > 0)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'All elements in LCM array must be positive integers'
          });
        }
        data = lcm(value);
        break;

      case 'hcf':
        if (!Array.isArray(value)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'HCF input must be an array'
          });
        }
        if (value.length === 0) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'HCF input array cannot be empty'
          });
        }
        if (!value.every(num => Number.isInteger(num) && num > 0)) {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'All elements in HCF array must be positive integers'
          });
        }
        data = hcf(value);
        break;

      case 'AI':
        if (typeof value !== 'string' || value.trim() === '') {
          return res.status(400).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            error: 'AI input must be a non-empty string'
          });
        }
        data = await queryExternal(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: OFFICIAL_EMAIL,
          error: 'Invalid key. Must be one of: fibonacci, prime, lcm, hcf, AI'
        });
    }

    res.status(200).json({
      is_success: true,
      official_email: OFFICIAL_EMAIL,
      data: data
    });

  } catch (error) {
    console.error('Error in handleBfhl:', error.message);
    res.status(500).json({
      is_success: false,
      official_email: OFFICIAL_EMAIL,
      error: error.message || 'Internal server error'
    });
  }
};

export const health = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
};

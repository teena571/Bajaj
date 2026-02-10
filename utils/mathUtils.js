/**
 * Generate Fibonacci series up to n terms
 * @param {number} n - Number of terms
 * @returns {number[]} Fibonacci series
 */
export const fibonacci = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

/**
 * Check if a number is prime
 * @param {number} num - Number to check
 * @returns {boolean} True if prime
 */
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Filter prime numbers from array
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of prime numbers
 */
export const getPrimes = (arr) => {
  return arr.filter(num => isPrime(num));
};

/**
 * Calculate GCD of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} GCD
 */
const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

/**
 * Calculate HCF/GCD of array of numbers
 * @param {number[]} arr - Array of positive integers
 * @returns {number} HCF
 */
export const hcf = (arr) => {
  return arr.reduce((acc, num) => gcd(acc, num));
};

/**
 * Calculate LCM of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} LCM
 */
const lcmTwo = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

/**
 * Calculate LCM of array of numbers
 * @param {number[]} arr - Array of positive integers
 * @returns {number} LCM
 */
export const lcm = (arr) => {
  return arr.reduce((acc, num) => lcmTwo(acc, num));
};

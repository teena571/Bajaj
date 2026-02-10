# BFHL REST API

A production-ready REST API backend for handling mathematical operations and external service queries.

## Features

- Mathematical operations (Fibonacci, Prime numbers, LCM, HCF)
- External service integration for query processing
- Robust input validation and error handling
- Security middleware (Helmet, CORS)
- Clean architecture with separation of concerns
- ES Modules
- Production-ready deployment

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **HTTP Client:** Axios
- **Security:** Helmet, CORS
- **Environment:** dotenv

## Project Structure

```
bfhl-api/
├── controllers/        # Request handlers
├── routes/            # API routes
├── services/          # External service integrations
├── utils/             # Utility functions
├── middlewares/       # Custom middleware
├── server.js          # Entry point
└── package.json       # Dependencies
```

## Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd bfhl-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
PORT=3000
OFFICIAL_EMAIL=your.email@chitkara.edu.in
EXTERNAL_API_KEY=your_api_key_here
EXTERNAL_API_URL=https://api.groq.com/openai/v1/chat/completions
NODE_ENV=production
```

### 4. Run the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### GET /health

Health check endpoint.

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in"
}
```

### POST /bfhl

Main endpoint supporting five operations.

#### Fibonacci Sequence

**Request:**
```json
{
  "fibonacci": 7
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

#### Prime Numbers

**Request:**
```json
{
  "prime": [2, 4, 7, 9, 11]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [2, 7, 11]
}
```

#### LCM (Least Common Multiple)

**Request:**
```json
{
  "lcm": [12, 18, 24]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 72
}
```

#### HCF (Highest Common Factor)

**Request:**
```json
{
  "hcf": [24, 36, 60]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 12
}
```

#### External Query

**Request:**
```json
{
  "AI": "What is the capital city of Maharashtra?"
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": "Mumbai"
}
```

## Error Handling

All errors return appropriate HTTP status codes:

- **200:** Success
- **400:** Bad Request (invalid input)
- **404:** Not Found (invalid endpoint)
- **500:** Internal Server Error

**Error Response Format:**
```json
{
  "is_success": false,
  "official_email": "your.email@chitkara.edu.in",
  "error": "Error message"
}
```

## Deployment

### Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

### Railway

1. Create new project
2. Connect GitHub repository
3. Add environment variables
4. Deploy

### Render

1. Create new web service
2. Connect repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

## Security Features

- Helmet for HTTP headers security
- CORS enabled
- Request body size limits
- Input validation
- Centralized error handling
- Environment variable protection

## License

ISC

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
OFFICIAL_EMAIL=your.email@chitkara.edu.in
GROQ_API_KEY=your_groq_api_key_here
NODE_ENV=production
```

### 3. Get Groq API Key

1. Visit https://console.groq.com/
2. Sign up with your email or Google account
3. Go to API Keys section
4. Click "Create API Key"
5. Copy the key and add it to your `.env` file

### 4. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Documentation

### POST /bfhl

Handles five types of operations based on the request key.

#### Fibonacci

**Request:**
```json
{
  "fibonacci": 7
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

#### Prime Numbers

**Request:**
```json
{
  "prime": [2, 4, 7, 9, 11]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [2, 7, 11]
}
```

#### LCM (Least Common Multiple)

**Request:**
```json
{
  "lcm": [12, 18, 24]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 72
}
```

#### HCF (Highest Common Factor)

**Request:**
```json
{
  "hcf": [24, 36, 60]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 12
}
```

#### AI Query

**Request:**
```json
{
  "AI": "What is the capital city of Maharashtra?"
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": "Mumbai"
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in"
}
```

## Error Handling

All errors return appropriate HTTP status codes with structured responses:

```json
{
  "is_success": false,
  "official_email": "your.email@chitkara.edu.in",
  "error": "Error message"
}
```

Common status codes:
- 200: Success
- 400: Bad Request (invalid input)
- 404: Not Found (invalid endpoint)
- 500: Internal Server Error

## Deployment Options

### Vercel

1. Push code to GitHub
2. Login to Vercel → New Project
3. Import your repository
4. Add environment variables in Settings
5. Deploy

### Railway

1. Login to Railway → New Project
2. Deploy from GitHub
3. Select your repository
4. Add environment variables
5. Deploy and copy URL

### Render

1. New Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

## Testing

Test the endpoints using curl or Postman:

```bash
# Health check
curl http://localhost:3000/health

# Fibonacci
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'

# Prime numbers
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [2, 4, 7, 9, 11]}'

# LCM
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"lcm": [12, 18, 24]}'

# HCF
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"hcf": [24, 36, 60]}'

# AI Query
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the capital city of Maharashtra?"}'
```

## Security Features

- Input validation for all operations
- Type checking for all inputs
- Boundary condition handling
- Error message sanitization
- API timeout protection
- Environment variable protection

## License

ISC

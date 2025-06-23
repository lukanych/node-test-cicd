# Node.js CI/CD Test Project

A simple Node.js project for testing CI/CD pipelines.

## Setup

```bash
npm install
```

**Note:** You may see deprecation warnings during installation. These are common and don't affect the project functionality.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Running the Application

```bash
npm start
```

The application will start on port 3000 by default (or PORT environment variable if set).

## API Endpoints

- `GET /` - Hello World message
- `GET /add/:a/:b` - Add two numbers

### Example Usage

```bash
# Test the hello endpoint
curl http://localhost:3000/

# Test the calculator endpoint
curl http://localhost:3000/add/5/3
```

## Project Structure

```
node-test/
├── src/
│   ├── index.js          # Main application file
│   └── calculator.js     # Calculator utility class
├── tests/
│   └── calculator.test.js # Unit tests
├── .github/workflows/
│   └── ci.yml           # GitHub Actions CI/CD pipeline
├── jest.config.js       # Jest configuration
└── package.json         # Project dependencies and scripts
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline runs on every push and pull request to the main branch.

Features:
- Tests run on Node.js versions 16.x, 18.x, and 20.x
- Automatic test coverage reporting
- Runs on Ubuntu latest

## Troubleshooting

### Common Warnings
- `inflight@1.0.6 deprecated`: This is a transitive dependency warning and doesn't affect functionality
- `glob@7.2.3 deprecated`: Another transitive dependency warning that can be safely ignored

### Next Steps
1. Run `npm test` to verify all tests pass
2. Run `npm start` to start the application
3. Push to GitHub to trigger CI/CD pipeline

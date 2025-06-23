const express = require('express');
const { Calculator } = require('./calculator');

const app = express();
const port = process.env.PORT || 3000;
const calculator = new Calculator();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World! CI/CD Test App' });
});

app.get('/add/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const result = calculator.add(a, b);
  res.json({ result });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;

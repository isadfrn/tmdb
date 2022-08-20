const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (request, response) => {
  response.send(`Hello World`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀`);
});

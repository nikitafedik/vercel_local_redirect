const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/redirect', (req, res) => {
  const file = req.query.f;
  res.redirect(`localexplorer://${file}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
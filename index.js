const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
    const a = 1;
    const b = 2;

    const c = a + b
  res.send('12')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
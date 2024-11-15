const Express = require('express');

const app = Express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Simple Web Server!</h1>
    <p>Use the following routes to get information:</p>
    <ul>
      <li><a href="/name">/name</a>:My full name</li>
      <li><a href="/hobby">/hobby</a>: My favorite hobby</li>
      <li><a href="/dream">/dream</a>: A motivational message about My dream or goal</li>
    </ul>
  `);
});

app.get('/name', (req, res) => {
  res.status(200).send("Ayana Damtew")
})

app.get('/hobby', (req,res) => {
  res.status(200).json({Hobby: 'Playing video games'})
})

app.get('/dream', (req, res) => {
  res.send('My dream is to become a successful software engineer and make a positive impact in the world through technology.')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)

})
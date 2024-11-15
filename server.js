const Express = require('express');

const app = Express();

const port = process.env.PORT || 3000;


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
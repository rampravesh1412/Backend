const express = require('express');

// const app = express();
// app.use(express.json())
// require('dotenv').config()
// const PORTNUM = process.env.PORT || 8000 ;
// console.log(PORTNUM);

// app.listen(PORTNUM , ()=>{
//     console.log( `Server is running on port ${PORTNUM}` );
// })


const express = require('express');
const app = express();
const PORTNUM = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORTNUM, () => {
  console.log(`Server is running on port ${PORTNUM}`);
});
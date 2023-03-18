require('./utils/dbConnect'); //database connection
const router = require('./routes/router'); //Router
const express = require('express');
const app = express();

//Middleware
app.use(express.json()); //Pass Incoming Data

//routes
app.use('/employees', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});

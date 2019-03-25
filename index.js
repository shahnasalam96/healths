let express = require('express');


// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Import CORS
let cors = require('cors');
let app = express();
let apiRoutes = require("./api-routes")

app.use(cors());
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
const dbRoute = "mongodb+srv://shahnaproject:project@1@health-aoj91.mongodb.net/healthdb?retryWrites=true";

mongoose.connect(
dbRoute,
{ useNewUrlParser: true }
);
var db = mongoose.connection;
var port = process.env.PORT || 8081;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
console.log("Running health on port " + port);
});
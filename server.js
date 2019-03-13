const express = require('express')
var bodyParser = require('body-parser')
const helmet = require('helmet')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(helmet())
app.listen(3000, (req, res) => {
    console.log("Server Connected on port => 3000")
})
/* check header response in browser in both condition 
1-> Without helmet [it gives X-powered-by ]
2-> With helmet [Well Done!! ]
*/
app.get('/', (req, res) => {
    return res.status(200).send({ "message": "OK" })
})


// https://www.twilio.com/blog/2017/11/securing-your-express-app.html
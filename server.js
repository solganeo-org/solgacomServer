const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS"
  );
  next();
});

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require User routes
const accountRoutes = require('./routes/account.routes')
const ContactRoutes = require('./routes/contact.routes')
const UserRoutes = require('./routes/user.routes')
const Site = require('./routes/site.routes')
const SiteContact = require('./routes/site_contact.routes')
const Profile = require('./routes/profile.routes')
const Notification = require('./routes/notification.routes')
const Client = require('./routes/client.routes')
const SiteClient = require('./routes/site_client.routes')
const SendNotification = require('./routes/sendnotification.routes')

// using as middleware
app.use('/api/accounts', accountRoutes)
app.use('/api/contacts', ContactRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/sites', Site)
app.use('/api/sites-contacts', SiteContact)
app.use('/api/profiles', Profile)
app.use('/api/notification', Notification)
app.use('/api/clients', Client)
app.use('/api/sites-clients', SiteClient)
app.use('/api/send-notification', SendNotification)


// listen for requests
app.listen(port, () => {  
    console.log(`Server is listening on port ${port}`);
});

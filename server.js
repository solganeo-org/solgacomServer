const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const fs = require('fs');

// Setup server port
const port = process.env.PORT || 5000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS"
  );
  next();
});

// Require User routes
const accountRoutes = require('./routes/account.routes')
const ContactRoutes = require('./routes/contact.routes')
const TrackingRoutes = require('./routes/tracking.routes')
const Site = require('./routes/site.routes')
const Profile = require('./routes/profile.routes')
const Notification = require('./routes/notification.routes')
const Customer = require('./routes/customer.routes')
const SiteCustomer = require('./routes/site_customer.routes')
const SiteRule = require('./routes/site_rule.routes')
const SendNotification = require('./routes/sendnotification.routes')

// using as middleware
app.use('/api/accounts', accountRoutes)
app.use('/api/contacts', ContactRoutes)
app.use('/api/trackings', TrackingRoutes)
app.use('/api/sites', Site)
app.use('/api/profiles', Profile)
app.use('/api/notification', Notification)
app.use('/api/customers', Customer)
app.use('/api/sites-rules', SiteRule)
app.use('/api/sites-customers', SiteCustomer)
app.use('/api/sites-rules', SiteRule)
app.use('/api/send-notification', SendNotification)


// listen for requests
app.listen(port, () => {  
    console.log(`Server is listening on port ${port}`);
});

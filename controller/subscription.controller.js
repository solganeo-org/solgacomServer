const Subscription = require("../model/subscription.model");

class SubscriptionController {
  constructor() {}

  static subscribe(req, res) {
    const subscription = new Subscription(req.body);

    Subscription.subscribe(subscription);

    res.json({
      error: false,
      message: "Client Subscribed",
    });
  }
}

module.exports = SubscriptionController;

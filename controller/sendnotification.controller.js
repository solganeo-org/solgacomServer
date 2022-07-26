const webpush = require('web-push')

class SendNotification {
  constructor () {}

  static send (req, res) {
    const vapidDetails = req.body.vapidDetails
    const pushSubscription = req.body.pushSubscription
    const payload = req.body.payload

    webpush.setVapidDetails(
      vapidDetails.mailto,
      vapidDetails.publicKey,
      vapidDetails.privateKey
    )

    webpush.sendNotification(pushSubscription, payload)

    res.json({

      error: false,
      message: 'Notification Sent'

    })
  }
}

module.exports = SendNotification

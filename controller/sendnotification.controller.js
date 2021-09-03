const webpush = require('web-push')

class SendNotification {

    constructor(){}

    static send(req, res) {

        let vapidDetails = req.body.vapidDetails
        let pushSubscription = req.body.pushSubscription
        let payload = req.body.payload

        webpush.setVapidDetails(
            vapidDetails.mailto,
            vapidDetails.publicKey,
            vapidDetails.privateKey
          );

        webpush.sendNotification(pushSubscription, payload);

        res.json({

            error: false,
            message: 'Notification Sent'

        })
        
    }
}

module.exports = SendNotification;
"use strict";

const notification = require("../model/notification.model");

class notificationController {
  /**
   */
  constructor() {}

  /**
   * Calls notification.findAll() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static findAll(req, res) {
    notification.findAll(function (err, notification) {
      err ? res.send(err) : res.send(notification);
    });
  }

  /**
   * Calls site_rule.findById() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static findByContactId(req, res) {
    notification.findByContactId(req.params.id, function (err, site_rule) {
      if (err) res.send(err);

      res.json(site_rule);
    });
  }

  /**
   * Calls site_rule.findById() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static findBySiteId(req, res) {
    notification.findBySiteId(req.params.id_site, function (err, id_site) {
      if (err) res.send(err);

      res.json(id_site);
    });
  }

  /**
   * Calls notification.create() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static create(req, res) {
    const newnotification = new notification(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({
          error: true,
          message: "Please Provide All the required fields",
        });
    } else {
      notification.create(newnotification, function (err, notification) {
        if (err) res.send(err);

        res.json({
          error: false,
          message: "notification Added Successfully!",
          data: notification,
        });
      });
    }
  }

  /**
   * Calls notification.findById() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static findById(req, res) {
    notification.findById(req.params.id, function (err, notification) {
      if (err) res.send(err);

      res.json(notification);
    });
  }

  /**
   * Calls notification.findByEmail() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static findByEmail(req, res) {
    notification.findByEmail(req.params.email, function (err, notification) {
      if (err) res.send(err);

      res.json(notification);
    });
  }

  /**
   * Calls notification.update() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static update(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({
        error: true,
        message: "Please Provide All Required Fileds",
      });
    } else {
      notification.update(
        req.params.id,
        new notification(req.body),
        function (err, notification) {
          if (err) res.send(err);

          res.json({
            error: false,
            message: "notification Successfully Updated",
            notification: notification
          });
        }
      );
    }
  }

  /**
   * Calls notification.delete() static method and send a HTTP response
   *
   * @param  {} req
   * @param  {} res
   */
  static delete(req, res) {
    notification.delete(req.params.id, function (err, notification) {
      if (err) res.send(err);

      res.json({
        error: false,
        message: "notification Successfully Deleted",
        notification: notification
      });
    });
  }
}

module.exports = notificationController;

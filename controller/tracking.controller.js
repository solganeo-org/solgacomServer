'use strict'

const tracking = require('../model/tracking.model')

class TrackingController {
  /**
     */
  constructor () {}

  /**
     * Calls tracking.findAll() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static findAll (req, res) {
    tracking.findAll(function (err, tracking) {
      (err) ? res.send(err) : res.send(tracking)
    })
  }

  /**
     * Calls tracking.create() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static create (req, res) {
    const newtracking = new tracking(req.body)

    // handle null errors

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ error: true, message: 'Please Provide All the required fields' })
    } else {
      tracking.create(newtracking, function (err, tracking) {
        if (err) res.send(err)

        res.json({

          error: false,
          message: 'tracking Added Successfully!',
          data: tracking

        })
      })
    }
  }

  /**
     * Calls tracking.findById() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static findById (req, res) {
    tracking.findById(req.params.id, function (err, tracking) {
      if (err) res.send(err)

      res.json(tracking)
    })
  }

  /**
     * Calls tracking.findByEmail() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static findByruleId (req, res) {
    tracking.findByruleId(req.params.id, function (err, tracking) {
      if (err) res.send(err)

      res.json(tracking)
    })
  }

  /**
     * Calls tracking.update() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static update (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({

        error: true,
        message: 'Please Provide All Required Fileds'

      })
    } else {
      tracking.update(req.params.id, new tracking(req.body), function (err, tracking) {
        if (err) res.send(err)

        res.json({

          error: false,
          message: 'tracking Successfully Updated',
          tracking: tracking

        })
      })
    }
  }

  /**
     * Calls tracking.delete() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static delete (req, res) {
    tracking.delete(req.params.id, function (err, tracking) {
      if (err) res.send(err)

      res.json({

        error: false,
        message: 'tracking Successfully Deleted',
        tracking: tracking

      })
    })
  }
}

module.exports = TrackingController

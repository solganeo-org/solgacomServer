'use strict'

const profile = require('../model/profile.model')

class ProfileController {
  /**
     */
  constructor () {}

  /**
     * Calls profile.findAll() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static findAll (req, res) {
    profile.findAll(function (err, profile) {
      (err) ? res.send(err) : res.send(profile)
    })
  }

  /**
     * Calls profile.create() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static create (req, res) {
    const newprofile = new profile(req.body)

    // handle null errors

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ error: true, message: 'Please Provide All the required fields' })
    } else {
      profile.create(newprofile, function (err, profile) {
        if (err) res.send(err)

        res.json({

          error: false,
          message: 'profile Added Successfully!',
          data: profile

        })
      })
    }
  }

  /**
     * Calls profile.findById() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static findById (req, res) {
    profile.findById(req.params.id, function (err, profile) {
      if (err) res.send(err)

      res.json(profile)
    })
  }

  /**
     * Calls profile.update() static method and send a HTTP response
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
      profile.update(req.params.id, new profile(req.body), function (err, profile) {
        if (err) res.send(err)

        res.json({

          error: false,
          message: 'profile Successfully Updated',
          profile: profile

        })
      })
    }
  }

  /**
     * Calls profile.delete() static method and send a HTTP response
     *
     * @param  {} req
     * @param  {} res
     */
  static delete (req, res) {
    profile.delete(req.params.id, function (err, profile) {
      if (err) res.send(err)

      res.json({

        error: false,
        message: 'profile Successfully Deleted',
        profile: profile

      })
    })
  }
}

module.exports = ProfileController

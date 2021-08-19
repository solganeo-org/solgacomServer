'use strict'

const user = require('../model/user.model');

class userController{

    /**
     */
    constructor(){}

    /**
     * Calls user.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        user.findAll(function(err, user){

            (err) ? res.send(err) : res.send(user);

        });

    }

    /**
     * Calls user.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newuser = new user(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            user.create(newuser, function(err, user){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "user Added Successfully!",
                    data: user

                })

            })

        }

    }

    /**
     * Calls user.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        user.findById(req.params.id, function(err, user){
            
            if (err) res.send(err);

            res.json(user);
            
        });

    }

    /**
     * Calls user.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail (req, res) {

        user.findByEmail(req.params.email, function(err, user){
            
            if (err) res.send(err);

            res.json(user);
            
        });

    }

    /**
     * Calls user.update() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static update (req, res) {

        if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

            res.status(400).send({
                
                error: true,
                message: "Please Provide All Required Fileds"
                
            });

        }

        else {

            user.update(req.params.id, new user(req.body), function(err, user){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'user Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls user.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        user.delete(req.params.id, function(err, user) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'user Successfully Deleted'

            })
        })
    }


}

module.exports = userController;
'use strict'

const account = require('../model/account.model');

class AccountController{

    /**
     */
    constructor(){}

    /**
     * Calls Account.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        account.findAll(function(err, account){

            (err) ? res.send(err) : res.send(account);

        });

    }

    /**
     * Calls Account.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newaccount = new account(req.body);

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            account.create(newaccount, function(err, account){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "account Added Successfully!",
                    data: account

                })

            })

        }

    }

    /**
     * Calls Account.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        account.findById(req.params.id, function(err, account){
            
            if (err) res.send(err);

            res.json(account);
            
        })

    }

    /**
     * Calls Account.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail(req, res) {

        account.findByEmail(req.params.email, function(err, account){

            if(err) res.send(err);

            res.json(account);

        })

    }

    /**
     * Calls Account.update() static method and send a HTTP response
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

            account.update(req.params.id, new account(req.body), function(err, account){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'account Successfully Updated'
                    
                })
                
            })

        }
   
    }

    /**
     * Calls Account.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        account.delete(req.params.id, function(err, account) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'account Successfully Deleted'

            })
        })
    }

}

module.exports = AccountController;
'use strict'

const customer = require('../model/customer.model');

class CustomerController{

    /**
     */
    constructor(){}

    /**
     * Calls customer.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        customer.findAll(function(err, customer){

            (err) ? res.send(err) : res.send(customer);

        });

    }

    /**
     * Calls customer.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newcustomer = new customer(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            customer.create(newcustomer, function(err, customer){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "customer Added Successfully!",
                    data: customer

                })

            })

        }

    }

    /**
     * Calls customer.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        customer.findById(req.params.id, function(err, customer){
            
            if (err) res.send(err);

            res.json(customer);
            
        });

    }

    /**
     * Calls customer.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail (req, res) {

        customer.findByEmail(req.params.email, function(err, customer){
            
            if (err) res.send(err);

            res.json(customer);
            
        });

    }

    /**
     * Calls customer.update() static method and send a HTTP response
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

            customer.update(req.params.id, new customer(req.body), function(err, customer){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'customer Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls customer.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        customer.delete(req.params.id, function(err, customer) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'customer Successfully Deleted'

            })
        })
    }


}

module.exports = CustomerController;
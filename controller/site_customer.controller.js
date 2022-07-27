'use strict'

const site_customer = require('../model/site_customer.model');

class SiteCustomerController{

    /**
     */
    constructor(){}

    /**
     * Calls site_customer.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        site_customer.findAll(function(err, site_customer){

            (err) ? res.send(err) : res.send(site_customer);

        });

    }

    /**
     * Calls site_customer.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newsite_customer = new site_customer(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            site_customer.create(newsite_customer, function(err, site_customer){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "site_customer Added Successfully!",
                    data: site_customer

                })

            })

        }

    }

    /**
     * Calls site_customer.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
     static findByCustomerId(req, res){

        site_customer.findByCustomerId(req.params.id_customer, function(err, site_customer){
            
            if (err) res.send(err);

            res.json(site_customer);
            
        });

    }

    /**
     * Calls site_customer.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        site_customer.findById(req.params.id, function(err, site_customer){
            
            if (err) res.send(err);

            res.json(site_customer);
            
        });

    }

    /**
     * Calls site_customer.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByIdSite (req, res) {

        site_customer.findByIdSite(req.params.idSite, function(err, site_customer){
            
            if (err) res.send(err);

            res.json(site_customer);
            
        });

    }

    /**
     * Calls site_customer.update() static method and send a HTTP response
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

            site_customer.update(req.params.id, new site_customer(req.body), function(err, site_customer){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'site_customer Successfully Updated',
                    site_customer: site_customer
                    
                })
                
            })

        }

        
    }

    /**
     * Calls site_customer.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        site_customer.delete(req.params.id, function(err, site_customer) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'site_customer Successfully Deleted',
                site_customer: site_customer

            })
        })
    }


}

module.exports = SiteCustomerController;

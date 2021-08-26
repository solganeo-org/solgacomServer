'use strict'

const site_contact = require('../model/site_contact.model');

class SiteContactController{

    /**
     */
    constructor(){}

    /**
     * Calls site_contact.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        site_contact.findAll(function(err, site_contact){

            (err) ? res.send(err) : res.send(site_contact);

        });

    }

    /**
     * Calls site_contact.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newsite_contact = new site_contact(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            site_contact.create(newsite_contact, function(err, site_contact){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "site_contact Added Successfully!",
                    data: site_contact

                })

            })

        }

    }

    /**
     * Calls site_contact.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        site_contact.findById(req.params.id, function(err, site_contact){
            
            if (err) res.send(err);

            res.json(site_contact);
            
        });

    }

    /**
     * Calls site_contact.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByContactId (req, res) {

        site_contact.findByContactId(req.params.id, function(err, site_contact){
            
            if (err) res.send(err);

            res.json(site_contact);
            
        });

    }

    /**
     * Calls site_contact.update() static method and send a HTTP response
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

            site_contact.update(req.params.id, new site_contact(req.body), function(err, site_contact){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'site_contact Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls site_contact.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        site_contact.delete(req.params.id, function(err, site_contact) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'site_contact Successfully Deleted'

            })
        })
    }


}

module.exports = SiteContactController;
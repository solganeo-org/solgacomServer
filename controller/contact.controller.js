'use strict'

const contact = require('../model/contact.model');

class ContactController{

    /**
     */
    constructor(){}

    /**
     * Calls Contact.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        contact.findAll(function(err, contact){

            (err) ? res.send(err) : res.send(contact);

        });

    }

    /**
     * Calls Contact.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newcontact = new contact(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            contact.create(newcontact, function(err, contact){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "contact Added Successfully!",
                    data: contact

                })

            })

        }

    }

    /**
     * Calls Contact.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        contact.findById(req.params.id, function(err, contact){
            
            if (err) res.send(err);

            res.json(contact);
            
        });

    }

    /**
     * Calls Contact.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail (req, res) {

        contact.findByEmail(req.params.email, function(err, contact){
            
            if (err) res.send(err);

            res.json(contact);
            
        });

    }

    /**
     * Calls Contact.update() static method and send a HTTP response
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

            contact.update(req.params.id, new contact(req.body), function(err, contact){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'contact Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls Contact.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        contact.delete(req.params.id, function(err, contact) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'contact Successfully Deleted'

            })
        })
    }


}

module.exports = ContactController;
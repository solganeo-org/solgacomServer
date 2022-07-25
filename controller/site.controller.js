'use strict'

const site = require('../model/site.model');

class SiteController{

    /**
     */
    constructor(){}

    /**
     * Calls site.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        site.findAll(function(err, site){

            (err) ? res.send(err) : res.send(site);

        });

    }

    /**
     * Calls site.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newsite = new site(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            site.create(newsite, function(err, site){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "site Added Successfully!",
                    data: site

                })

            })

        }

    }

    /**
     * Calls site.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        site.findById(req.params.id, function(err, site){
            
            if (err) res.send(err);

            res.json(site);
            
        });

    }

    /**
     * Calls site.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail (req, res) {

        site.findByEmail(req.params.email, function(err, site){
            
            if (err) res.send(err);

            res.json(site);
            
        });

    }

    /**
     * Calls site.update() static method and send a HTTP response
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

            site.update(req.params.id, new site(req.body), function(err, site){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'site Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls site.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        site.delete(req.params.id, function(err, site) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'site Successfully Deleted'

            })
        })
    }


}

module.exports = SiteController;
'use strict'

const site_client = require('../model/site_client.model');

class SiteClientController{

    /**
     */
    constructor(){}

    /**
     * Calls site_client.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        site_client.findAll(function(err, site_client){

            (err) ? res.send(err) : res.send(site_client);

        });

    }

    /**
     * Calls site_client.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newsite_client = new site_client(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            site_client.create(newsite_client, function(err, site_client){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "site_client Added Successfully!",
                    data: site_client

                })

            })

        }

    }

    /**
     * Calls site_client.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        site_client.findById(req.params.id, function(err, site_client){
            
            if (err) res.send(err);

            res.json(site_client);
            
        });

    }

    /**
     * Calls site_client.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByIdSite (req, res) {

        site_client.findByIdSite(req.params.id, function(err, site_client){
            
            if (err) res.send(err);

            res.json(site_client);
            
        });

    }

    /**
     * Calls site_client.update() static method and send a HTTP response
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

            site_client.update(req.params.id, new site_client(req.body), function(err, site_client){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'site_client Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls site_client.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        site_client.delete(req.params.id, function(err, site_client) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'site_client Successfully Deleted'

            })
        })
    }


}

module.exports = SiteClientController;
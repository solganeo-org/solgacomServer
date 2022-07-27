'use strict'

const site_rule = require('../model/site_rule.model');

class SiteRuleController{

    /**
     */
    constructor(){}

    /**
     * Calls site_rule.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        site_rule.findAll(function(err, site_rule){

            (err) ? res.send(err) : res.send(site_rule);

        });

    }

    /**
     * Calls site_rule.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newsite_rule = new site_rule(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            site_rule.create(newsite_rule, function(err, site_rule){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "site_rule Added Successfully!",
                    data: site_rule

                })

            })

        }

    }

    /**
     * Calls site_rule.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        site_rule.findById(req.params.id, function(err, site_rule){
            
            if (err) res.send(err);

            res.json(site_rule);
            
        });

    }

    /**
     * Calls site_rule.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
     static findByContactId(req, res){

        site_rule.findByContactId(req.params.id, function(err, site_rule){
            
            if (err) res.send(err);

            res.json(site_rule);
            
        });

    }

    /**
     * Calls site_rule.update() static method and send a HTTP response
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

            site_rule.update(req.params.id, new site_rule(req.body), function(err, site_rule){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'site_rule Successfully Updated',
                    site_rule: site_rule
                    
                })
                
            })

        }

        
    }

    /**
     * Calls site_rule.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        site_rule.delete(req.params.id, function(err, site_rule) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'site_rule Successfully Deleted',
                site_rule: site_rule

            })
        })
    }


}

module.exports = SiteRuleController;

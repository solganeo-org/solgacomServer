'use strict'

const client = require('../model/client.model');

class ClientController{

    /**
     */
    constructor(){}

    /**
     * Calls client.findAll() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findAll(req, res) {

        client.findAll(function(err, client){

            (err) ? res.send(err) : res.send(client);

        });

    }

    /**
     * Calls client.create() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static create(req, res) {

        const newclient = new client(req.body);

        // handle null errors

        if(req.body.constructor === Object && Object.keys(req.body).length === 0){

            res.status(400).send({ error: true, message: 'Please Provide All the required fields'})

        }

        else {

            client.create(newclient, function(err, client){

                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: "client Added Successfully!",
                    data: client

                })

            })

        }

    }

    /**
     * Calls client.findById() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findById(req, res){

        client.findById(req.params.id, function(err, client){
            
            if (err) res.send(err);

            res.json(client);
            
        });

    }

    /**
     * Calls client.findByEmail() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static findByEmail (req, res) {

        client.findByEmail(req.params.email, function(err, client){
            
            if (err) res.send(err);

            res.json(client);
            
        });

    }

    /**
     * Calls client.update() static method and send a HTTP response
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

            client.update(req.params.id, new client(req.body), function(err, client){
                
                if(err) res.send(err);

                res.json({
                    
                    error: false,
                    message: 'client Successfully Updated'
                    
                })
                
            })

        }

        
    }

    /**
     * Calls client.delete() static method and send a HTTP response
     * 
     * @param  {} req
     * @param  {} res
     */
    static delete(req, res) {

        client.delete(req.params.id, function(err, client) {
            
            if(err) res.send(err);

            res.json({

                error: false,
                message: 'client Successfully Deleted'

            })
        })
    }


}

module.exports = ClientController;
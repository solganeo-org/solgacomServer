'use strict'

var dbConn = require('../config/db.config');

class Client {

    /**
     * Creates a client from an client JSON object.
     * 
     * @param  {client} client JSON client
     * 
     */
    constructor(client) {

        this.id                 =   client.id;
        this.endpoint           =   client.endpoint;
        this.key_auth           =   client.key_auth;
        this.key_p256dh         =   client.key_p256dh;
        this.device             =   client.device;
        this.active             =   client.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {client}   client     JSON client
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(client, result) {

        dbConn.query("INSERT INTO client SET ?", client , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an client based on its id field
     * 
     * @param   {int}    id     client id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} client 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM client WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an client based on its email field
     * 
     * @param   {string}     email   email client
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    client JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM client WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the client
     * 
     * @param   {int}        id      client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of client if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM client", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an client based on its id
     * 
     * @param   {int}        id      client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, client, result) {

        dbConn.query(`UPDATE client 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [client.first_name, client.last_name, client.email, client.function, client.icon_path, client.id_account, client.created_by, client.modified_by, client.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an client based on its id
     * 
     * @param   {int}        id      client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE client 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Client;
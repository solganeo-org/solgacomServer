'use strict'

var dbConn = require('../config/db.config');

class Site_client {

    /**
     * Creates a site_client from an site_client JSON object.
     * 
     * @param  {site_client} site_client JSON site_client
     * 
     */
    constructor(site_client) {

        this.id                 =   site_client.id;
        this.id_site            =   site_client.id_site;
        this.id_client          =   site_client.id_client;
        this.active             =   site_client.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {site_client}   site_client     JSON site_client
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(site_client, result) {

        dbConn.query("INSERT INTO site_client SET ?", site_client , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an site_client based on its id field
     * 
     * @param   {int}    id     site_client id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} site_client 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM site_client WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an site_client based on its email field
     * 
     * @param   {string}     email   email site_client
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site_client JSON if there is no error
     */
    static findByIdSite(id, result) {

        dbConn.query(`SELECT c.id, c.endpoint, c.key_auth, c.key_p256dh, c.device 
                        FROM client AS c 
                        INNER JOIN site_client AS sc ON c.id = sc.id_client 
                        WHERE sc.id_site = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the site_client
     * 
     * @param   {int}        id      site_client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of site_client if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM site_client", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an site_client based on its id
     * 
     * @param   {int}        id      site_client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, site_client, result) {

        dbConn.query(`UPDATE site_client 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [site_client.first_name, site_client.last_name, site_client.email, site_client.function, site_client.icon_path, site_client.id_account, site_client.created_by, site_client.modified_by, site_client.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an site_client based on its id
     * 
     * @param   {int}        id      site_client id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE site_client 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Site_client;
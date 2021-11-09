'use strict'

var dbConn = require('../config/db.config');

class Site_customer{

    /**
     * Creates a site_customer from an site_customer JSON object.
     * 
     * @param  {site_customer} site_customer JSON site_customer
     * 
     */
    constructor(site_customer) {

        this.id                 =   site_customer.id;
        this.id_site            =   site_customer.id_site;
        this.id_customer        =   site_customer.id_customer;
        this.active             =   site_customer.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {site_customer}   site_customer     JSON site_customer
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(site_customer, result) {

        dbConn.query("INSERT INTO site_customer SET ?", site_customer , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an site_customer based on its id field
     * 
     * @param   {int}    id     site_customer id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} site_customer 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM site_customer WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an site_customer based on its email field
     * 
     * @param   {string}     email   email site_customer
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site_customer JSON if there is no error
     */
    static findByIdSite(id, result) {

        dbConn.query(`SELECT c.id, c.endpoint, c.key_auth, c.key_p256dh, c.device 
                        FROM customer AS c 
                        INNER JOIN site_customer AS sc ON c.id = sc.id_customer 
                        WHERE sc.id_site = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the site_customer
     * 
     * @param   {int}        id      site_customer id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of site_customer if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM site_customer", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an site_customer based on its id
     * 
     * @param   {int}        id      site_customer id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, site_customer, result) {

        dbConn.query(`UPDATE site_customer 
                        SET id_site = ?, id_customer = ?
                        WHERE id = ?`, [site_customer.id_site, site_customer.id_customer, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an site_customer based on its id
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
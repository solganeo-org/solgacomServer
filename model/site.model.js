'use strict'

var dbConn = require('../config/db.config');

class Site {

    /**
     * Creates a Site from a site JSON object.
     * 
     * @param  {Site} site JSON Site
     * 
     */
    constructor(site) {

        this.id                 =   site.id;
        this.name               =   site.name;
        this.url                =   site.url;
        this.domain             =   site.domain;
        this.icon_path          =   site.icon_path;
        this.private_key        =   site.private_key;
        this.public_key         =   site.public_key;
        this.url_amazon         =   site.url_amazon;
        this.active             =   site.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {Site}      site     JSON site
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(site, result) {
        console.log(site)
        dbConn.query("INSERT INTO site SET ?", site , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an site based on its id field
     * 
     * @param   {int}    id     site id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} site 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM site WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an site based on its email field
     * 
     * @param   {string}     email   email site
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM site WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the site
     * 
     * @param   {int}        id      site id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of site if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM site", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an site based on its id
     * 
     * @param   {int}        id      site id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, site, result) {

        dbConn.query(`UPDATE site 
                        SET name = ?, url = ?, domain = ?, icon_path = ?, url_amazon = ?
                        WHERE id = ?`, [site.name, site.url, site.domain, site.icon_path, site.url_amazon, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }
        );
    }

    /**
     * Delete an site based on its id
     * 
     * @param   {int}        id      site id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query("DELETE FROM site WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Site;
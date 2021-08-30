'use strict'

var dbConn = require('../config/db.config');

class SiteContact {

    /**
     * Creates a site_contact from an site_contact JSON object.
     * 
     * @param  {site_contact} site_contact JSON site_contact
     * 
     */
    constructor(site_contact) {

        this.id                 =   site_contact.id;
        this.id_site            =   site_contact.id_site;
        this.id_contact         =   site_contact.id_contact;
        this.active             =   site_contact.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {site_contact}   site_contact     JSON site_contact
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(site_contact, result) {

        dbConn.query("INSERT INTO site_contact SET ?", site_contact , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an site_contact based on its id field
     * 
     * @param   {int}    id     site_contact id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} site_contact 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM site_contact WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an site_contact based on its id account field
     * 
     * @param   {string}     email   email site_contact
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site_contact JSON if there is no error
     */
    static findByContactId(id, result) {

        dbConn.query(`SELECT s.id, s.name, s.url, s.domain, s.icon_path, s.private_key, s.public_key, s.url_amazon
                        FROM site AS s 
                        INNER JOIN site_contact AS sc ON sc.id_site = s.id 
                        WHERE sc.id_contact = ? AND sc.active = 1`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the site_contact
     * 
     * @param   {int}        id      site_contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of site_contact if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM site_contact", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an site_contact based on its id
     * 
     * @param   {int}        id      site_contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, site_contact, result) {

        dbConn.query(`UPDATE site_contact 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [site_contact.first_name, site_contact.last_name, site_contact.email, site_contact.function, site_contact.icon_path, site_contact.id_account, site_contact.created_by, site_contact.modified_by, site_contact.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an site_contact based on its id
     * 
     * @param   {int}        id      site_contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE site_contact 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = SiteContact;
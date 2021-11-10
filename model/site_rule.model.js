'use strict'

var dbConn = require('../config/db.config');

class Site_rule {

    /**
     * Creates a site_rule from an site_rule JSON object.
     * 
     * @param  {site_rule} site_rule JSON site_rule
     * 
     */
    constructor(site_rule) {

        this.id                 =   site_rule.id;
        this.name               =   site_rule.name;
        this.modify_site        =   site_rule.modify_site;
        this.create_site        =   site_rule.create_site;
        this.delete_site        =   site_rule.delete_site;
        this.id_site            =   site_rule.id_site;
        this.id_contact         =   site_rule.id_contact;
        this.active             =   site_rule.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {site_rule}   site_rule     JSON site_rule
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(site_rule, result) {
        console.log(site_rule)
        dbConn.query("INSERT INTO site_rule SET ?", site_rule , function(err, res){
            
            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an site_rule based on its id field
     * 
     * @param   {int}    id     site_rule id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} site_rule 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM site_rule WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Search an site_rule based on its email field
     * 
     * @param   {string}     email   email site_rule
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site_rule JSON if there is no error
     */
    static findByContactId(contactId, result) {

        dbConn.query(`SELECT *
                        FROM site AS s
                        INNER JOIN site_rule AS sr ON s.id = sr.id_site
                        WHERE sr.id_contact`, contactId, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the site_rule
     * 
     * @param   {int}        id      site_rule id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of site_rule if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM site_rule", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an site_rule based on its id
     * 
     * @param   {int}        id      site_rule id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, site_rule, result) {

        dbConn.query(`UPDATE site_rule 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [site_rule.first_name, site_rule.last_name, site_rule.email, site_rule.function, site_rule.icon_path, site_rule.id_account, site_rule.created_by, site_rule.modified_by, site_rule.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an site_rule based on its id
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

module.exports = Site_rule;
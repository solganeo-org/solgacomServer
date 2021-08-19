'use strict'

var dbConn = require('../config/db.config');

class Contact {

    /**
     * Creates a Contact from an contact JSON object.
     * 
     * @param  {Contact} contact JSON Contact
     * 
     */
    constructor(contact) {

        this.id                 =   contact.id;
        this.first_name         =   contact.first_name;
        this.last_name          =   contact.last_name;
        this.email              =   contact.email;
        this.fonction           =   contact.fonction;
        this.icon_path          =   contact.icon_path;
        this.id_account         =   contact.id_account;
        this.last_modification  =   contact.last_modification;
        this.active             =   contact.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {Contact}   contact     JSON contact
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(contact, result) {

        dbConn.query("INSERT INTO contact SET ?", contact , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an Contact based on its id field
     * 
     * @param   {int}    id     contact id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} Contact 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM contact WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an contact based on its email field
     * 
     * @param   {string}     email   email contact
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Contact JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM contact WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the Contact
     * 
     * @param   {int}        id      contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of contact if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM contact", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an Contact based on its id
     * 
     * @param   {int}        id      contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, contact, result) {

        dbConn.query(`UPDATE contact 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [contact.first_name, contact.last_name, contact.email, contact.function, contact.icon_path, contact.id_account, contact.created_by, contact.modified_by, contact.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an Contact based on its id
     * 
     * @param   {int}        id      contact id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE contact 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Contact;
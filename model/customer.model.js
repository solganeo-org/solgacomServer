'use strict'

var dbConn = require('../config/db.config');

class Customer {

    /**
     * Creates a customer from an customer JSON object.
     * 
     * @param  {customer} customer JSON customer
     * 
     */
    constructor(customer) {

        this.id                 =   customer.id;
        this.endpoint           =   customer.endpoint;
        this.key_auth           =   customer.key_auth;
        this.key_p256dh         =   customer.key_p256dh;
        this.device             =   customer.device;
        this.active             =   customer.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {customer}   customer     JSON customer
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(customer, result) {

        dbConn.query("INSERT INTO customer SET ?", customer , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an customer based on its id field
     * 
     * @param   {int}    id     customer id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} customer 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM customer WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an customer based on its email field
     * 
     * @param   {string}     email   email customer
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    customer JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM customer WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the customer
     * 
     * @param   {int}        id      customer id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of customer if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM customer", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an customer based on its id
     * 
     * @param   {int}        id      customer id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, customer, result) {

        dbConn.query(`UPDATE customer 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [customer.first_name, customer.last_name, customer.email, customer.function, customer.icon_path, customer.id_account, customer.created_by, customer.modified_by, customer.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an customer based on its id
     * 
     * @param   {int}        id      customer id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE customer 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Customer;
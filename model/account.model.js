'use strict'

var dbConn = require('../config/db.config');

class Account {

    
    /**
     * Creates an Account from an account JSON object.
     * 
     * @param  {Account} account JSON Account
     * 
     */
    constructor(account) {

        this.id                 = account.id;
        this.nb_employees       = account.nb_employees;
        this.society_name       = account.society_name;
        this.siret              = account.siret;
        this.country            = account.country;
        this.phone_number       = account.phone_number;
        this.email              = account.email;
        this.icon_path          = account.icon_path;
        this.active             = account.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {Account}   account     JSON account
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(account, result) {

        dbConn.query(`INSERT INTO account SET ?`, account, function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an account based on its id field
     * 
     * @param   {int}    id     account id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} Account 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM account WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an account based on its email field
     * 
     * @param  {string}     email   email account
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Account JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM account WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })


    }

    /**
     * Search all the Accounts
     * 
     * @param  {int}        id      account id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of accounts if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM account", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Update an Account based on its id
     * 
     * @param  {int}        id      account id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, account, result) {

        dbConn.query(`UPDATE account 
                        SET nb_employees = ?, society_name = ?, siret = ?, country = ?, phone_number = ?, email = ?, icon_path = ?
                        WHERE id = ?`, [account.nb_employees, account.society_name, account.siret, account.country, account.phone_number, account.email, account.icon_path, id], 
                        
                        function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an Account based on its id
     * 
     * @param   {int}        id      account id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE account 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Account;
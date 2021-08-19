'use strict'

var dbConn = require('../config/db.config');

class User {

    /**
     * Creates a User from an user JSON object.
     * 
     * @param  {User} user JSON user
     * 
     */
    constructor(user) {

        this.id                 =   user.id;
        this.username           =   user.username;
        this.password           =   user.password;
        this.id_profile         =   user.id_profile;
        this.active             =   user.active;
       
    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {User}      user     JSON user
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(user, result) {

        dbConn.query("INSERT INTO user SET ?", user , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an User based on its id field
     * 
     * @param   {int}    id     user id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} User 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM user WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an user based on its email field
     * 
     * @param   {string}     email   email user
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    user JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM user WHERE username = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the user
     * 
     * @param   {int}        id      user id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of user if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM user", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an user based on its id
     * 
     * @param   {int}        id      user id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, user, result) {

        dbConn.query(`UPDATE user 
                        SET username = ?, password = ?, id_profile = ?
                        WHERE id = ?`, [user.username, user.password, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an user based on its id
     * 
     * @param   {int}        id      user id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE user 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = User;
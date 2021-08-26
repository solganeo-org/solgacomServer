'use strict'

var dbConn = require('../config/db.config');

class Profile {

    /**
     * Creates a profile from an profile JSON object.
     * 
     * @param  {profile} profile JSON profile
     * 
     */
    constructor(profile) {

        this.id                     =   profile.id;
        this.read_site              =   profile.read_site;
        this.modify_site            =   profile.modify_site;
        this.delete_site            =   profile.delete_site;
        this.create_contact         =   profile.create_contact;
        this.modify_contact         =   profile.modify_contact;
        this.delete_contact         =   profile.delete_contact;
        this.active                 =   profile.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {profile}   profile     JSON profile
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(profile, result) {

        dbConn.query("INSERT INTO profile SET ?", profile , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an profile based on its id field
     * 
     * @param   {int}    id     profile id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} profile 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM profile WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an profile based on its email field
     * 
     * @param   {string}     email   email profile
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    profile JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM profile WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the profile
     * 
     * @param   {int}        id      profile id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of profile if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM profile", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an profile based on its id
     * 
     * @param   {int}        id      profile id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, profile, result) {

        dbConn.query(`UPDATE profile 
                        SET first_name = ?, last_name = ?, email = ?, function = ?, icon_path = ?, id_account = ?, created_by = ?, modified_by = ?, last_modification = ?
                        WHERE id = ?`, [profile.first_name, profile.last_name, profile.email, profile.function, profile.icon_path, profile.id_account, profile.created_by, profile.modified_by, profile.last_modification, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an profile based on its id
     * 
     * @param   {int}        id      profile id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE profile 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Profile;
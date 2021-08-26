'use strict'

var dbConn = require('../config/db.config');

class Notification {

    
    /**
     * Creates an notification from an notification JSON object.
     * 
     * @param  {notification} notification JSON notification
     * 
     */
    constructor(notification) {

        this.id                 = notification.id;
        this.title              = notification.title;
        this.content            = notification.content;
        this.status             = notification.status;
        this.active             = notification.active;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {notification}   notification     JSON notification
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(notification, result) {

        dbConn.query(`INSERT INTO notification SET ?`, notification, function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an notification based on its id field
     * 
     * @param   {int}    id     notification id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} notification 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM notification WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an notification based on its email field
     * 
     * @param  {string}     email   email notification
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    notification JSON if there is no error
     */
    static findByEmail(email, result) {

        dbConn.query("SELECT * FROM notification WHERE email = ?", email, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })


    }

    /**
     * Search all the notifications
     * 
     * @param  {int}        id      notification id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of notifications if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM notification", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Update an notification based on its id
     * 
     * @param  {int}        id      notification id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, notification, result) {

        dbConn.query(`UPDATE notification 
                        SET nb_employees = ?, society_name = ?, siret = ?, country = ?, phone_number = ?, email = ?, icon_path = ?
                        WHERE id = ?`, [notification.nb_employees, notification.society_name, notification.siret, notification.country, notification.phone_number, notification.email, notification.icon_path, id], 
                        
                        function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an notification based on its id
     * 
     * @param   {int}        id      notification id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE notification 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Notification;
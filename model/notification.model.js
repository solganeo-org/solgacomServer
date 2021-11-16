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
        this.id_contact         = notification.id_contact;
        this.id_site            = notification.id_site;
        this.title              = notification.title;
        this.content            = notification.content;
        this.urlImage           = notification.urlImage;
        this.urlButton          = notification.urlButton;
        this.urlRed             = notification.urlRed;
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
     * Search an site_rule based on its email field
     * 
     * @param   {string}     email   email site_rule
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    site_rule JSON if there is no error
     */
       static findByContactId(contactId, result) {

        dbConn.query(`SELECT n.title, n.content, n.urlButton, n.urlImage, n.urlRed, n.status
                        FROM notification AS n
                        WHERE n.id_contact`, contactId, function(err, res){

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
     static findBySiteId(siteId, result) {

        dbConn.query(`SELECT * FROM notification WHERE notification.id_site = ? `, siteId, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

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
        console.log(notification)
        dbConn.query(`UPDATE notification 
                        SET title = ?, content = ?, status = ?
                        WHERE id = ?`, [notification.title, notification.content, notification.status, notification.urlImage, notification.urlButton, notification.urlRed, id], 
                        
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
        console.log(result)
        dbConn.query(`DELETE FROM notification WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Notification;
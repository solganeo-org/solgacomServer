'use strict'

var dbConn = require('../config/db.config');

class Tracking{

    /**
     * Creates a tracking from an tracking JSON object.
     * 
     * @param  {tracking} tracking JSON tracking
     * 
     */
    constructor(tracking) {

        this.id                 =   tracking.id;
        this.id_notification    =   tracking.id_notification;
        this.id_customer        =   tracking.id_customer;
        this.active             =   tracking.active;
        this.status             =   tracking.status;

    }

    /**
     * Generates a INSERT query and executes it within the Database
     * 
     * @param   {tracking}   tracking     JSON tracking
     * @param   {Result}    result      Result MySQL object
     * 
     * @returns {Result}    result MySQL object
     */
    static create(tracking, result) {

        dbConn.query("INSERT INTO tracking SET ?", tracking , function(err, res){

            (err) ? result(err, null) : result(null, res.insertId);

        });

    }

    /**
     * Search an tracking based on its id field
     * 
     * @param   {int}    id     tracking id
     * @param   {Result} result Result MySQL object
     * 
     * @returns {Result} tracking 
     */
    static findById(id, result) {

        dbConn.query("SELECT * FROM tracking WHERE id = ?", id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search an tracking based on its email field
     * 
     * @param   {string}     email   email tracking
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    tracking JSON if there is no error
     */
    static findByIdSite(id, result) {

        dbConn.query(`SELECT c.id, c.endpoint, c.key_auth, c.key_p256dh, c.device 
                        FROM customer AS c 
                        INNER JOIN tracking AS sc ON c.id = sc.id_customer 
                        WHERE sc.id_site = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }

    /**
     * Search all the tracking
     * 
     * @param   {int}        id      tracking id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Array list of tracking if there is no error
     */
    static findAll(result) {

        dbConn.query("SELECT * FROM tracking", function(err, res){

            (err) ? result(err, null) : result(null, res);
            
        });

    }


    /**
     * Update an tracking based on its id
     * 
     * @param   {int}        id      tracking id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result} Result MySQL Object
     */
    static update(id, tracking, result) {

        dbConn.query(`UPDATE tracking 
                        SET id_notification = ?, id_customer = ?, status = ?
                        WHERE id = ?`, [tracking.id_notification, tracking.id_customer,tracking.status, id], function(err, res) {
                            
                            (err) ? result(err, null) : result(null, res);

                        }

        );

    }

    /**
     * Delete an tracking based on its id
     * 
     * @param   {int}        id      tracking id
     * @param   {Result}    result  Result MySQL object
     * 
     * @returns {Result}    Result MySQL Object
     */
    static delete(id, result) {

        dbConn.query(`UPDATE tracking 
                        SET active = 0
                        WHERE id = ?`, id, function(err, res){

            (err) ? result(err, null) : result(null, res);

        })

    }

}

module.exports = Tracking;
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- 
-- DATABASE : solganeo_web_push
--

CREATE DATABASE IF NOT EXISTS solganeo_web_push DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE solganeo_web_push;

-- -----------------------------------------------------

--
-- Table Structure for 'account'
--

CREATE TABLE IF NOT EXISTS account (

    id BIGINT UNSIGNED,
    nb_employees int NOT NULL,
    society_name VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    siret VARCHAR(20) NOT NULL UNIQUE,
    country VARCHAR(5) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    icon_path VARCHAR(255) DEFAULT '',
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'contact'
--

CREATE TABLE IF NOT EXISTS contact (

    id BIGINT UNSIGNED,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fonction VARCHAR(50) NOT NULL,
    icon_path VARCHAR(255) DEFAULT '',
    id_account BIGINT UNSIGNED,
    last_modification VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'user'
--

CREATE TABLE IF NOT EXISTS user (

    id BIGINT UNSIGNED,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    id_profile BIGINT UNSIGNED,
    active BOOLEAN DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'site'
--

CREATE TABLE IF NOT EXISTS site (

    id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL UNIQUE,
    domain VARCHAR(255) NOT NULL,
    icon_path VARCHAR(255),
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'profile'
--

CREATE TABLE IF NOT EXISTS profile (

    id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    create_site BOOLEAN NOT NULL DEFAULT '0',
    read_site BOOLEAN NOT NULL DEFAULT '0',
    modify_site BOOLEAN NOT NULL DEFAULT '0',
    delete_site BOOLEAN NOT NULL DEFAULT '0',
    create_contact BOOLEAN NOT NULL DEFAULT '0',
    modify_contact BOOLEAN NOT NULL DEFAULT '0',
    delete_contact BOOLEAN NOT NULL DEFAULT '0',
    active BOOLEAN NOT NULL DEFAULT '1'
    
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'client'
--

CREATE TABLE IF NOT EXISTS client (

    id BIGINT UNSIGNED,
    endpoint VARCHAR(100) NOT NULL,
    key_auth VARCHAR(100) NOT NULL,
    key_p256dh VARCHAR(100) NOT NULL,
    device VARCHAR(50),
    active BOOLEAN NOT NULL DEFAULT '1'


) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'segment_sql'
--

CREATE TABLE IF NOT EXISTS segment_sql (

    id BIGINT UNSIGNED,
    sql_string TEXT NOT NULL,
    id_contact BIGINT UNSIGNED,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'notification'
--

CREATE TABLE IF NOT EXISTS notification (

    id BIGINT UNSIGNED,
    id_segment_sql BIGINT UNSIGNED,
    title VARCHAR(200) NOT NULL,
    content VARCHAR(500) NOT NULL,
    status VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'site_contact'
--

CREATE TABLE IF NOT EXISTS site_contact (

    id BIGINT UNSIGNED,
    id_site BIGINT UNSIGNED,
    id_contact BIGINT UNSIGNED,
    active BOOLEAN NOT NULL DEFAULT '1'


) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'site_client'
--

CREATE TABLE IF NOT EXISTS site_client (

    id BIGINT UNSIGNED,
    id_site BIGINT UNSIGNED,
    id_client BIGINT UNSIGNED,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'tracking'
--

CREATE TABLE IF NOT EXISTS tracking (

    id BIGINT UNSIGNED,
    id_notification BIGINT UNSIGNED,
    id_client BIGINT UNSIGNED,
    status VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- -----------------------------------------------------

--
-- Indexes for table `account`
--

ALTER TABLE account
    ADD PRIMARY KEY (id);

--
-- Indexes for table `contact`
--

ALTER TABLE contact
    ADD PRIMARY KEY (id),
    ADD UNIQUE KEY (email);

--
-- Indexes for table `user`
--

ALTER TABLE user
    ADD PRIMARY KEY (id);

--
-- Indexes for table `site`
--

ALTER TABLE site
    ADD PRIMARY KEY (id);

--
-- Indexes for table `profile`
--

ALTER TABLE profile
    ADD PRIMARY KEY (id);

--
-- Indexes for table `client`
--

ALTER TABLE client
    ADD PRIMARY KEY (id);

--
-- Indexes for table `segment_sql`
--

ALTER TABLE segment_sql
    ADD PRIMARY KEY (id);

--
-- Indexes for table `notification`
--

ALTER TABLE notification
    ADD PRIMARY KEY (id);

--
-- Indexes for table `tracking`
--

ALTER TABLE tracking
    ADD PRIMARY KEY (id);

--
-- Indexes for table `site_contact`
--

ALTER TABLE site_contact
    ADD PRIMARY KEY (id);

--
-- Indexes for table `site_client`
--

ALTER TABLE site_client
    ADD PRIMARY KEY (id);


-- -----------------------------------------------------

ALTER TABLE account
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE contact
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE user
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE profile
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE site
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE segment_sql
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE notification
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE client
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE tracking
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

-- -----------------------------------------------------

--
-- Constraints for table `contact`
--

ALTER TABLE contact
  ADD CONSTRAINT contact_fk_1 FOREIGN KEY (id_account) REFERENCES account (id);

--
-- Constraints for table `user`
--

ALTER TABLE user
  ADD CONSTRAINT user_fk_1 FOREIGN KEY (id_profile) REFERENCES profile (id),
  ADD CONSTRAINT user_fk_2 FOREIGN KEY (username) REFERENCES contact (email);

--
-- Constraints for table `site_contact`
--

ALTER TABLE site_contact
  ADD CONSTRAINT site_contact_fk_1 FOREIGN KEY (id_site) REFERENCES site (id),
  ADD CONSTRAINT site_contact_fk_2 FOREIGN KEY (id_contact) REFERENCES contact (id);

--
-- Constraints for table `segment_sql`
--

ALTER TABLE segment_sql
    ADD CONSTRAINT segment_sql_fk_1 FOREIGN KEY (id_contact) REFERENCES contact (id);

--
-- Constraints for table `site_client`
--

ALTER TABLE site_client
    ADD CONSTRAINT site_client_fk_1 FOREIGN KEY (id_site) REFERENCES site (id),
    ADD CONSTRAINT site_client_fk_2 FOREIGN KEY (id_client) REFERENCES client (id);

--
-- Constraints for table `notification`
--

ALTER TABLE notification
    ADD CONSTRAINT notification_fk_1 FOREIGN KEY (id_segment_sql) REFERENCES segment_sql (id);

--
-- Constraints for table `tracking`
--

ALTER TABLE tracking
    ADD CONSTRAINT tracking_fk_1 FOREIGN KEY (id_notification) REFERENCES notification (id),
    ADD CONSTRAINT tracking_fk_2 FOREIGN KEY (id_client) REFERENCES client (id);


-- -----------------------------------------------------

-- INSERT INTO profile (name, create_site, read_site, modify_site, delete_site, create_contact, modify_contact, delete_contact, active) VALUES ("Admin", '1', '1', '1', '1', '1', '1', '1', '1');


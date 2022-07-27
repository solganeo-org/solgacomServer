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
    nb_employees VARCHAR(50) NOT NULL,
    society_name VARCHAR(50) NOT NULL,
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
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    last_modification VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

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
    private_key VARCHAR(255) NOT NULL,
    public_key VARCHAR(255) NOT NULL,
    url_amazon VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'site_rule'
--

CREATE TABLE IF NOT EXISTS site_rule (

    id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    modify_site BOOLEAN NOT NULL DEFAULT '0',
    create_site BOOLEAN NOT NULL DEFAULT '0',
    delete_site BOOLEAN NOT NULL DEFAULT '0',
    id_contact BIGINT UNSIGNED,
    id_site BIGINT UNSIGNED,
    read_dashboard BOOLEAN NOT NULL DEFAULT '0',
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'profile'
--

CREATE TABLE IF NOT EXISTS profile (

    id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    read_site BOOLEAN NOT NULL DEFAULT '0',
    create_contact BOOLEAN NOT NULL DEFAULT '0',
    modify_contact BOOLEAN NOT NULL DEFAULT '0',
    delete_contact BOOLEAN NOT NULL DEFAULT '0',
    active BOOLEAN NOT NULL DEFAULT '1'
    
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'customer'
--

CREATE TABLE IF NOT EXISTS customer (

    id BIGINT UNSIGNED,
    endpoint VARCHAR(512) NOT NULL,
    key_auth VARCHAR(100) NOT NULL,
    key_p256dh VARCHAR(100) NOT NULL,
    device VARCHAR(50),
    active BOOLEAN NOT NULL DEFAULT '1'


) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'automation'
--

CREATE TABLE IF NOT EXISTS automation (

    id BIGINT UNSIGNED,
    sql_string TEXT NOT NULL,
    filtrer VARCHAR(255) NOT NULL,
    frequency VARCHAR(255) NOT NULL,
    id_contact BIGINT UNSIGNED,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'notification'
--

CREATE TABLE IF NOT EXISTS notification (

    id BIGINT UNSIGNED,
    id_automation BIGINT UNSIGNED,
    title VARCHAR(200) NOT NULL,
    content VARCHAR(500) NOT NULL,
    status VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'site_customer'
--

CREATE TABLE IF NOT EXISTS site_customer (

    id BIGINT UNSIGNED,
    id_site BIGINT UNSIGNED,
    id_customer BIGINT UNSIGNED,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table Structure for 'tracking'
--

CREATE TABLE IF NOT EXISTS tracking (

    id BIGINT UNSIGNED,
    id_notification BIGINT UNSIGNED,
    id_customer BIGINT UNSIGNED,
    status VARCHAR(50) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT '1'

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- -----------------------------------------------------

INSERT INTO profile (name, read_site, create_contact, modify_contact, delete_contact, active) VALUES ("Admin", '1', '1', '1', '1', '1');

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
-- Indexes for table `site`
--

ALTER TABLE site
    ADD PRIMARY KEY (id);

--
-- Indexes for table `site_rule`
--

ALTER TABLE site_rule
    ADD PRIMARY KEY (id);
--
-- Indexes for table `profile`
--

ALTER TABLE profile
    ADD PRIMARY KEY (id);

--
-- Indexes for table `customer`
--

ALTER TABLE customer
    ADD PRIMARY KEY (id);

--
-- Indexes for table `automation`
--

ALTER TABLE automation
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
-- Indexes for table `site_customer`
--

ALTER TABLE site_customer
    ADD PRIMARY KEY (id);


-- -----------------------------------------------------

ALTER TABLE account
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE contact
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE profile
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE site
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE site_rule
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE automation
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE notification
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE customer
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE tracking
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE site_customer
  MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT;

-- -----------------------------------------------------

--
-- Constraints for table `contact`
--

ALTER TABLE contact
  ADD CONSTRAINT contact_fk_1 FOREIGN KEY (id_account) REFERENCES account (id);

--
-- Constraints for table `site_rule`
--

ALTER TABLE site_rule
   ADD CONSTRAINT site_rule_fk_1 FOREIGN KEY (id_site) REFERENCES site (id),
   ADD CONSTRAINT site_rule_fk_2 FOREIGN KEY (id_contact) REFERENCES contact (id);

--
-- Constraints for table `automation`
--

ALTER TABLE automation
    ADD CONSTRAINT automation_fk_1 FOREIGN KEY (id_contact) REFERENCES contact (id);

--
-- Constraints for table `site_customer`
--

ALTER TABLE site_customer
    ADD CONSTRAINT site_customer_fk_1 FOREIGN KEY (id_site) REFERENCES site (id),
    ADD CONSTRAINT site_customer_fk_2 FOREIGN KEY (id_customer) REFERENCES customer (id);

--
-- Constraints for table `notification`
--

ALTER TABLE notification
    ADD CONSTRAINT notification_fk_1 FOREIGN KEY (id_automation) REFERENCES automation (id);

--
-- Constraints for table `tracking`
--

ALTER TABLE tracking
    ADD CONSTRAINT tracking_fk_1 FOREIGN KEY (id_notification) REFERENCES notification (id),
    ADD CONSTRAINT tracking_fk_2 FOREIGN KEY (id_customer) REFERENCES customer (id);


-- -----------------------------------------------------

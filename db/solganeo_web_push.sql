-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 17 nov. 2021 à 15:20
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `solganeo_web_push`
--
CREATE DATABASE IF NOT EXISTS solganeo_web_push DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE solganeo_web_push;
-- --------------------------------------------------------

--
-- Structure de la table `account`
--

CREATE TABLE `account` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nb_employees` int(11) NOT NULL,
  `society_name` varchar(50) NOT NULL,
  `siret` varchar(20) NOT NULL,
  `country` varchar(5) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `icon_path` varchar(255) DEFAULT '',
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `account`
--

-- --------------------------------------------------------

--
-- Structure de la table `automation`
--

CREATE TABLE `automation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sql_string` text NOT NULL,
  `filtrer` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `id_contact` bigint(20) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fonction` varchar(50) NOT NULL,
  `icon_path` varchar(255) DEFAULT '',
  `id_account` bigint(20) UNSIGNED DEFAULT NULL,
  `id_profile` bigint(20) UNSIGNED DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_modification` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contact`
--

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `endpoint` varchar(512) NOT NULL,
  `key_auth` varchar(100) NOT NULL,
  `key_p256dh` varchar(100) NOT NULL,
  `device` varchar(50) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `customer`
--

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_automation` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `id_contact` bigint(20) UNSIGNED DEFAULT NULL,
  `id_site` bigint(20) UNSIGNED DEFAULT NULL,
  `content` varchar(500) NOT NULL,
  `urlImage` varchar(255) NOT NULL,
  `urlButton` varchar(255) NOT NULL,
  `urlRed` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `notification`
--

-- --------------------------------------------------------

--
-- Structure de la table `profile`
--

CREATE TABLE `profile` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `read_site` tinyint(1) NOT NULL DEFAULT 0,
  `create_contact` tinyint(1) NOT NULL DEFAULT 0,
  `modify_contact` tinyint(1) NOT NULL DEFAULT 0,
  `delete_contact` tinyint(1) NOT NULL DEFAULT 0,
  `id_account` bigint(20) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profile`
--
INSERT INTO profile (name, read_site, create_contact, modify_contact, delete_contact, active) VALUES ("Admin", '1', '1', '1', '1', '1');


-- --------------------------------------------------------

--
-- Structure de la table `site`
--

CREATE TABLE `site` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `icon_path` varchar(255) DEFAULT NULL,
  `private_key` varchar(255) NOT NULL,
  `public_key` varchar(255) NOT NULL,
  `url_amazon` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `site`
--

-- --------------------------------------------------------

--
-- Structure de la table `site_customer`
--

CREATE TABLE `site_customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_site` bigint(20) UNSIGNED DEFAULT NULL,
  `id_customer` bigint(20) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `site_customer`
--

-- --------------------------------------------------------

--
-- Structure de la table `site_rule`
--

CREATE TABLE `site_rule` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `modify_site` tinyint(1) NOT NULL DEFAULT 0,
  `create_site` tinyint(1) NOT NULL DEFAULT 0,
  `delete_site` tinyint(1) NOT NULL DEFAULT 0,
  `id_contact` bigint(20) UNSIGNED DEFAULT NULL,
  `id_site` bigint(20) UNSIGNED DEFAULT NULL,
  `read_dashboard` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `site_rule`
--

-- --------------------------------------------------------

--
-- Structure de la table `tracking`
--

CREATE TABLE `tracking` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_notification` bigint(20) UNSIGNED DEFAULT NULL,
  `id_customer` bigint(20) UNSIGNED DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `siret` (`siret`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `automation`
--
ALTER TABLE `automation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `automation_fk_1` (`id_contact`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `contact_fk_1` (`id_account`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notification_fk_1` (`id_automation`);

--
-- Index pour la table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url` (`url`);

--
-- Index pour la table `site_customer`
--
ALTER TABLE `site_customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `site_customer_fk_1` (`id_site`),
  ADD KEY `site_customer_fk_2` (`id_customer`);

--
-- Index pour la table `site_rule`
--
ALTER TABLE `site_rule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `site_rule_fk_1` (`id_site`),
  ADD KEY `site_rule_fk_2` (`id_contact`);

--
-- Index pour la table `tracking`
--
ALTER TABLE `tracking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tracking_fk_1` (`id_notification`),
  ADD KEY `tracking_fk_2` (`id_customer`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `account`
--
ALTER TABLE `account`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
ALTER TABLE `automation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `site`
--
ALTER TABLE `site`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `site_customer`
--
ALTER TABLE `site_customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `site_rule`
--
ALTER TABLE `site_rule`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tracking`
--
ALTER TABLE `tracking`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `automation`
--
ALTER TABLE `automation`
  ADD CONSTRAINT `automation_fk_1` FOREIGN KEY (`id_contact`) REFERENCES `contact` (`id`);

--
-- Contraintes pour la table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_fk_1` FOREIGN KEY (`id_account`) REFERENCES `account` (`id`);

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_fk_1` FOREIGN KEY (`id_automation`) REFERENCES `automation` (`id`);

--
-- Contraintes pour la table `site_customer`
--
ALTER TABLE `site_customer`
  ADD CONSTRAINT `site_customer_fk_1` FOREIGN KEY (`id_site`) REFERENCES `site` (`id`),
  ADD CONSTRAINT `site_customer_fk_2` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`);

--
-- Contraintes pour la table `site_rule`
--
ALTER TABLE `site_rule`
  ADD CONSTRAINT `site_rule_fk_1` FOREIGN KEY (`id_site`) REFERENCES `site` (`id`),
  ADD CONSTRAINT `site_rule_fk_2` FOREIGN KEY (`id_contact`) REFERENCES `contact` (`id`);

--
-- Contraintes pour la table `tracking`
--
ALTER TABLE `tracking`
  ADD CONSTRAINT `tracking_fk_1` FOREIGN KEY (`id_notification`) REFERENCES `notification` (`id`),
  ADD CONSTRAINT `tracking_fk_2` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

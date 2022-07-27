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
CREATE DATABASE IF NOT EXISTS solganeo_web_push2 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE solganeo_web_push2;
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

INSERT INTO `account` (`id`, `nb_employees`, `society_name`, `siret`, `country`, `phone_number`, `email`, `icon_path`, `active`) VALUES
(1, 1, 'BobSquare', '12346789132455', 'FRANC', '33068956147', 'test@test.fr', '', 1);

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

INSERT INTO `contact` (`id`, `first_name`, `last_name`, `email`, `fonction`, `icon_path`, `id_account`, `id_profile`, `username`, `password`, `last_modification`, `active`) VALUES
(1, 'Patrck', 'Saturn', 'test@test.fr', 'CEO', '', 1, NULL, 'test@test.fr', '123456789', '2021-11-17T12:15:05+0100', 1);

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

INSERT INTO `customer` (`id`, `endpoint`, `key_auth`, `key_p256dh`, `device`, `active`) VALUES
(1, 'https://fcm.googleapis.com/fcm/send/eher9L6f76E:APA91bHKQJotCshEFRklXyLvsdQXXfrTb4Y1s-xs0ZR8ifP4XIx4pQ41SfBzK2kUqPWuA8Ixz4TvlCVZQ0mEscA8RBGA6fKeYmaTR8YJX0b5RQCV2XeoGISM4oH1Wtl8E1tEub-MmL3A', 'cOiIBWdt7Cb-5K0LvFHObQ', 'BBiEYVf3g0lgoCyTHk_Ex4PMue7XZNiVX1cEBWX3SQM0Y2prNjY8uTGkdLdRo7OVlHeGcJJLBl7xs5dPCYXDWds', 'PC', 1),
(2, 'https://fcm.googleapis.com/fcm/send/fxEGHBXnnz8:APA91bFFtKOy1_NWmvUb0wJgYLwkMbVkSUbpk6XH6W2N05laTV4s0owyGPkgAoYEzkNyA5xSi-hyJ0TASiX3wBF6e2gSfC0DQ3uX9WRotIRl6T5dxPWWPRdUu6EctwoAfwo35cMFaw5k', 'PqCk3WTwYvJlskDIjiSLUQ', 'BHkPfwCfBPqNGapnEe-l-Oqzq3X614iSpko09T61pDLpFR8obhgOFGjzlpfFsVZMelrPYOdQrw7q4_efIvdfv1w', 'PC', 1);

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

INSERT INTO `notification` (`id`, `id_automation`, `title`, `id_contact`, `id_site`, `content`, `urlImage`, `urlButton`, `urlRed`, `status`, `active`) VALUES
(1, NULL, 'POPOOOOPOOOOOO !!!!', 1, 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '', 'https://www.amazon.fr/Gigabyte-GeForce-Gaming-NVIDIA-GDDR6/dp/B096XZZ92Q/?_encoding=UTF8&pd_rd_w=5u5hY&pf_rd_p=0e10690e-3daf-4c44-8fc7-cf7ea88c8aa8&pf_rd_r=SF0RFQ321TBKNJMZ95SQ&pd_rd_r=b586649f-511d-4b7f-99a5-c7031acda332&pd_rd_wg=RTT8h&ref_=pd_gw_ci_mcx_', 'https://www.amazon.fr/Gigabyte-GeForce-Gaming-NVIDIA-GDDR6/dp/B096XZZ92Q/?_encoding=UTF8&pd_rd_w=5u5hY&pf_rd_p=0e10690e-3daf-4c44-8fc7-cf7ea88c8aa8&pf_rd_r=SF0RFQ321TBKNJMZ95SQ&pd_rd_r=b586649f-511d-4b7f-99a5-c7031acda332&pd_rd_wg=RTT8h&ref_=pd_gw_ci_mcx_', 'Draft', 1),
(2, NULL, 'New Sales !!!!!!', 1, 2, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.', '', 'https://www.amazon.fr/Gigabyte-GV-N307TGAMING-OC-8GD-Graphique-GeForce/dp/B095X6RLJW/ref=pd_sim_2/260-7737164-9816667?pd_rd_w=0mxkL&pf_rd_p=c87c062f-3708-4ec1-aaee-6fcda691080a&pf_rd_r=6ZYP9JVQ2VNVV2FGM2HV&pd_rd_r=dfc7838d-816c-421e-98c8-fa90d1772290&pd_r', 'https://www.amazon.fr/Gigabyte-GV-N307TGAMING-OC-8GD-Graphique-GeForce/dp/B095X6RLJW/ref=pd_sim_2/260-7737164-9816667?pd_rd_w=0mxkL&pf_rd_p=c87c062f-3708-4ec1-aaee-6fcda691080a&pf_rd_r=6ZYP9JVQ2VNVV2FGM2HV&pd_rd_r=dfc7838d-816c-421e-98c8-fa90d1772290&pd_r', 'Draft', 1);

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

INSERT INTO `profile` (`id`, `name`, `read_site`, `create_contact`, `modify_contact`, `delete_contact`, `id_account`, `active`) VALUES
(6, 'Dev Main', 0, 1, 1, 1, 1, 1),
(7, 'Product Owner', 1, 1, 1, 0, 1, 1),
(8, 'DevOps', 1, 1, 0, 0, 1, 1);

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

INSERT INTO `site` (`id`, `name`, `url`, `domain`, `icon_path`, `private_key`, `public_key`, `url_amazon`, `active`) VALUES
(1, 'Straw Hat', 'https://strawhat.fr', 'strawhat.fr', NULL, 'BopLrUhwOXN1Q2e9FL7bIn4qcjVUwLVwga6Q1G85lDw', 'BFIjlI9UBXj6Bz1j_n-ytbz4Nqkj20hCEeP8PsSQaqhlv6pYZ1LNNpaf0_6we1Gia3NEaUAyWfc-UNxpvFqPOa4', 'https://solgacomdev.s3.eu-west-3.amazonaws.com/webpush_files/webpush_9c3ad656-48bc-4401-904f-078e8a847e91.js', 1),
(2, 'Straw Gazing', 'https://strawgazing.fr', 'strawgazing.fr', NULL, 'FDbo7Do-EJ_wtGMp_1erDdp4a5jyRx9dazQsGbSrTto', 'BHWcBaE8PCNE1vbuVzc6pvoP4d0EWTh4ZD2OIGOukGoT_qXLr-JSCLN6Qy2qePVjEsrDSffS4G_1eDJCX0ppfAM', 'https://solgacomdev.s3.eu-west-3.amazonaws.com/webpush_files/webpush_3fe521bc-ce83-494b-9236-72bbca5ba03a.js', 1);

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

INSERT INTO `site_customer` (`id`, `id_site`, `id_customer`, `active`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1);

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

INSERT INTO `site_rule` (`id`, `name`, `modify_site`, `create_site`, `delete_site`, `id_contact`, `id_site`, `read_dashboard`, `active`) VALUES
(1, 'Owner', 1, 1, 1, 1, 1, 0, 1),
(2, 'Owner', 1, 1, 1, 1, 2, 0, 1);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `automation`
--
ALTER TABLE `automation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `site`
--
ALTER TABLE `site`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `site_customer`
--
ALTER TABLE `site_customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `site_rule`
--
ALTER TABLE `site_rule`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

-- -------------------------------------------------------------
-- TablePlus 1.2(182)
--
-- https://tableplus.com/
--
-- Database: SellMobile
-- Generation Time: 2019-01-23 18:05:25.0140
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `Catalogys`;
CREATE TABLE `Catalogys` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `Transactions`;
CREATE TABLE `Transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `inputdate` date NOT NULL,
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` decimal(18,0) NOT NULL,
  `fullname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deliverydate` date NOT NULL,
  `users_id` int(10) unsigned NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transactions_users_id_foreign` (`users_id`),
  CONSTRAINT `transactions_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` double(8,2) NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(18,0) NOT NULL,
  `guarantee` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catalogys_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_catalogys_id_foreign` (`catalogys_id`),
  CONSTRAINT `products_catalogys_id_foreign` FOREIGN KEY (`catalogys_id`) REFERENCES `Catalogys` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `DetailMobiles`;
CREATE TABLE `DetailMobiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `display` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operator` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rearcamera` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `frontcamera` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ram` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `internalmemory` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `externalmemory` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sim` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantitysim` int(11) NOT NULL,
  `resolution` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `advancedphotography` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flash` tinyint(1) NOT NULL,
  `cpuspeed` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `headphonejack` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `network` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `size` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quality` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `security` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `function` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meetingday` date NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detailmobiles_products_id_foreign` (`products_id`),
  CONSTRAINT `detailmobiles_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `DetailLaptops`;
CREATE TABLE `DetailLaptops` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `outstandingfeatures` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `display` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `design` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operator` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `camera` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ram` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harddrive` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `graphicscard` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpuspeed` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `socket` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `size` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maxram` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `audiotechnology` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `touchoption` tinyint(1) NOT NULL,
  `wifi` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memorycard` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comppact-disc` tinyint(1) NOT NULL,
  `pin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `material` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detaillaptops_products_id_foreign` (`products_id`),
  CONSTRAINT `detaillaptops_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `DetailAccessories`;
CREATE TABLE `DetailAccessories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `jack` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `length` double(50,2) NOT NULL,
  `speedread` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speedwrite` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `electric` int(11) NOT NULL,
  `function` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeconnet` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `power` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `efficiency` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detailaccessories_products_id_foreign` (`products_id`),
  CONSTRAINT `detailaccessories_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `Products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `Orders`;
CREATE TABLE `Orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `products_id` int(10) unsigned NOT NULL,
  `transactions_id` int(10) unsigned NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_products_id_foreign` (`products_id`),
  KEY `orders_transactions_id_foreign` (`transactions_id`),
  CONSTRAINT `orders_products_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `Products` (`id`),
  CONSTRAINT `orders_transactions_id_foreign` FOREIGN KEY (`transactions_id`) REFERENCES `Transactions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES ('1', '2019_01_23_093705_catalogys', '1'),
('2', '2019_01_23_093707_users', '1'),
('3', '2019_01_23_093709_transactions', '1'),
('4', '2019_01_23_093711_products', '1'),
('5', '2019_01_23_093714_detail_mobiles', '1'),
('6', '2019_01_23_093716_detail_laptops', '1'),
('7', '2019_01_23_093718_detail_accessories', '1'),
('8', '2019_01_23_093721_orders', '1');




/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
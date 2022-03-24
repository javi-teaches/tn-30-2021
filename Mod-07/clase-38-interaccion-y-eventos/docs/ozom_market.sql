-- / Creación de la DB
CREATE DATABASE ozom_market;
USE ozom_market;


-- / Creación de las tablas que NO tienen FK
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- / Creación de las tablas que tienen FK
CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(255) NULL DEFAULT 'no-image.png',
  `description` text NULL DEFAULT NULL,
  `brandId` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `userId` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `cartProduct` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `productId` int(10) unsigned DEFAULT NULL,
  `cartId` int(10) unsigned DEFAULT NULL,
  `productPrice` decimal(8,2) DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `categoryProduct` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `productId` int(10) unsigned DEFAULT NULL,
  `categoryId` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `colorProduct` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `productId` int(10) unsigned DEFAULT NULL,
  `colorId` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- / Populando las tablas
INSERT INTO `brands` (`name`) 
VALUES 
	('Apple'),
	('Microsoft'),
	('Asus'),
	('BGH'),
	('Dell');

INSERT INTO `categories` (`name`) 
VALUES 
	('Desktop computers'),
	('Laptops'),
	('Tablets'),
	('Cellphones'),
	('Tv sets');

INSERT INTO `colors` (`name`)
VALUES 
	('yellow'),
	('blue'),
	('red'),
	('white'),
	('black');

INSERT INTO `users` (`firstName`, `lastName`, `email`, `password`) 
VALUES
	('Jon', 'Doe', 'jondoe@email.com', '$2a$10$L3dkozhI68cu59FsDFILW.ym3JkelGRyX.NsqCVWi5UyfVvsM5Ewe'),
	('Jane', 'Doe', 'janedoe@email.com', '$2a$10$L3dkozhI68cu59FsDFILW.ym3JkelGRyX.NsqCVWi5UyfVvsM5Ewe'),
	('Jon', 'Snow', 'jonsnow@email.com', '$2a$10$L3dkozhI68cu59FsDFILW.ym3JkelGRyX.NsqCVWi5UyfVvsM5Ewe');
	
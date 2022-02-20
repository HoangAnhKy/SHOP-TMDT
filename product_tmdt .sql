-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2022 at 02:15 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product_tmdt`
--

-- --------------------------------------------------------

--
-- Table structure for table `accound`
--

CREATE TABLE `accound` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Role` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accound`
--

INSERT INTO `accound` (`name`, `email`, `pass`, `Role`) VALUES
('admin', 'admin@gmail.com', '1', 'admin'),
('kỳ hoàng', 'hoanganhkyltt@gmail.com', '3096', 'user'),
('mie', 'hoanganhkyltt@gmail.com', '1', 'user'),
('Test2', 'hoanganhkyltt@gmail.com', '2', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `code_Bill` int(4) NOT NULL,
  `date` datetime NOT NULL,
  `Trading_code` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`code_Bill`, `date`, `Trading_code`) VALUES
(1, '2022-02-20 20:10:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `name_accound` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(4) NOT NULL,
  `quantily` int(4) NOT NULL,
  `favorites` tinyint(1) NOT NULL,
  `product_new` tinyint(1) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorite`
--

INSERT INTO `favorite` (`name_accound`, `name`, `sale`, `image`, `price`, `quantily`, `favorites`, `product_new`, `id`) VALUES
('Test2', 'jodan gray 4', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('Test2', 'jodan gray 3', '0%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('Test2', 'jodan gray 1', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('mie', 'hoodie 3', '0%', './IMG/t1.png', 3200000, 1, 1, 1, 6),
('mie', 'jodan gray 4', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('Test2', 'jodan gray 2', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('kỳ hoàng', 'jodan gray 2', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 1, 1, 1, 1),
('mie', 'jodan green 8', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 1, 1, 1, 3),
('mie', 'jodan green 1', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 1, 1, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `image_web`
--

CREATE TABLE `image_web` (
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `image_web`
--

INSERT INTO `image_web` (`name`, `image`) VALUES
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-1.png'),
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-2.png'),
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-3.png'),
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-4.png'),
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png'),
('2', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-6.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs-1.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs-4.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs-5.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs-6.png'),
('3', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs-7.png'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC-1.jpg'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC-2.jpg'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC-3.jpg'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC-4.jpg'),
('1', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC-5-1024x1024.jpg'),
('11', './IMG/PK3.png'),
('10', './IMG/PK3.png'),
('9', './IMG/PK1.png'),
('8', './IMG/t3.png'),
('7', './IMG/t2.png'),
('6', './IMG/t1.png');

-- --------------------------------------------------------

--
-- Table structure for table `my_cart`
--

CREATE TABLE `my_cart` (
  `name_accound` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(4) NOT NULL,
  `quantity` int(4) NOT NULL,
  `max_quantity` int(4) NOT NULL,
  `favorites` tinyint(1) NOT NULL,
  `product_new` tinyint(1) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(4) NOT NULL,
  `quantily` int(4) NOT NULL,
  `sales` int(4) NOT NULL,
  `favorites` tinyint(1) NOT NULL,
  `product_new` tinyint(1) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`name`, `sale`, `image`, `price`, `quantily`, `sales`, `favorites`, `product_new`, `id`) VALUES
('jodan gray 1', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 2', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 10, 90, 0, 1, 1),
('jodan gray 3', '0%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 4', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 1, 1, 1),
('jodan gray 5', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 6', '0%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 7', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 8', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 9', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 10', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 11', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan gray 12', '-60%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 100, 0, 0, 1, 1),
('jodan red 1', '-30%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 2', '-30%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 3', '0%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 4', '-60%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 5', '-60%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 6', '0%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 7', '-30%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 8', '-30%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 9', '-30%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 10', '-60%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 11', '-60%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan red 12', '-60%', './IMG/httpswww.nicekicks.comair-jordan-1-zoom-cmft-bred-ct0979-006-release-date-5.png', 4800000, 100, 0, 0, 1, 2),
('jodan green 1', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 1, 1, 3),
('jodan green 2', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 3', '0%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 4', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 5', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 6', '0%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 7', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 8', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 1, 1, 3),
('jodan green 9', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 10', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 11', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan green 12', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct51324jordan-brand-air-jordan-3-retro-gs.png', 4800000, 100, 0, 0, 1, 3),
('jodan ping 1', '-30%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 2', '-30%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 3', '0%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 4', '-60%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 5', '-60%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 6', '0%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 7', '-30%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 8', '-30%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 9', '-30%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 10', '-60%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 11', '-60%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan ping 12', '-60%', './IMG/Nike-Dunk-High-LX-Toasty-Rusty-Pink.png', 4800000, 100, 0, 0, 1, 4),
('jodan back 1', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 2', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 3', '0%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 4', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 5', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 6', '0%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 7', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 8', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 9', '-30%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 10', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 11', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('jodan back 12', '-60%', './IMG/httpswww.sneakersnstuff.comenproduct48694jordan-brand-air-jordan-1-mid-se-7.png', 4800000, 100, 0, 0, 1, 5),
('hoodie 1', '-30%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 2', '-30%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 3', '0%', './IMG/t1.png', 3200000, 100, 0, 1, 1, 6),
('hoodie 4', '-60%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 5', '-60%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 6', '0%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 7', '-30%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 8', '-30%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 9', '-30%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 11', '-60%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('hoodie 12', '-60%', './IMG/t1.png', 3200000, 100, 0, 0, 1, 6),
('Ao khoac red 1', '-30%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 2', '-30%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 3', '0%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 4', '-60%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 5', '-60%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 6', '0%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 7', '-30%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 8', '-30%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 9', '-30%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 10', '-60%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 11', '-60%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac red 12', '-60%', './IMG/t2.png', 3200000, 100, 0, 0, 1, 7),
('Ao khoac blue 1', '-30%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 2', '-30%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 3', '0%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 4', '-60%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 5', '-60%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 6', '0%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 7', '-30%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 8', '-30%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 9', '-30%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 10', '-60%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 11', '-60%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Ao khoac blue 12', '-60%', './IMG/t3.png', 3200000, 100, 0, 0, 1, 8),
('Non 1', '-30%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 2', '-30%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 3', '0%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 4', '-60%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 5', '-60%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 6', '0%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 7', '-30%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 8', '-30%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 9', '-30%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 10', '-60%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 11', '-60%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Non 12', '-60%', './IMG/PK1.png', 3200000, 100, 0, 0, 1, 9),
('Tui 1', '-30%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 2', '-30%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 3', '0%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 4', '-60%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 5', '-60%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 6', '0%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 7', '-30%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 8', '-30%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 9', '-30%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 10', '-60%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 11', '-60%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Tui 12', '-60%', './IMG/PK2.png', 3200000, 100, 0, 0, 1, 10),
('Kinh 1', '-30%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 2', '-30%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 3', '0%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 4', '-60%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 5', '-60%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 6', '0%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 7', '-30%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 8', '-30%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 9', '-30%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 10', '-60%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 11', '-60%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11),
('Kinh 12', '-60%', './IMG/PK3.png', 3200000, 100, 0, 0, 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `status_cart`
--

CREATE TABLE `status_cart` (
  `code_Bill` int(4) NOT NULL,
  `name_accound` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(4) NOT NULL,
  `quantity` int(4) NOT NULL,
  `favorites` tinyint(1) NOT NULL,
  `product_new` tinyint(1) NOT NULL,
  `id` int(4) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status_cart`
--

INSERT INTO `status_cart` (`code_Bill`, `name_accound`, `name`, `sale`, `image`, `price`, `quantity`, `favorites`, `product_new`, `id`, `status`) VALUES
(1, 'mie', 'jodan gray 2', '-30%', './IMG/Nike-Air-Force-1-Mid-Jewel-NYC.png', 4800000, 10, 0, 0, 1, 'chờ hàng');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accound`
--
ALTER TABLE `accound`
  ADD PRIMARY KEY (`name`,`email`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`code_Bill`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `code_Bill` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

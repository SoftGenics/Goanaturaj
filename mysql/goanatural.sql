-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 05, 2022 at 07:55 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goanatural`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(225) NOT NULL,
  `userId` varchar(225) DEFAULT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `postcode` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `userId`, `fullname`, `address`, `city`, `state`, `postcode`, `phone`, `email`) VALUES
(1, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', NULL, 'gjkgh'),
(2, '2', 'chandan', 'fdsdfghhj', 'delhi', 'bihar', '2456', '765867', 'gjkgh'),
(3, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', NULL, 'gjkgh'),
(4, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', '765867', 'gjkgh'),
(5, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', '765867', 'gjkgh'),
(6, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', '765867', 'gjkgh'),
(7, '1', 'niraj', 'fdsdfghhj', 'patna', 'bihar', '2456', '765867', 'gjkgh');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'mishra@gmail.com', '12345'),
(2, 'prashant1@gmail.com', '$2a$08$TAosUoG95HdBUmNzTYEVieo96wounc77iinQMqYcyS2'),
(3, 'prashant11@gmail.com', '$2a$08$.H.x6zQjgCYpUz2/OAYQjOWZ/W5sH7lyDXWFCZi1UXR'),
(4, 'prashant11@gmail.com', '$2a$08$vh5yxNb5wPeUo9bJCr5OfePsp3ybSbOPr8yRla8wDkM');

-- --------------------------------------------------------

--
-- Table structure for table `AdminTable`
--

CREATE TABLE `AdminTable` (
  `id` int(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AdminTable`
--

INSERT INTO `AdminTable` (`id`, `email`, `password`) VALUES
(1, 'prashant11@gmail.com', '$2a$08$PfL9FDB.gfrnbwoAbkbJ9OA3xoL81f1E9hNaPV4AwNerYCTF2V86e'),
(2, 'prashant1@gmail.com', '$2a$08$r1DtUIT.0RSw1wJnBX6pS.0yS2I8sqXVnXlgiEfR8bcwfGW4j6k4G');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(255) NOT NULL,
  `p_name` varchar(20) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `category` varchar(10) DEFAULT NULL,
  `rating` int(16) NOT NULL,
  `image` varchar(225) DEFAULT NULL,
  `discount` varchar(20) DEFAULT NULL,
  `waight` varchar(20) DEFAULT NULL,
  `dics` varchar(255) DEFAULT NULL,
  `stock` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `p_name`, `price`, `category`, `rating`, `image`, `discount`, `waight`, `dics`, `stock`) VALUES
(20, 'ColdPress', '600', 'coconut', 0, 'image-1658759772766.jpg', '110', '1Ltr', 'Goa Natural Cold Pressed and Unrefined Coconut Oil is extracted without the use of chemicals from sun-dried coconut kernels. ', '50'),
(21, 'Coconut Oil', '300', 'coconut', 0, 'image-1658760280885.jpg', '41', '500ml', 'Goa Natural Cold Pressed and Unrefined Coconut Oil is extracted without the use of chemicals from sun-dried coconut kernels. Because of the wooden cold press technique, the naturally occurring rich aroma, flavour, and taste of the coconut are preserved. I', '50'),
(22, 'Coconut Oil', '500', 'coconut', 0, 'image-1658760535813.jpg', '115', '750ml', 'Goa Natural Cold Pressed and Unrefined Coconut Oil is extracted without the use of chemicals from sun-dried coconut kernels. Because of the wooden cold press technique, the naturally occurring rich aroma, flavour, and taste of the coconut are preserved. I', '50'),
(23, 'Coconut Oil', '75', 'coconut', 0, 'image-1658760648448.jpg', '13', '100ml', 'Goa Natural Cold Pressed and Unrefined Coconut Oil is extracted without the use of chemicals from sun-dried coconut kernels. Because of the wooden cold press technique, the naturally occurring rich aroma, flavour, and taste of the coconut are preserved. I', '50'),
(24, 'Groundnut Oil', '700', 'groundnut', 0, 'image-1658760854185.jpg', '175', '1Ltr', 'Cold pressed groundnut oil is one of the most versatile and extensively used cooking oils in India. It can be used for both conventional cooking and unique cuisines. \r\nGoa Natural Groundnut Oil is pure, cold-pressed, and prepared from the highest-grade gr', '50'),
(25, 'Groundnut Oil', '350', 'groundnut', 0, 'image-1658761895676.jpg', '77', '500ml', 'Cold pressed groundnut oil is one of the most versatile and extensively used cooking oils in India. It can be used for both conventional cooking and unique cuisines. \r\nGoa Natural Groundnut Oil is pure, cold-pressed, and prepared from the highest-grade gr', '50'),
(26, 'Safflower Oil', '750', 'safflower', 0, 'image-1658761241224.jpg', '204', '1Ltr', 'The seeds of the Carthamus tinctorius plant, a related of the Sunflower, are used to extract Goa Natural Cold Pressed Safflower Oil. Safflower is an Indian native and a popular choice for a healthy lifestyle. It decreases cholesterol and protects the hear', '50'),
(27, 'Safflower Oil', '325', 'safflower', 0, 'image-1658761346303.jpg', '38', '500ml', 'The seeds of the Carthamus tinctorius plant, a related of the Sunflower, are used to extract Goa Natural Cold Pressed Safflower Oil. Safflower is an Indian native and a popular choice for a healthy lifestyle. It decreases cholesterol and protects the hear', '50'),
(29, 'Turmeric Power', '298', 'turmeric', 0, 'image-1658761554632.jpg', '10', '1kg', 'To ensure freshness, flavour, and colour, Goa Natural Turmeric is produced under sanitary conditions utilising slow grinding procedures. Curcumin is its active element, and it has an earthy, somewhat bitter, peppery flavour.', '50'),
(30, 'Turmeric Power', '166', 'turmeric', 0, 'image-1658761623953.jpg', '10', '500g', 'To ensure freshness, flavour, and colour, Goa Natural Turmeric is produced under sanitary conditions utilising slow grinding procedures. Curcumin is its active element, and it has an earthy, somewhat bitter, peppery flavour.', '50'),
(38, 'turmeric', '400', 'Turmeric P', 0, 'image-1658906690605.jpg', '30', '400', 'test', '50');

-- --------------------------------------------------------

--
-- Table structure for table `shipaddress`
--

CREATE TABLE `shipaddress` (
  `id` int(200) NOT NULL,
  `state` varchar(100) NOT NULL,
  `postcode` varchar(100) NOT NULL,
  `charge` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipaddress`
--

INSERT INTO `shipaddress` (`id`, `state`, `postcode`, `charge`) VALUES
(1, 'patna', '800020', '0');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(225) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `number` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `name`, `number`, `password`, `address`) VALUES
(1, 'mishr@gmail.com', 'wqrer', '234', '$2a$08$P6DeNK4HgAo48UgcWW1dDusto9XEqLCMfiZwRVecJ4xQ3IrMccwki', 'Address 1'),
(2, 'mishra@gmail.com', 'Niraj', '234', '$2a$08$NAV0QtVugpwekSjMbkZ1ZerLfO0S3zeOboTV0FuEAdw8ipk/c8y0W', 'Address 1'),
(3, 'prashant@gmail.com', 'prashant', '8765434', '12345', 'Address 1'),
(5, 'mis98@gmail.com', 'Niraj', '23456', 'Niraj123', 'address 1');

-- --------------------------------------------------------

--
-- Table structure for table `UserTable`
--

CREATE TABLE `UserTable` (
  `id` int(225) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `number` varchar(100) DEFAULT NULL,
  `password` varchar(225) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `verifyEmail` tinyint(1) DEFAULT 0,
  `verificationLink` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UserTable`
--

INSERT INTO `UserTable` (`id`, `email`, `name`, `number`, `password`, `address`, `verifyEmail`, `verificationLink`) VALUES
(1, 'mishara@gmail.com', 'niraj', '576863', '', 'Patna', 0, ''),
(2, 'email', 'name', 'number', '$2a$08$Q3/1CaFAAqX7NGU.tqosMubRZ/J06iAiLEa4N.8Wdr2ujafFSLnEC', 'address', 0, ''),
(3, 'email', 'name', 'number', 'password', 'address', 0, ''),
(4, 'mis98@gmail.com', 'Niraj', '23456', 'Niraj123', 'address 1', 0, ''),
(5, 'pk', 'prashant@gmail.com', '125637', '12345', 'address 1', 0, ''),
(6, 'prashant@gmail.com', 'prashant', '125637', '12345', 'address 1', 0, ''),
(7, 'prashant1@gmail.com', 'prashant kumar', '125637', '$2a$08$TAosUoG95HdBUmNzTYEVieo96wounc77iinQMqYcyS25/EpUvmHcy', 'address 1', 0, ''),
(8, 'mishra7@gmail.com', 'Niraj', '125637', '$2a$08$cbiVQX0cGkEfb5ifUpzJh.fe0jSU9X1YTBy8w9Zqpe2WTiru.g2Ba', 'address 1', 0, ''),
(9, 'pk@gmail.com', 'Pk', '125637', '$2a$08$VRIh.b1.SPT/qJ0QL3r8w.rdmatI7zOv8edjquYE5rTrVDYhVbKUm', 'address 1', 0, ''),
(10, 'prince@gmail.com', 'Prashant', '125637', '$2a$08$/AcAuBkMMHwEe6a/HjAW.OkuTgSexWfT8ejYr3Fl2Wk2Q63cD5P.S', 'address 1', 0, ''),
(11, 'prashant25@gmail.com', 'pkrs', '125637', '$2a$08$s5Uh5JI8DDL97JOVUFSbl.3Hh2oZkkRbXDnZT2B2193xXWiip6pom', 'address 1', 0, ''),
(12, 'prashant25@gmail.com', 'pkrs', '125637', '$2a$08$.G27LUlMnapISqXNnKW/I.o6pydYA8aoF9jvt4cljAuTn3AN0qJ4q', 'address 1', 0, ''),
(13, 'mishra74881@gmail.com', 'NIRAJ KUMAR MISHRA', '125637', '$2a$08$d/KYIOAaBUfypw7auOZ1.edp3mLeyFElAcmXfH6vFypJxh0nT/.Lm', 'address 1', 0, ''),
(14, 'mishra74881@gmail.com', 'NIRAJ KUMAR MISHRA', '125637', '$2a$08$sytC2Sr/tpjuNYHKDttmneGoq4Rjv.Os7sdl0pcun8LUkyp25Gly2', 'address 1', 0, ''),
(15, 'prashant@gmail.com', 'pk', '125637', '$2a$08$lY953vtDTbYrhLjQnLWyYeMVojPPrf6aEUaBGujo2FXfYgiCM.pBq', 'address 1', 0, ''),
(16, 'prashant@gmail.com', 'pk', '125637', '$2a$08$.fqUP6DXcOfEB0cCGSwf5uo6dGepy4gJqBquGNPjtPym7Wa03BqjS', 'address 1', 0, ''),
(17, 'prashants@gmail.com', 'Prashants', '125637', '$2a$08$iQlLjoNlKoe1YyT8niEpkuhRluxoDummRNfChgnbilAMXl94T7o32', 'address 1', 0, ''),
(44, 'jubinayoob963@gmail.com', 'jubin', '125637', '$2a$08$Oe10Eg.utO//rBWxxne/4eTzIz3S28zsz5iShv2d1rDFUW5DoKiLS', 'address 1', 0, '99d559f4-2aed-4079-bf18-39eac08e46fa'),
(45, 'jubinayoob369@gmail.com', 'jubin', '125637', '$2a$08$e2.moj5HAi9VCRncjA2ej.HRwOhUgtGsGuGj8FhDjwHG..zhlQda.', 'address 1', 1, 'c6047412-5c61-4517-9759-3d28491351e4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AdminTable`
--
ALTER TABLE `AdminTable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipaddress`
--
ALTER TABLE `shipaddress`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserTable`
--
ALTER TABLE `UserTable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `AdminTable`
--
ALTER TABLE `AdminTable`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `shipaddress`
--
ALTER TABLE `shipaddress`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `UserTable`
--
ALTER TABLE `UserTable`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

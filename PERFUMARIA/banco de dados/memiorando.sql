-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 11, 2022 at 08:12 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `meudb`
--

-- --------------------------------------------------------

--
-- Table structure for table `memiorando`
--

CREATE TABLE IF NOT EXISTS `memiorando` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(10) NOT NULL,
  `cabecalho` varchar(1000) NOT NULL,
  `conteudo` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `memiorando`
--

INSERT INTO `memiorando` (`id`, `numero`, `cabecalho`, `conteudo`) VALUES
(1, '01/2022', 'Número alterado', 'Contratatado'),
(3, '01/2022', 'Ao RH', 'Contratatado'),
(4, '01/2022', 'Ao RH', 'Contratatado'),
(5, '01/2022', 'Ao RH', 'Contratatado'),
(6, '01/2022', 'Ao RH', 'Contratatado'),
(7, '01/2022', 'Ao RH', 'Contratatado'),
(8, '200/2022', 'Ao Departamento de Recusos Humanos', 'Venho por meio deste memorando solicitar a contrataÃ§Ã£o de um desenvolvedor PHP para a equipe de desenvolvimento, o mesmo deve ter conhecimentos de HTMl, CSS e Javascript e capacidade de trabalhar em equipe'),
(9, '200/2022', 'Ao Departamento de Recusos Humanos', 'Venho por meio deste memorando solicitar a contrataÃ§Ã£o de um desenvolvedor PHP para a equipe de desenvolvimento, o mesmo deve ter conhecimentos de HTMl, CSS e Javascript e capacidade de trabalhar em equipe'),
(10, '01/2022', 'Ao RH', 'Contratatado'),
(11, '01/2023', 'Ao RH', 'Demissao'),
(12, '02/2024', 'Ao RH', 'Contratatado'),
(13, '02/2025', 'Ao RH', 'Demissao'),
(14, '03/2026', 'Ao RH', 'Contratatado'),
(15, '03/2027', 'Ao RH', 'Demissao'),
(16, '11/2026', ' ao Sr(a) ,\nAssunto:\n	', 'ConteÃºdo do memorando\nAtenciosamente,\nNome do remetente.	\n	'),
(17, 'numero/ano', ' ao Sr(a) ,\nAssunto:\n	', 'ConteÃºdo do memorando\nAtenciosamente,\nNome do remetente.	\n	');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE DATABASE IF NOT EXISTS articles_db;
USE articles_db;

CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  author VARCHAR(100),
  status ENUM('draft', 'published') DEFAULT 'draft',
  rating INT DEFAULT 0
);

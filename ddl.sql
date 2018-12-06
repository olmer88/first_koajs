create database IF NOT EXISTS firstKoajs;
use firstKoajs;

CREATE TABLE IF NOT EXISTS firstKoajs.posts (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(256) NOT NULL,
  `content` VARCHAR(2048) NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE = InnoDB;

INSERT IGNORE INTO posts (id,title,content)
values ( 1,  'first post',  'content from first post'),
(2, 'Second post', 'Content from second post')
;

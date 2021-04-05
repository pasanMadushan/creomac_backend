use `creomac`;

CREATE TABLE `User` (
  `user_id` int not null auto_increment,
  `email` varchar(50),
  `password` varchar(50),
  `first_name` Varchar(50),
  `last_name` Varchar(50),
  `user_type` ENUM('admin','super-admin'),
  `state` boolean,
  `image` blob,
  `tagline` varchar(150)
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `Category` (
  `cat_id` int not null auto_increment,
  `cat_name` varchar(50) unique ,
  `active` boolean,
  PRIMARY KEY (`cat_id`)
);


CREATE TABLE `Project` (
  `project_id` int not null auto_increment,
  `cat_id` int not null,
  `user_id` int not null,
  `title` varchar(255) not null,
  `description` TEXT,
  `date` date,
  `likes` int,
  `cover_image` blob,
  PRIMARY KEY (`project_id`),
  FOREIGN KEY (`cat_id`) references Category(`cat_id`),
  FOREIGN KEY (`user_id`) references User(`user_id`)
);


CREATE TABLE `Newsteller` (
    `email` varchar(50),
    PRIMARY KEY (`email`)
)



-- -- function - get cat id by cat name

-- DELIMITER $$
-- CREATE FUNCTION GetCatID(Cat_Name varchar(50))
-- RETURNS INTEGER
-- DETERMINISTIC
-- BEGIN
--   DECLARE CatID INTEGER;
--   SELECT cat_id INTO CatID 
--   FROM Category
--   WHERE Category.cat_name = Cat_Name;
--   RETURN CatID;
-- END$$
-- DELIMITER ;



-- -- Procedure - Insert into categories when no same category name there

-- DELIMITER $$
-- CREATE PROCEDURE `CreateCategoryNoExist`(
-- IN `Cat_Name` varchar(50)
-- )
-- BEGIN
--     -- Transaction
--     DECLARE CatID INTEGER;
-- START TRANSACTION;
--     INSERT INTO `Category` (`cat_name`) VALUES (`Cat_Name`);
--     SET CatID = GetCatID(`Cat_Name`);
-- 	INSERT INTO `Post_Category` (`cat_id`, `cat_name`) VALUES (CatID, Cat_Name);
-- COMMIT;
-- END$$
-- DELIMITER ;





-- -- Procedure - Insert into categories when  same category name is there

-- DELIMITER $$
-- CREATE PROCEDURE `CreateCategoryWithExist`(
-- IN `Cat_Name` varchar(50)
-- )
-- BEGIN
--     -- Transaction
--     DECLARE CatID INTEGER;
-- START TRANSACTION;
--     INSERT INTO `Category` (`cat_name`) VALUES (`Cat_Name`);
--     SET CatID = GetCatID(`Cat_Name`);
--     UPDATE `Post_Category` SET  `cat_id` = `CatID` where `cat_name` = `Cat_Name`;
-- COMMIT;
-- END$$
-- DELIMITER ;





-- -- -- Procedure - Update category name

-- -- DELIMITER $$
-- -- CREATE PROCEDURE `UpdateCategory`(
-- -- IN `Cat_Name` varchar(50)
-- -- )

-- -- BEGIN
-- --     -- Transaction
-- --     DECLARE CatID INTEGER;
-- -- START TRANSACTION;
-- --     INSERT INTO `Category` (`cat_name`) VALUES (`Cat_Name`);
-- --     SET CatID = GetCatID(`Cat_Name`);
-- --     INSERT INTO `Post_Category` (`cat_id`, `cat_name`) VALUES (CatID, Cat_Name);
-- -- COMMIT;
-- -- END$$

-- -- DELIMITER ;





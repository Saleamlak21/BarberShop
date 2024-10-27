
CREATE TABLE IF NOT EXISTS `general_info` (
  `general_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) NOT NULL,
  `pair` varchar(255) NOT NULL,
  `session` varchar(255) NOT NULL,
  `trade_side` varchar(255) NOT NULL,
  `fill_price` varchar(255) NOT NULL,
  PRIMARY KEY (general_info_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `trade` (
    `trade_id` int(11) NOT NULL AUTO_INCREMENT,
    `general_info_id` int(11) NOT NULL,
    `current_balance` varchar(255) NOT NULL,
    `rrr` varchar(255) NOT NULL,
    `entry_reason` varchar(255) NOT NULL,
     PRIMARY KEY (trade_id),
     FOREIGN KEY (general_info_id) REFERENCES general_info(general_info_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `trade_result` (   
    `trade_result_id` int(11) NOT NULL AUTO_INCREMENT,
    `general_info_id` int(11) NOT NULL,
    `balance_after_trade` TEXT,
    `profit_loss` TEXT,
    `comments` TEXT,
    -- `image` TEXT,
    `win_or_loss` int(11),
    `why_exited` TEXT,
    PRIMARY KEY (trade_result_id),
    FOREIGN KEY (general_info_id) REFERENCES general_info(general_info_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `trade_images` (   
    `trade_images_id` int(11) NOT NULL AUTO_INCREMENT,
    `general_info_id` int(11) NOT NULL,
    `image` TEXT,
    -- `image_two` TEXT,
    -- `image_three` TEXT,
    PRIMARY KEY (trade_images_id),
    FOREIGN KEY (general_info_id) REFERENCES general_info(general_info_id)
) ENGINE=InnoDB;



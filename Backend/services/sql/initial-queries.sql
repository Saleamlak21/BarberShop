
-- Company tables 
CREATE TABLE IF NOT EXISTS `company_roles` (
  `company_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_role_name` varchar(255) NOT NULL,
  PRIMARY KEY (company_role_id),
  UNIQUE (company_role_name)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `common_services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_description` TEXT,
  `servive_price` varchar(255) NOT NULL,
  PRIMARY KEY (service_id)
) ENGINE=InnoDB;


-- User tables 
CREATE TABLE IF NOT EXISTS `user_identifier` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_hash` varchar(255) NOT NULL,
  `user_added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id), 
  UNIQUE (user_email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_info` (
  `user_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_first_name` varchar(255) NOT NULL,
  `user_last_name` varchar(255) NOT NULL,
  `user_phone_number` varchar(255) NOT NULL,
  `active_user_status` varchar(255) NOT NULL,
  PRIMARY KEY (user_info_id),
  FOREIGN KEY (user_id) REFERENCES user_identifier(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_pass` (
  `user_pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_password_hashed` varchar(255) NOT NULL,
  PRIMARY KEY (user_pass_id),
  FOREIGN KEY (user_id) REFERENCES user_identifier(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_role` (
  `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `company_role_id` int(11) NOT NULL,
  PRIMARY KEY (user_role_id),
  FOREIGN KEY (user_id) REFERENCES user_identifier(user_id),
  FOREIGN KEY (company_role_id) REFERENCES company_roles(company_role_id)
) ENGINE=InnoDB;

-- Order tables  
-- CREATE TABLE IF NOT EXISTS `appointments` (
--   `appointment_id` int(11) NOT NULL AUTO_INCREMENT,
--   `user_id` int(11) NOT NULL,
--   `service_id` int(11) NOT NULL,
--   `appointment_date` varchar(255) NOT NULL,
--   `appointment_duration` varchar(255) NOT null,
-- --   `order_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
--   `appointment_hash` varchar(255) NOT NULL,
--   PRIMARY KEY (appointment_id),
--   FOREIGN KEY (user_id) REFERENCES user_identifier(user_id),
--   FOREIGN KEY (service_id) REFERENCES common_services(service_id)
-- ) ENGINE=InnoDB;

-- CREATE TABLE IF NOT EXISTS `appointment_info` (
--   `appointment_info_id` int(11) NOT NULL AUTO_INCREMENT,
--   `appointment_id` int(11) NOT NULL,
--   `appointment_total_price` int(11) NOT NULL,
--   `appointmetn_status` varchar(255) NOT NULL,
--   `payment_status` varchar(255) NOT NULL,
-- --   `completion_date` DATETIME,
-- --   `additional_request` TEXT,
-- --   `notes_for_internal_use` TEXT,
-- --   `notes_for_customer` TEXT,
-- --   `additional_requests_completed` int(11) NOT NULL,
--   PRIMARY KEY (appointment_info_id),
--   FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id)
-- ) ENGINE=InnoDB;

-- CREATE TABLE IF NOT EXISTS `appointment-additional-info` (
--   `appointment-additional-id` int(11) NOT NULL AUTO_INCREMENT,
--   `appointment_id` int(11) NOT NULL,
--   `booking_timestamp` DATETIME DEFAULT CURRENT_TIMESTAMP,
--   `appointment_type` int(11) NOT NULL,
--   `additional_request` TEXT,
--   PRIMARY KEY (appointment-additional-id),
--  FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id)
-- ) ENGINE=InnoDB;




-- This is the admin account 
INSERT INTO user_identifier(user_email, user_name,user_hash,user_added_date)
VALUES ('admin@admin.com', 'Admin','$yvl4hE10$B6y$2b$10$B6yvl4hECXploM', CURRENT_TIMESTAMP);

-- Add the roles to the database 
INSERT INTO company_roles (company_role_name)
VALUES ('Employee'), ('Customer'), ('Admin');

INSERT INTO user_info (user_id, user_first_name, user_last_name, user_phone_number, active_user_status)
VALUES (1, 'Admin', 'Admin', '555-555-5555', 1); 

-- Password is 123456
INSERT INTO user_pass (user_id,user_password_hashed	)
VALUES (1, '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi');  

INSERT INTO user_role (user_id, company_role_id)
VALUES (1, 3); 
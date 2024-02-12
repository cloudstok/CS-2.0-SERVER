create database template_creater;
use template_creater;

create table if not exists customer (
`customer_id` int not null auto_increment primary key,
`customer_name` varchar(255),
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
   `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `is_deleted` tinyint(1) DEFAULT '0'

);
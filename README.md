# Back-End-ECommerce
Functional backend of a typical CRUD eccomerce site

# Demonstration Video
https://youtu.be/H8ZrLJ8PtZc

# Description
Strutually efficient backend infrastructure to a common E-Commerce website.

# Technologies
1. Express
2. mysql2 (NPM Module)
3. Sequalize

# Installation
1. First you mush clone the git hub repository to directory/folder of your choice
2. Navigate to the aformentioned directory using terminal or Bash
3. Run `npm install` to install the required packages
4. In the same directory, run `mysql -u root -p` and you will be prompt to enter your mysql password
5. Once you have access to Mysql, run `source db/schema.sql`
6. You can now exit mysql using `quit;`
7. Now to seed the data base, run `npm run seed`
8. Once you have your database seeded, you can start the server.
9. `npm start` or `npm run watch` to start with nodemon.

# Purpose
This application simulates the common back-end practices that are utilized in a common e-commerce website. Databases are an important part
of websites in the modern era and there are a countless number of technologies that are used to implement databases in new and efficient ways.
Sequalize is one of those technologies and its ease of use with mysql2 makes it a very reliable javascript technology to have under your belt

![EccommerceBackend](https://user-images.githubusercontent.com/37945822/140948272-1d914451-1ad7-4e2f-b1a9-8d41844077ea.JPG)

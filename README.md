# Borderless
[<img src="https://img.shields.io/badge/Made%20at-Fullstack%20Academy-ed1c24.svg?style=flat-square">](http://fullstackacademy.com/)

Many workers, such as those in developing countries and in fields like health care and humanitarian aid, are in the field for weeks at a time without any access to the Internet, yet still need to record the data they collect. Currently, they must carry around bulky, time-consuming paper forms. With Borderless, users can dynamically create form templates and collect data while offline using a simple web application. Additionally, users can review the information they have collected on the go and leverage data analysis and visualization tools, even when they are still offline. When they return to an Internet connection, they can sync their data to the master database and download the data their colleagues have collected.

## Installation

1. Clone the repository

  ```bash
https://github.com/rekad/capstone.git
```

2. Install dependencies

  ```bash
npm install
```

## Usage

1. Follow the instructions at these sites to set up PouchDB and CouchDB.

  [PouchDB.](https://pouchdb.com/guides/setup-pouchdb.html)

  [CouchDB.](https://pouchdb.com/guides/setup-couchdb.html)

2. Seed the database by running
  ```bash
node seed.js
```
Note: you will want to customize the seed.js file if you want to start with your own data. Alternatively, you can set up your database using CouchDB.

3. Run the application by typing
  ```bash
npm start
```
and
  ```bash
gulp build
```
Hereafter, you can make sure gulp is running by simply typing
  ```bash
gulp
```

4. You should now be able to see the app by typing http://localhost:1337/ into your web browser.

## Examples

### Demo

See a live version of the app [here.](http://goborderless.org/)

See a video demonstration of Borderless [here.](http://www.fullstackacademy.com/final-projects/borderless)

### Screenshots

![Screenshot 1](/screenshot1.png/)

![Screenshot 2](/screenshot2.png/)

![Screenshot 3](/screenshot3.png/)

## Contributors

Poetaster was developed by Kate Humphrey, John Rauschenberg, Patrick Sneep, and Khadija Wharton at Fullstack Academy.


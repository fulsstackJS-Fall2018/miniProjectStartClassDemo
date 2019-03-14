// const DEV_DB_URI = "URL FOR YOU DEVELOPMENT DB";
// const TEST_DB_URI = "URL FOR YOU TEST DB";
//const  DEV_DB_URI = "mongodb://miniprojectusr:test@ds213118.mlab.com:13118/miniproject";
//const TEST_DB_URI = "mongodb://test:test@ds119969.mlab.com:19969/miniproject_test";
const  DEV_DB_URI = "mongodb+srv://sletmig:test@cluster0-pinkw.azure.mongodb.net/miniproject_dev?retryWrites=true";
const TEST_DB_URI = "mongodb+srv://sletmig:test@cluster0-pinkw.azure.mongodb.net/miniproject_test?retryWrites=true";
const MOCHA_TEST_TIMEOUT = 5000;

module.exports = {
  DEV_DB_URI,
  TEST_DB_URI,
  MOCHA_TEST_TIMEOUT
}

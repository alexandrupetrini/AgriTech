/*
The config.js file is used by:
- drop_db.js
- create_db.js
- create_table.js
- store_records.js
- read_table.js
- retrieve.js
- send.js
*/
const databaseOptions = {
  host: "localhost",
  user: "agritech",
  password: "agritech"
};

const TTNOptions = {
  appID: "digital-nation-use-case-1",
  accessKey: "ttn-account-v2.xNqpGaPSJqrLo8sujwTmyceO6ZXbaDUgjPbxeUA2zB8"
};

module.exports = { databaseOptions: databaseOptions, TTNOptions: TTNOptions };

var configValues = require("./config");

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ":" + configValues.pwd + "@testapplication-shard-00-00-wdyf3.mongodb.net:27017,testapplication-shard-00-01-wdyf3.mongodb.net:27017,testapplication-shard-00-02-wdyf3.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=TestApplication-shard-0&authSource=admin"
  }
}

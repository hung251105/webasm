/*Database*/
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const database = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(
      "mongodb+srv://ClusterATN:kietntgdd210002@clusteratn.cz23uub.mongodb.net/ATNStore?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("MongoDB connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("MongoDB connection failed");
  }
};

module.exports = database;
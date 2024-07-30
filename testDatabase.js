const mongoose = require('mongoose');
const User = require('./models/User');
const Message = require('./models/Message');
require('dotenv').config(); // Ensure you load environment variables

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example of creating a new user
const createUser = async () => {
  const user = new User({ username: 'testuser', password: 'testpass' });
  await user.save();
  console.log('User created');
};

createUser().catch(console.error).finally(() => mongoose.disconnect());

const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// stored users and posts 
const userData = require('./userData.json');

const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);

  process.exit(0);
};

//returns
seedDatabase();

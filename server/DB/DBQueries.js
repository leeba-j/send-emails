const { UserModel } = require('./DBModels');

const createUser = async ({ name, email, height, weight }) => {
    const user = await UserModel.create({ name, email, height, weight });
    return user;
};

const getAllUsers = async () => {
    const users = await UserModel.find({});

    return users;
}

module.exports = { createUser, getAllUsers }
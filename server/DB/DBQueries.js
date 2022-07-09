const { UserModel } = require('./DBModels');

const createUser = async ({ name, email, height }) => {
    const user = await UserModel.create({ name, email, height });
    return user;
};

const getAllUsers = async () => {
    const users = await UserModel.find({});

    return users;
}

module.exports = { createUser, getAllUsers }
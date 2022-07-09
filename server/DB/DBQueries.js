const { UserModel } = require('./DBModels');

const createUser = async ({ name, email, height }) => {
    const user = await UserModel.create({ name, email, height });
    return user;
};

module.exports = { createUser}
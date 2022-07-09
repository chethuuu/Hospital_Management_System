const 
    {
        RegisterUser,
        getAllUser,
        getByID,
        updateUser,
        deleteUser
    } = require ('../dal/Users');

const Register = async (data) => {
    let result = await RegisterUser(data);
    return result;
}

const Get = async () => {
    let result = await getAllUser();
    return result;
}

const GetID = async (id) => {
    let result = await getByID(id);
    return result;
}

const Update = async (id) => {
    let result = await updateUser(id, data);
    return result;
}

const Remove = async (id) => {
    let result = await deleteUser(id);
    return result;
}

module.exports = {Register, Get, GetID, Update, Remove}
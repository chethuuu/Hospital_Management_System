const 
    {
        RegisterUser,
        LoginUser,
        getAllUser,
        getByID,
        updateUser,
        deleteUser,
        getUserRole
    } = require ('../dal/Users');

const Register = async (data) => {
    let result = await RegisterUser(data);
    return result;
}

const Login = async (data) => {
    let result = await LoginUser(data);
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

const Update = async (id, data) => {
    let result = await updateUser(id, data);
    return result;
}

const Remove = async (id) => {
    let result = await deleteUser(id);
    return result;
}

const UserRole = async (userRole) => {
    let result = await getUserRole(userRole);
    return result;
}

module.exports = {Register, Login, Get, GetID, Update, Remove, UserRole}
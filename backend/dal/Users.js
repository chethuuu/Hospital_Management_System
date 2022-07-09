const User = require('./Connection').db("Hospital_System").collection('Users')

const ObjectId = require('mongodb').ObjectId;

const bcrypt = require('bcrypt')

//Register user
const RegisterUser = async (allData) => {
    var data = {
        name:allData.name,
        email:allData.email,
        password:allData.password,
        userRole:allData.userRole,
    }

    let pwd = data.password;
    let salt = await bcrypt.genSalt()
    let hash = await bcrypt.hash(pwd,salt);
    data.password = hash;
    let user = await User.insertOne(data);
    return user;
}

const LoginUser = async (data) => {
    let user = await User.findOne({"email":data.email});
    if(user)
    {
        let pwd =  bcrypt.compare(user.password,data.password);
        if(pwd)
        {
            return {msg:"Login sucess",token:user._id,userRole:user.userRole}
        }
        else
        {
            return {msg:"login failed"}
        }
    }
    else
    {
        return {msg:"login failed"}
    }
}

const getAllUser = async () => {
    let result = await User.find();
    return result.toArray();
}

const getByID = async (id) => {
    let result = await User.findOne({_id:ObjectId(id)});
    return result;
}

const updateUser = async (id, data) => {
    let result = await User.replaceOne({_id:ObjectId(id)},data);
    return result;
}

const deleteUser = async(id) => {
    let result = await User.deleteOne({_id:ObjectId(id)})
    return result;
}

module.exports = {RegisterUser, LoginUser, getAllUser, getByID, updateUser, deleteUser}
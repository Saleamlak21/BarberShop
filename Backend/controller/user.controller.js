// import user service
const express = require("express");
const userService = require("../services/user.service");

// create a function to get all users  
async function getUsers(req,res){
   try{
       // get all users
       const users = await userService.getUsers();
      if(users){
          // return the users
          return res.status(200).json(users);
      }
      else{
          // return a message
          return res.status(404).json("No users found");
      }
   }
    catch(err){
         // return an error message
         return res.status(500).json(err);
    }

}
//create a function to get a single user
async function getUserById(req,res){
    try{
        // get the user id from the request
        const id = req.params.id;
        console.log(id)
        // get the user
        const user = await userService.getUserById(id);
        if(user){
            // return the user
            return res.status(200).json(user);
        }
        else{
            // return a message
            return res.status(404).json("User not found");
        }
    }
    catch(err){
        // return an error message
        return res.status(500).json(err);
    }
}

// export the function
module.exports = {
    getUsers,
    getUserById
}

import * as joi from 'joi'
import * as repo from '../repositories/users'
import { IUserLoginRequest, IUserSignUpRequest } from '../interfaces/user';
import { Users } from '../entities/users';
import * as Boom from 'boom';
import * as bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";



export const getAll = async() => {
    return repo.getAll();
};

export const getUser = async(user : Users) => {
    return repo.getUser(user);
};

export const signUpUser = async(user : IUserSignUpRequest) => {
   await joi.validate(user, {
       name : joi.string().required(),
       email :  joi.string().required(),
       password :  joi.string().required(),
   })

   const _user = new Users();
   _user.name = user.name;
   _user.email = user.email;
   _user.password = bcrypt.hashSync( user.password, 10);


   var existingUser = await repo.getUser(_user);
   if(existingUser){
     return Boom.badRequest("Registration failed, User already exist!")
   }
   else{
    return repo.signupUser(_user);
   }
  
};



export const updateUser = async(user : Users) => {
  
    await joi.validate(user, {
        name : joi.string().required(),
        email :  joi.string().required(),
        password :  joi.string().required(),
    })
 
    const _user = new Users();
    _user.name = user.name;
    _user.email = user.email;
    _user.password = user.password;
 
 
    var existingUser = await repo.getUser(_user);
    if(existingUser){
        return repo.updateUser(_user);
    }
    else{
        return Boom.badRequest("User does not exist!")
    }
   
};

export const loginUser = async(user : IUserLoginRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password: joi.string().required()
    });
    const _user = new Users();
    _user.email = user.email;
    
    
    try {
        var existingUser = await repo.getUser(_user);
        if (existingUser) {
            let loginUser = existingUser as Users;
            if(loginUser.isValidUnencryptedPassword(user.password)){
                return jwt.sign({email: user.email}, 'secret');
            } else {
                Boom.unauthorized("Username or password is invalid");
            }
        }

    } catch (error) {
          Boom.unauthorized("Username or password is invalid");
    }
};

export const deleteUser = async(id : number) => {
    return repo.deleteUser(id);
};
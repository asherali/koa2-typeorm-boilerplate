import { Users } from './../entities/users';

import { getRepository } from 'typeorm'


export const signupUser = async (user : Users) => {

    return getRepository(Users).save(user);
};

export const updateUser = async (user : Users) => {

    return getRepository(Users).save(user);
};


export const loginUser = async (users: Users) => {
    return getRepository(Users).find({
        where:{
            email: users.email,
            password: users.password
        }
    })
};

export const getUser = async (user: Users) => {
    return getRepository(Users).findOne({
        where:{
        email: user.email
    }});
};

export const getAll = async () => {
    return getRepository(Users).find();
};




export const deleteUser = async(id: number) => {
    return getRepository(Users).delete(id);
};





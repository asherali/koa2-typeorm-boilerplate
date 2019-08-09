import { getRepository } from "typeorm";
import { Heroes } from "../entities/heroes";

export const getAll = async () => {
    return getRepository(Heroes).find({
        where: {
            isActive: true
        },
    });
}

export const signUpHero = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero); 
};

export const updateHero = async (hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};


export const getHero = async (hero: Heroes) => {
    return getRepository(Heroes).find({
        where:{
            name: hero.name
        }
    })
};
export const deleteHero = async(id: number) => {
    return getRepository(Heroes).delete(id);
};
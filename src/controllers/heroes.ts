import * as service from '../services/heroes';
import { Context } from 'koa';
import { IHeroRequest, IHeroRequestUpdate } from '../interfaces/hero';

export const getAll = async (ctx: Context, next : () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};


export const signUpHero = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.signUpHero(payload);
    await next();
};

export const deleteHero = async (ctx: Context, next: () => void) => {
    const id = ctx.params.id;
    
    ctx.state.data = await service.deleteHero(id);
    await next();
}

export const updateHero = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequestUpdate = ctx.request.body;
    ctx.state.data = await service.updateHero(payload);
    await next();
};

export const getHero = async (ctx: Context, next : () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.getHero(payload);
    await next();
};
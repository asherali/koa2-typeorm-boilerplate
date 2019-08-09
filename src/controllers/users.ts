import { Context } from 'koa';
import * as service from '../services/users';
import { IUserSignUpRequest, IUserLoginRequest } from '../interfaces/user';
import { Users } from '../entities/users';

export const getAll = async (ctx: Context, next: () => void) => {
  ctx.state.data = await service.getAll();
  await next();
};

export const getUser = async (ctx: Context, next: () => void) => {
    const payload: Users = ctx.request.body;
    ctx.state.data = await service.getUser(payload);
    await next();
  };

export const signUp = async (ctx: Context, next: () => void) => {
  const payload: IUserSignUpRequest = ctx.request.body;
  ctx.state.data = await service.signUpUser(payload);
  await next();
};

export const updateUser = async (ctx: Context, next: () => void) => {
    const payload: Users = ctx.request.body;
    ctx.state.data = await service.updateUser(payload);
    await next();
  };

export const loginUser = async (ctx: Context, next: () => void) => {
  const payload: IUserLoginRequest = ctx.request.body;
  ctx.state.data = await service.loginUser(payload);
  await next();
};

export const deleteUser = async (ctx: Context, next: () => void) => {
    const payload: number = ctx.params.id;
    ctx.state.data = await service.deleteUser(payload);
    await next();
  };
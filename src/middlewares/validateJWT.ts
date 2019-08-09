import * as jwt from "jsonwebtoken";
import { Context } from 'koa';


export const validate = async (ctx: Context, next: () => void) => {
    var token = ctx.request.header['token'];
    await jwt.verify(token, 'secret');
    
  await next();
};
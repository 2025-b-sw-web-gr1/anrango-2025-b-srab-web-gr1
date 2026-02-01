import type { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    login(body: LoginDto, req: Request, res: Response): Response<any, Record<string, any>>;
    logout(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
}

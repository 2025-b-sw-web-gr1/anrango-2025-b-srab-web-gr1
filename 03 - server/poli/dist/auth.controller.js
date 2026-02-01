"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./dto/login.dto");
const login_response_dto_1 = require("./dto/login-response.dto");
const logout_response_dto_1 = require("./dto/logout-response.dto");
let AuthController = class AuthController {
    login(body, req, res) {
        const { username, password } = body;
        if (req.session.user) {
            return res.status(400).json({
                message: 'Ya existe una sesión activa, deslogee primero.',
            });
        }
        if (username === 'admin' && password === '12345678') {
            req.session.user = 'admin';
            return res.json({ message: 'Login exitoso', user: req.session.user });
        }
        else {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
    }
    logout(req, res) {
        if (req.session.user) {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al cerrar sesión' });
                }
                return res.json({ message: 'Sesión cerrada correctamente' });
            });
        }
        else {
            return res.status(400).json({ message: 'No hay sesión activa' });
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login exitoso', type: login_response_dto_1.LoginResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Ya existe una sesión activa' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Credenciales inválidas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sesión cerrada correctamente', type: logout_response_dto_1.LogoutResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No hay sesión activa' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth')
], AuthController);
//# sourceMappingURL=auth.controller.js.map
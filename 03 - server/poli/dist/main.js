"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_session_1 = __importDefault(require("express-session"));
const session_file_store_1 = __importDefault(require("session-file-store"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const FileStoreSession = (0, session_file_store_1.default)(express_session_1.default);
    app.use((0, express_session_1.default)({
        store: new FileStoreSession({}),
        secret: 'mi_secreto_super_seguro',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 60 * 1000 },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory, {
        swaggerOptions: {
            persistAuthorization: true,
            withCredentials: true,
        },
    });
    swagger_1.SwaggerModule.setup('swagger', app, documentFactory, {
        jsonDocumentUrl: 'swagger/json',
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
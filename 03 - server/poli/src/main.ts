import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import FileStore from 'session-file-store';
 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const FileStoreSession = FileStore(session);

  app.use(
    session({
      store: new FileStoreSession({}),
      secret: 'mi_secreto_super_seguro',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 1000 }, // 1 hora
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function buildDocs(app: INestApplication) {
  const documentBuilder = new DocumentBuilder()
    .setTitle('viber bot')
    .setDescription('test viber bot')
    .addBearerAuth();
  SwaggerModule.setup(
    'api/',
    app,
    SwaggerModule.createDocument(app, documentBuilder.build(), {
      ignoreGlobalPrefix: true,
    }),
  );
}

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule,{
    cors: true,
    logger,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  buildDocs(app);
  await app.listen(7000);
  logger.log(`App is listening on port ${7000}`);
}
bootstrap();

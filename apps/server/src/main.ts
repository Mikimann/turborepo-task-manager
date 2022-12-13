import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

dotenv.config();
const configService = new ConfigService();
const portFront = configService.get('FRONT_ROUTE');
const portBack = configService.get('SERVER_ROUTE');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: portFront });
  app.use(helmet.frameguard({ action: 'deny' }));
  await app.listen(portBack);
}
bootstrap();

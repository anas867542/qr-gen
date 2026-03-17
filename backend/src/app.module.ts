import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QrModule } from './qr/qr.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    QrModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { validateEnv } from "./shared/configs/env.config";
import { DatabaseModule } from "./infra/database/database.module";
import { CacheModule } from "./infra/cache/cache.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      validate: validateEnv,
    }),
    DatabaseModule,
    CacheModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

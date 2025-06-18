import { Global, Module } from "@nestjs/common";
import { CacheService } from "./cache.service";
import { ConfigService } from "@nestjs/config";
import { EnvConfig } from "#/shared/configs/env.config";
import KeyvRedis from "@keyv/redis";
import { Cacheable } from "cacheable";

@Global()
@Module({
  providers: [
    {
      provide: "CACHE_INSTANCE",
      useFactory: (configService: ConfigService<EnvConfig, true>) => {
        const redisUrl = configService.get<string>("REDIS_URL");
        const primary = new KeyvRedis(redisUrl);

        return new Cacheable({ primary });
      },
      inject: [ConfigService],
    },
    CacheService,
  ],
  exports: ["CACHE_INSTANCE", CacheService],
})
export class CacheModule {}

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationConfig } from "./shared/configs/validation.config";
import { ConfigService } from "@nestjs/config";
import { type EnvConfig } from "./shared/configs/env.config";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./shared/configs/swagger.config";
import { Logger, VERSION_NEUTRAL, VersioningType } from "@nestjs/common";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<EnvConfig, true>);

  app.use(helmet());
  app.useGlobalPipes(ValidationConfig);

  const port = configService.getOrThrow("PORT", { infer: true });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: [VERSION_NEUTRAL, "1"],
  });

  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("docs", app, documentFactory);

  await app.listen(port, () => {
    Logger.log(`ENV: ${configService.get("NODE_ENV")} PORT: ${port}`, "Bootstrap");
  });
}
void bootstrap();

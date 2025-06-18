import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("CV2 Talk API")
  .setDescription("CV2 Talk API Documentation")
  .setVersion("1.0")
  .build();

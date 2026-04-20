import { Global, Module } from "@nestjs/common";
import { SaasController } from "./saas.controller";
import { SaasService } from "./saas.service";

@Global()
@Module({
  controllers: [SaasController],
  providers: [SaasService],
  exports: [SaasService],
})
export class SaasModule {}

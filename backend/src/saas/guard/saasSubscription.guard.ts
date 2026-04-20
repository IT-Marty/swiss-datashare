import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { SaasService } from "../saas.service";

@Injectable()
export class SaasSubscriptionGuard implements CanActivate {
  constructor(private saasService: SaasService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user as User | undefined;
    if (!user) return true;

    await this.saasService.assertUserCanShare(user.id);
    return true;
  }
}

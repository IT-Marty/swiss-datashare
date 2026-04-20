import { ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { ConfigService } from "src/config/config.service";
import { ReverseShareService } from "src/reverseShare/reverseShare.service";
import { SaasService } from "src/saas/saas.service";

@Injectable()
export class CreateShareGuard extends JwtGuard {
  constructor(
    configService: ConfigService,
    private reverseShareService: ReverseShareService,
    private saasService: SaasService,
  ) {
    super(configService);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (await super.canActivate(context)) {
      const userId = request.user?.id;
      if (userId) {
        await this.saasService.assertUserCanShare(userId);
      }
      return true;
    }

    const reverseShareTokenId = request.cookies.reverse_share_token;

    if (!reverseShareTokenId) return false;

    const isReverseShareTokenValid =
      await this.reverseShareService.isValid(reverseShareTokenId);

    if (isReverseShareTokenValid) {
      const reverseShare =
        await this.reverseShareService.getByToken(reverseShareTokenId);
      if (reverseShare?.creatorId) {
        const compliant = await this.saasService.isUserBillingCompliant(
          reverseShare.creatorId,
        );
        if (!compliant) {
          throw new ForbiddenException(
            "Subscription overdue. Sharing is currently blocked.",
            "subscription_overdue",
          );
        }
      }
    }

    return isReverseShareTokenValid;
  }
}

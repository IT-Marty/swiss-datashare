import { Expose, plainToClass } from "class-transformer";

export class SaasBillingStatusDTO {
  @Expose()
  enforced: boolean;

  @Expose()
  exempt: boolean;

  @Expose()
  compliant: boolean;

  @Expose()
  status: string;

  @Expose()
  trialEndsAt: Date | null;

  @Expose()
  graceEndsAt: Date | null;

  @Expose()
  subscriptionCurrentPeriodEnd: Date | null;

  @Expose()
  canCheckoutMonthly: boolean;

  @Expose()
  canCheckoutYearly: boolean;

  @Expose()
  canManagePortal: boolean;

  @Expose()
  hasOngoingSubscription: boolean;

  @Expose()
  cancelAtPeriodEnd: boolean;

  @Expose()
  cancelAt: Date | null;

  from(partial: Partial<SaasBillingStatusDTO>) {
    return plainToClass(SaasBillingStatusDTO, partial, {
      excludeExtraneousValues: true,
    });
  }
}

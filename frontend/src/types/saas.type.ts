export type BillingStatus = {
  enforced: boolean;
  exempt: boolean;
  compliant: boolean;
  status: string;
  trialEndsAt: string | null;
  graceEndsAt: string | null;
  subscriptionCurrentPeriodEnd: string | null;
  canCheckoutMonthly: boolean;
  canCheckoutYearly: boolean;
  canManagePortal: boolean;
  publishableKey?: string;
  monthlyPriceChf?: string;
  yearlyPriceChf?: string;
};

export type ExemptUser = {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  billingExempt: boolean;
};

export type SaasPaymentHistoryResponse = {
  history: Array<{
    id: string;
    createdAt: string;
    amountChfCents: number;
    currency: string;
    status: string;
    periodStart?: string | null;
    periodEnd?: string | null;
    user: {
      id: string;
      username: string;
      email: string;
    };
  }>;
  totals: {
    monthChfCents: number;
    yearChfCents: number;
    allTimeChfCents: number;
  };
};

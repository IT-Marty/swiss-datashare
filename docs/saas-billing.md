# SaaS Billing (Stripe)

This document describes the SaaS billing setup for per-user subscriptions.

## Enable SaaS mode

1. Set `general.useCase` to include `saas` (for example `default,saas` or `lawyer,saas`).
2. In admin config, open `/admin/config/saas`.
3. Configure:
   - `saas.enabled`
   - `saas.monthlyPriceChf`
   - `saas.yearlyPriceChf`
   - `saas.trialDays`
   - `saas.graceDays`
   - `saas.enforceSubscription`
   - `saas.stripePublishableKey`
   - `saas.stripeSecretKey`
   - `saas.stripeWebhookSecret`
   - `saas.stripeMonthlyPriceId`
   - `saas.stripeYearlyPriceId`

## Stripe webhook

Create a Stripe webhook endpoint pointing to:

`POST /api/saas/webhook`

Recommended events:

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

Copy the webhook signing secret into `saas.stripeWebhookSecret`.

## Enforcement behavior

- Admin users are always exempt.
- Users marked as exempt in SaaS admin panel are exempt.
- Trial starts at account creation (`billingTrialStartAt`).
- After trial ends, users are blocked once grace period after subscription period end is exceeded.
- Blocked actions include sharing/upload write flows.

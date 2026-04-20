ALTER TABLE "User" ADD COLUMN "billingExempt" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "User" ADD COLUMN "billingTrialStartAt" DATETIME NOT NULL DEFAULT '1970-01-01 00:00:00';
ALTER TABLE "User" ADD COLUMN "stripeCustomerId" TEXT;
ALTER TABLE "User" ADD COLUMN "stripeSubscriptionId" TEXT;
ALTER TABLE "User" ADD COLUMN "stripeSubscriptionStatus" TEXT;
ALTER TABLE "User" ADD COLUMN "stripeCurrentPeriodEnd" DATETIME;
ALTER TABLE "User" ADD COLUMN "stripeLastPaymentAt" DATETIME;

UPDATE "User" SET "billingTrialStartAt" = "createdAt";

CREATE UNIQUE INDEX "User_stripeCustomerId_key" ON "User"("stripeCustomerId");
CREATE UNIQUE INDEX "User_stripeSubscriptionId_key" ON "User"("stripeSubscriptionId");

CREATE TABLE "SaasPayment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "stripeInvoiceId" TEXT,
    "stripePaymentIntentId" TEXT,
    "amountChfCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'chf',
    "status" TEXT NOT NULL,
    "periodStart" DATETIME,
    "periodEnd" DATETIME,
    CONSTRAINT "SaasPayment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "SaasPayment_stripeInvoiceId_key" ON "SaasPayment"("stripeInvoiceId");
CREATE UNIQUE INDEX "SaasPayment_stripePaymentIntentId_key" ON "SaasPayment"("stripePaymentIntentId");

CREATE TABLE "SaasWebhookEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "stripeEventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    CONSTRAINT "SaasWebhookEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "SaasWebhookEvent_stripeEventId_key" ON "SaasWebhookEvent"("stripeEventId");

import { IsIn } from "class-validator";

export class CreateCheckoutSessionDTO {
  @IsIn(["monthly", "yearly"])
  interval: "monthly" | "yearly";
}

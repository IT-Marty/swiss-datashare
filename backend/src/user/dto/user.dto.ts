import { Expose, plainToClass } from "class-transformer";
import { IsEmail, IsIn, IsOptional, Length, Matches, MinLength } from "class-validator";

const SUPPORTED_LOCALES = ["en-US", "de-DE", "fr-FR", "es-ES", "it-IT"] as const;

export class UserDTO {
  @Expose()
  id: string;

  @Expose()
  @Matches("^[a-zA-Z0-9_.]*$", undefined, {
    message: "Username can only contain letters, numbers, dots and underscores",
  })
  @Length(3, 32)
  username: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsOptional()
  @IsIn(SUPPORTED_LOCALES)
  locale: string;

  @Expose()
  hasPassword: boolean;

  @MinLength(8)
  password: string;

  @Expose()
  isAdmin: boolean;

  @Expose()
  isLdap: boolean;

  ldapDN?: string;

  @Expose()
  totpVerified: boolean;

  @Expose()
  billingExempt: boolean;

  @Expose()
  billingCompliant?: boolean;

  @Expose()
  billingSubscriptionStatus?: string;

  from(partial: Partial<UserDTO>) {
    const result = plainToClass(UserDTO, partial, {
      excludeExtraneousValues: true,
    });
    result.isLdap = partial.ldapDN?.length > 0;
    return result;
  }

  fromList(partial: Partial<UserDTO>[]) {
    return partial.map((part) => this.from(part));
  }
}

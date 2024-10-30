/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SellerProtectionStatus
 */
export enum SellerProtectionStatus {
  Eligible = 'ELIGIBLE',
  PartiallyEligible = 'PARTIALLY_ELIGIBLE',
  NotEligible = 'NOT_ELIGIBLE',
}

/**
 * Schema for SellerProtectionStatus
 */
export const sellerProtectionStatusSchema: Schema<SellerProtectionStatus> = stringEnum(
  SellerProtectionStatus,
  true
);

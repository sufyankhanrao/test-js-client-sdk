/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalPaymentTokenUsageType
 */
export enum PaypalPaymentTokenUsageType {
  Merchant = 'MERCHANT',
  Platform = 'PLATFORM',
}

/**
 * Schema for PaypalPaymentTokenUsageType
 */
export const paypalPaymentTokenUsageTypeSchema: Schema<PaypalPaymentTokenUsageType> = stringEnum(
  PaypalPaymentTokenUsageType,
  true
);

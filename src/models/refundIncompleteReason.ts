/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RefundIncompleteReason
 */
export enum RefundIncompleteReason {
  Echeck = 'ECHECK',
}

/**
 * Schema for RefundIncompleteReason
 */
export const refundIncompleteReasonSchema: Schema<RefundIncompleteReason> = stringEnum(
  RefundIncompleteReason,
  true
);
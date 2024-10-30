/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VenmoPaymentTokenUsagePattern
 */
export enum VenmoPaymentTokenUsagePattern {
  Immediate = 'IMMEDIATE',
  Deferred = 'DEFERRED',
  RecurringPrepaid = 'RECURRING_PREPAID',
  RecurringPostpaid = 'RECURRING_POSTPAID',
  ThresholdPrepaid = 'THRESHOLD_PREPAID',
  ThresholdPostpaid = 'THRESHOLD_POSTPAID',
}

/**
 * Schema for VenmoPaymentTokenUsagePattern
 */
export const venmoPaymentTokenUsagePatternSchema: Schema<VenmoPaymentTokenUsagePattern> = stringEnum(
  VenmoPaymentTokenUsagePattern,
  true
);

/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaypalExperienceUserAction
 */
export enum PaypalExperienceUserAction {
  Continue = 'CONTINUE',
  PayNow = 'PAY_NOW',
}

/**
 * Schema for PaypalExperienceUserAction
 */
export const paypalExperienceUserActionSchema: Schema<PaypalExperienceUserAction> = stringEnum(
  PaypalExperienceUserAction,
  true
);

/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TokenType
 */
export enum TokenType {
  BILLINGAGREEMENT = 'BILLING_AGREEMENT',
  SETUPTOKEN = 'SETUP_TOKEN',
}

/**
 * Schema for TokenType
 */
export const tokenTypeSchema: Schema<TokenType> = stringEnum(TokenType, true);

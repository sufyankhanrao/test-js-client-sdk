/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PhoneType
 */
export enum PhoneType {
  Fax = 'FAX',
  Home = 'HOME',
  Mobile = 'MOBILE',
  Other = 'OTHER',
  Pager = 'PAGER',
}

/**
 * Schema for PhoneType
 */
export const phoneTypeSchema: Schema<PhoneType> = stringEnum(PhoneType, true);

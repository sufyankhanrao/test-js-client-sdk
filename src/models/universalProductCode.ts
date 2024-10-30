/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { UpcType, upcTypeSchema } from './upcType';

/** The Universal Product Code of the item. */
export interface UniversalProductCode {
  /** The Universal Product Code type. */
  type: UpcType;
  /** The UPC product code of the item. */
  code: string;
}

export const universalProductCodeSchema: Schema<UniversalProductCode> = object({
  type: ['type', upcTypeSchema],
  code: ['code', string()],
});

/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business. */
export interface Level2CardProcessingData {
  /** Use this field to pass a purchase identification value of up to 12 ASCII characters for AIB and 17 ASCII characters for all other processors. */
  invoiceId?: string;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  taxTotal?: Money;
}

export const level2CardProcessingDataSchema: Schema<Level2CardProcessingData> = object(
  {
    invoiceId: ['invoice_id', optional(string())],
    taxTotal: ['tax_total', optional(lazy(() => moneySchema))],
  }
);
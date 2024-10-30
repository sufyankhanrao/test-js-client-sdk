/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';
import { PayeeBase, payeeBaseSchema } from './payeeBase';

/** Details about the merchant cobranded card used for order purchase. */
export interface CobrandedCard {
  /** Array of labels for the cobranded card. */
  labels?: string[];
  /** The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. */
  payee?: PayeeBase;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount?: Money;
}

export const cobrandedCardSchema: Schema<CobrandedCard> = object({
  labels: ['labels', optional(array(string()))],
  payee: ['payee', optional(lazy(() => payeeBaseSchema))],
  amount: ['amount', optional(lazy(() => moneySchema))],
});
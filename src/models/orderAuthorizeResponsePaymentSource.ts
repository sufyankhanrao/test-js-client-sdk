/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ApplePayPaymentObject,
  applePayPaymentObjectSchema,
} from './applePayPaymentObject';
import { CardResponse, cardResponseSchema } from './cardResponse';
import {
  GooglePayWalletResponse,
  googlePayWalletResponseSchema,
} from './googlePayWalletResponse';
import {
  PaypalWalletResponse,
  paypalWalletResponseSchema,
} from './paypalWalletResponse';
import {
  VenmoWalletResponse,
  venmoWalletResponseSchema,
} from './venmoWalletResponse';

/** The payment source used to fund the payment. */
export interface OrderAuthorizeResponsePaymentSource {
  /** The payment card to use to fund a payment. Card can be a credit or debit card. */
  card?: CardResponse;
  /** The PayPal Wallet response. */
  paypal?: PaypalWalletResponse;
  /** Information needed to pay using ApplePay. */
  applePay?: ApplePayPaymentObject;
  /** Google Pay Wallet payment data. */
  googlePay?: GooglePayWalletResponse;
  /** Venmo wallet response. */
  venmo?: VenmoWalletResponse;
}

export const orderAuthorizeResponsePaymentSourceSchema: Schema<OrderAuthorizeResponsePaymentSource> = object(
  {
    card: ['card', optional(lazy(() => cardResponseSchema))],
    paypal: ['paypal', optional(lazy(() => paypalWalletResponseSchema))],
    applePay: ['apple_pay', optional(lazy(() => applePayPaymentObjectSchema))],
    googlePay: [
      'google_pay',
      optional(lazy(() => googlePayWalletResponseSchema)),
    ],
    venmo: ['venmo', optional(lazy(() => venmoWalletResponseSchema))],
  }
);
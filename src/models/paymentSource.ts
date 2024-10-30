/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ApplePayRequest, applePayRequestSchema } from './applePayRequest';
import {
  BancontactPaymentRequest,
  bancontactPaymentRequestSchema,
} from './bancontactPaymentRequest';
import {
  BlikPaymentRequest,
  blikPaymentRequestSchema,
} from './blikPaymentRequest';
import { CardRequest, cardRequestSchema } from './cardRequest';
import {
  EpsPaymentRequest,
  epsPaymentRequestSchema,
} from './epsPaymentRequest';
import {
  GiropayPaymentRequest,
  giropayPaymentRequestSchema,
} from './giropayPaymentRequest';
import { GooglePayRequest, googlePayRequestSchema } from './googlePayRequest';
import {
  IdealPaymentRequest,
  idealPaymentRequestSchema,
} from './idealPaymentRequest';
import {
  MybankPaymentRequest,
  mybankPaymentRequestSchema,
} from './mybankPaymentRequest';
import {
  P24PaymentRequest,
  p24PaymentRequestSchema,
} from './p24PaymentRequest';
import { PaypalWallet, paypalWalletSchema } from './paypalWallet';
import {
  SofortPaymentRequest,
  sofortPaymentRequestSchema,
} from './sofortPaymentRequest';
import { Token, tokenSchema } from './token';
import {
  TrustlyPaymentRequest,
  trustlyPaymentRequestSchema,
} from './trustlyPaymentRequest';
import {
  VenmoWalletRequest,
  venmoWalletRequestSchema,
} from './venmoWalletRequest';

/** The payment source definition. */
export interface PaymentSource {
  /** The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote> */
  card?: CardRequest;
  /** The tokenized payment source to fund a payment. */
  token?: Token;
  /** A resource that identifies a PayPal Wallet is used for payment. */
  paypal?: PaypalWallet;
  /** Information needed to pay using Bancontact. */
  bancontact?: BancontactPaymentRequest;
  /** Information needed to pay using BLIK. */
  blik?: BlikPaymentRequest;
  /** Information needed to pay using eps. */
  eps?: EpsPaymentRequest;
  /** Information needed to pay using giropay. */
  giropay?: GiropayPaymentRequest;
  /** Information needed to pay using iDEAL. */
  ideal?: IdealPaymentRequest;
  /** Information needed to pay using MyBank. */
  mybank?: MybankPaymentRequest;
  /** Information needed to pay using P24 (Przelewy24). */
  p24?: P24PaymentRequest;
  /** Information needed to pay using Sofort. */
  sofort?: SofortPaymentRequest;
  /** Information needed to pay using Trustly. */
  trustly?: TrustlyPaymentRequest;
  /** Information needed to pay using ApplePay. */
  applePay?: ApplePayRequest;
  /** Information needed to pay using Google Pay. */
  googlePay?: GooglePayRequest;
  /** Information needed to pay using Venmo. */
  venmo?: VenmoWalletRequest;
}

export const paymentSourceSchema: Schema<PaymentSource> = object({
  card: ['card', optional(lazy(() => cardRequestSchema))],
  token: ['token', optional(lazy(() => tokenSchema))],
  paypal: ['paypal', optional(lazy(() => paypalWalletSchema))],
  bancontact: [
    'bancontact',
    optional(lazy(() => bancontactPaymentRequestSchema)),
  ],
  blik: ['blik', optional(lazy(() => blikPaymentRequestSchema))],
  eps: ['eps', optional(lazy(() => epsPaymentRequestSchema))],
  giropay: ['giropay', optional(lazy(() => giropayPaymentRequestSchema))],
  ideal: ['ideal', optional(lazy(() => idealPaymentRequestSchema))],
  mybank: ['mybank', optional(lazy(() => mybankPaymentRequestSchema))],
  p24: ['p24', optional(lazy(() => p24PaymentRequestSchema))],
  sofort: ['sofort', optional(lazy(() => sofortPaymentRequestSchema))],
  trustly: ['trustly', optional(lazy(() => trustlyPaymentRequestSchema))],
  applePay: ['apple_pay', optional(lazy(() => applePayRequestSchema))],
  googlePay: ['google_pay', optional(lazy(() => googlePayRequestSchema))],
  venmo: ['venmo', optional(lazy(() => venmoWalletRequestSchema))],
});

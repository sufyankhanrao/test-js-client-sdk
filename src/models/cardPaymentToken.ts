/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string, unknown } from '../schema';
import { AddressDetails, addressDetailsSchema } from './addressDetails';
import {
  AuthenticationResponse,
  authenticationResponseSchema,
} from './authenticationResponse';
import { BinDetails, binDetailsSchema } from './binDetails';
import { CardBrand, cardBrandSchema } from './cardBrand';
import { CardType, cardTypeSchema } from './cardType';
import {
  CardVerificationDetails,
  cardVerificationDetailsSchema,
} from './cardVerificationDetails';
import {
  NetworkTransactionReferenceEntity,
  networkTransactionReferenceEntitySchema,
} from './networkTransactionReferenceEntity';

/** Full representation of a Card Payment Token including network token. */
export interface CardPaymentToken {
  /** The card holder's name as it appears on the card. */
  name?: string;
  /** The last digits of the payment card. */
  lastDigits?: string;
  /** The card network or brand. Applies to credit, debit, gift, and payment cards. */
  brand?: CardBrand;
  /** The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). */
  expiry?: string;
  /** Address request details. */
  billingAddress?: AddressDetails;
  /** Verification status of Card. */
  verificationStatus?: string;
  /** Card Verification details including the authorization details and 3D SECURE details. */
  verification?: CardVerificationDetails;
  /** Previous network transaction reference including id in response. */
  networkTransactionReference?: NetworkTransactionReferenceEntity;
  /** Results of Authentication such as 3D Secure. */
  authenticationResult?: AuthenticationResponse;
  /** Bank Identification Number (BIN) details used to fund a payment. */
  binDetails?: BinDetails;
  /** Type of card. i.e Credit, Debit and so on. */
  type?: CardType;
  networkToken?: unknown;
}

export const cardPaymentTokenSchema: Schema<CardPaymentToken> = object({
  name: ['name', optional(string())],
  lastDigits: ['last_digits', optional(string())],
  brand: ['brand', optional(cardBrandSchema)],
  expiry: ['expiry', optional(string())],
  billingAddress: [
    'billing_address',
    optional(lazy(() => addressDetailsSchema)),
  ],
  verificationStatus: ['verification_status', optional(string())],
  verification: [
    'verification',
    optional(lazy(() => cardVerificationDetailsSchema)),
  ],
  networkTransactionReference: [
    'network_transaction_reference',
    optional(lazy(() => networkTransactionReferenceEntitySchema)),
  ],
  authenticationResult: [
    'authentication_result',
    optional(lazy(() => authenticationResponseSchema)),
  ],
  binDetails: ['bin_details', optional(lazy(() => binDetailsSchema))],
  type: ['type', optional(cardTypeSchema)],
  networkToken: ['network_token', optional(unknown())],
});

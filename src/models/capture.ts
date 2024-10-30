/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CaptureStatus, captureStatusSchema } from './captureStatus';
import {
  CaptureStatusDetails,
  captureStatusDetailsSchema,
} from './captureStatusDetails';
import { DisbursementMode, disbursementModeSchema } from './disbursementMode';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import { Money, moneySchema } from './money';
import {
  NetworkTransactionReference,
  networkTransactionReferenceSchema,
} from './networkTransactionReference';
import {
  ProcessorResponse,
  processorResponseSchema,
} from './processorResponse';
import { SellerProtection, sellerProtectionSchema } from './sellerProtection';
import {
  SellerReceivableBreakdown,
  sellerReceivableBreakdownSchema,
} from './sellerReceivableBreakdown';

/** A captured payment. */
export interface Capture {
  /** The status of the captured payment. */
  status?: CaptureStatus;
  /** The details of the captured payment status. */
  statusDetails?: CaptureStatusDetails;
  /** The PayPal-generated ID for the captured payment. */
  id?: string;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount?: Money;
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
  customId?: string;
  /** Reference values used by the card network to identify a transaction. */
  networkTransactionReference?: NetworkTransactionReference;
  /** The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). */
  sellerProtection?: SellerProtection;
  /** Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization. */
  finalCapture?: boolean;
  /** The detailed breakdown of the capture activity. This is not available for transactions that are in pending state. */
  sellerReceivableBreakdown?: SellerReceivableBreakdown;
  /** The funds that are held on behalf of the merchant. */
  disbursementMode?: DisbursementMode;
  /** An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). */
  links?: LinkDescription[];
  /** The processor response information for payment requests, such as direct credit card transactions. */
  processorResponse?: ProcessorResponse;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
}

export const captureSchema: Schema<Capture> = object({
  status: ['status', optional(captureStatusSchema)],
  statusDetails: [
    'status_details',
    optional(lazy(() => captureStatusDetailsSchema)),
  ],
  id: ['id', optional(string())],
  amount: ['amount', optional(lazy(() => moneySchema))],
  invoiceId: ['invoice_id', optional(string())],
  customId: ['custom_id', optional(string())],
  networkTransactionReference: [
    'network_transaction_reference',
    optional(lazy(() => networkTransactionReferenceSchema)),
  ],
  sellerProtection: [
    'seller_protection',
    optional(lazy(() => sellerProtectionSchema)),
  ],
  finalCapture: ['final_capture', optional(boolean())],
  sellerReceivableBreakdown: [
    'seller_receivable_breakdown',
    optional(lazy(() => sellerReceivableBreakdownSchema)),
  ],
  disbursementMode: ['disbursement_mode', optional(disbursementModeSchema)],
  links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
  processorResponse: [
    'processor_response',
    optional(lazy(() => processorResponseSchema)),
  ],
  createTime: ['create_time', optional(string())],
  updateTime: ['update_time', optional(string())],
});

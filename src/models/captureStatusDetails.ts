/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CaptureIncompleteReason,
  captureIncompleteReasonSchema,
} from './captureIncompleteReason';

/** The details of the captured payment status. */
export interface CaptureStatusDetails {
  /** The reason why the captured payment status is `PENDING` or `DENIED`. */
  reason?: CaptureIncompleteReason;
}

export const captureStatusDetailsSchema: Schema<CaptureStatusDetails> = object({
  reason: ['reason', optional(captureIncompleteReasonSchema)],
});

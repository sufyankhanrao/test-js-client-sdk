/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  PayeePaymentMethodPreference,
  payeePaymentMethodPreferenceSchema,
} from './payeePaymentMethodPreference';
import {
  PaypalExperienceLandingPage,
  paypalExperienceLandingPageSchema,
} from './paypalExperienceLandingPage';
import {
  PaypalExperienceUserAction,
  paypalExperienceUserActionSchema,
} from './paypalExperienceUserAction';
import {
  ShippingPreference,
  shippingPreferenceSchema,
} from './shippingPreference';

/** Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> */
export interface PaypalWalletExperienceContext {
  /** The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode. */
  brandName?: string;
  /** The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/). */
  locale?: string;
  /** The location from which the shipping address is derived. */
  shippingPreference?: ShippingPreference;
  /** Describes the URL. */
  returnUrl?: string;
  /** Describes the URL. */
  cancelUrl?: string;
  /** The type of landing page to show on the PayPal site for customer checkout. */
  landingPage?: PaypalExperienceLandingPage;
  /** Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow. */
  userAction?: PaypalExperienceUserAction;
  /** The merchant-preferred payment methods. */
  paymentMethodPreference?: PayeePaymentMethodPreference;
}

export const paypalWalletExperienceContextSchema: Schema<PaypalWalletExperienceContext> = object(
  {
    brandName: ['brand_name', optional(string())],
    locale: ['locale', optional(string())],
    shippingPreference: [
      'shipping_preference',
      optional(shippingPreferenceSchema),
    ],
    returnUrl: ['return_url', optional(string())],
    cancelUrl: ['cancel_url', optional(string())],
    landingPage: ['landing_page', optional(paypalExperienceLandingPageSchema)],
    userAction: ['user_action', optional(paypalExperienceUserActionSchema)],
    paymentMethodPreference: [
      'payment_method_preference',
      optional(payeePaymentMethodPreferenceSchema),
    ],
  }
);

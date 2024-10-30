/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The name of the party. */
export interface Name {
  /** When the party is a person, the party's given, or first, name. */
  givenName?: string;
  /** When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname. */
  surname?: string;
}

export const nameSchema: Schema<Name> = object({
  givenName: ['given_name', optional(string())],
  surname: ['surname', optional(string())],
});
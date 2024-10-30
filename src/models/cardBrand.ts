/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardBrand
 */
export enum CardBrand {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD',
  Discover = 'DISCOVER',
  Amex = 'AMEX',
  Solo = 'SOLO',
  Jcb = 'JCB',
  Star = 'STAR',
  Delta = 'DELTA',
  Switch = 'SWITCH',
  Maestro = 'MAESTRO',
  CbNationale = 'CB_NATIONALE',
  Configoga = 'CONFIGOGA',
  Confidis = 'CONFIDIS',
  Electron = 'ELECTRON',
  Cetelem = 'CETELEM',
  ChinaUnionPay = 'CHINA_UNION_PAY',
  Diners = 'DINERS',
  Elo = 'ELO',
  Hiper = 'HIPER',
  Hipercard = 'HIPERCARD',
  Rupay = 'RUPAY',
  Ge = 'GE',
  Synchrony = 'SYNCHRONY',
  Unknown = 'UNKNOWN',
}

/**
 * Schema for CardBrand
 */
export const cardBrandSchema: Schema<CardBrand> = stringEnum(CardBrand, true);
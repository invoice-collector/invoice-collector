/**
 * Selectors for YouCanBookMe and for the Stripe customer portal it delegates
 * its billing to.
 *
 * No class is usable here. YouCanBookMe ships hashed CSS modules
 * (`_baseInput_1x4wk_21`, `_buttonBase_qak1v_1`) and the Stripe portal
 * obfuscates its own (`rs-3`, `as-h`). Only the `name`, `type` and `href`
 * attributes are stable, and the two buttons without one are matched on their
 * label instead, in both locales the app serves.
 */

export const YoucanbookMeSelectors = {

    //LOGIN PAGE

    FIELD_EMAIL: {
        selector: "input[name='email_login']",
        info: "email input field"
    },
    FIELD_PASSWORD: {
        selector: "input[name='password_login']",
        info: "password input field"
    },
    BUTTON_SUBMIT: {
        selector: "form button[type='submit']",
        info: "submit form button"
    },

    //PLAN AND BILLING PAGE

    // Opens the Stripe portal in the same tab. Narrowed down by label.
    BUTTON_BILLING: {
        selector: "button",
        info: "billing details button"
    },

    //STRIPE CUSTOMER PORTAL

    // One row of the billing history. The link text already carries the date,
    // the amount, the status and the subscription label.
    LINK_INVOICE: {
        selector: "a[href*='invoice.stripe.com']",
        info: "invoice link"
    },

    //HOSTED INVOICE PAGE

    // Downloading is triggered in JavaScript, there is no PDF URL to follow.
    // Beware of the neighbouring "download receipt" button. Narrowed down by label.
    BUTTON_DOWNLOAD: {
        selector: "button",
        info: "download invoice button"
    }
}

/**
 * French and English months, spelled out and abbreviated, since Stripe renders
 * the portal in the browser locale and the app serves `en` and `fr`.
 *
 * Keys are lowercase and accent free. Four letter keys are looked up first,
 * "juin" and "juil" sharing the "jui" prefix.
 */
export const MONTHS: { [key: string]: number } = {
    jan: 0, janv: 0, janu: 0,
    fev: 1, fevr: 1, feb: 1, febr: 1,
    mar: 2, mars: 2, marc: 2,
    avr: 3, avri: 3, apr: 3, apri: 3,
    mai: 4, may: 4,
    juin: 5, jun: 5, june: 5,
    juil: 6, jul: 6, july: 6,
    aou: 7, aout: 7, aug: 7, augu: 7,
    sep: 8, sept: 8,
    oct: 9, octo: 9,
    nov: 10, nove: 10,
    dec: 11, dece: 11
};

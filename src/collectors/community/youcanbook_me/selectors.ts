/**
 * Selectors for YouCanBookMe and for the Stripe customer portal it delegates
 * its billing to.
 *
 * No class is usable here: YouCanBookMe ships hashed CSS modules
 * (`_baseInput_1x4wk_21`, `_buttonBase_qak1v_1`) and the Stripe portal
 * obfuscates its own (`rs-3`, `as-h`). What is stable is the `name`, `type` and
 * `href` attributes, and the position of the elements in the tree.
 *
 * TODO: the selectors below marked `TODO` have to be captured from a live
 * session as direct child chains (`tag:nth-of-type(n) > tag:nth-of-type(n)`).
 * They are left failing on purpose rather than guessed.
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
    // Only rendered after a failed attempt
    CONTAINER_LOGIN_ERROR: {
        selector: "TODO",
        info: "login error message"
    },

    //PLAN AND BILLING PAGE

    // Opens the Stripe portal in the same tab
    BUTTON_BILLING: {
        selector: "TODO",
        info: "billing details button"
    },

    //STRIPE CUSTOMER PORTAL

    // One row of the billing history
    LINK_INVOICE: {
        selector: "a[href*='invoice.stripe.com']",
        info: "invoice link"
    },
    CONTAINER_INVOICE_DATE: {
        selector: "TODO",
        info: "invoice date"
    },
    CONTAINER_INVOICE_AMOUNT: {
        selector: "TODO",
        info: "invoice amount"
    },

    //HOSTED INVOICE PAGE

    // Downloading is triggered in JavaScript, there is no PDF URL to follow.
    // Beware of the neighbouring "download receipt" button.
    BUTTON_DOWNLOAD: {
        selector: "TODO",
        info: "download invoice button"
    }
}

/**
 * Date layouts the Stripe portal renders, since it follows the browser locale
 * and the app serves `en` and `fr`: "18 août 2026", "18 juil. 2026",
 * "August 18, 2026" and "Aug 18, 2026".
 */
export const DATE_FORMATS = ["d MMMM yyyy", "d MMM yyyy", "MMMM d',' yyyy", "MMM d',' yyyy"];

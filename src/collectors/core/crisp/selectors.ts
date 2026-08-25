export const CrispSelectors = {

    //LOGIN PAGE

    // The `id` attributes of the login form are UUIDs regenerated on every page
    // load, and the page contains no <form> element. Only the `name` attributes
    // are stable.
    FIELD_EMAIL: {
        selector: "input[name='email']",
        info: "email input field"
    },
    FIELD_PASSWORD: {
        selector: "input[name='password']",
        info: "password input field"
    },
    // Extends the session lifetime, which reduces the number of logins
    CHECKBOX_REMEMBER: {
        selector: "input[name='remember']",
        info: "remember me checkbox"
    },
    // The submit button is a type="button" element driven by JavaScript.
    // `c-base-button--disabled` is added while the fields are empty and is
    // therefore deliberately left out of the selector.
    BUTTON_SUBMIT: {
        selector: "button.c-base-button--blue.c-base-button--block",
        info: "submit form button"
    },

    //INVOICES PAGE

    // Presence of this container means the SPA has finished rendering
    CONTAINER_INVOICES_LIST: {
        selector: "div.c-settings-billing-invoices",
        info: "invoices list container"
    },
    CONTAINER_INVOICE: {
        selector: "div.c-settings-billing-invoices__item",
        info: "invoice container"
    },

    //INVOICE CONTAINER

    // Period label, e.g. "Aoû 2026"
    CONTAINER_INVOICE_DATE: {
        selector: "span.c-settings-billing-invoices__date",
        info: "invoice date container"
    },
    // e.g. "Total : 141.40 EUR"
    CONTAINER_INVOICE_AMOUNT: {
        selector: "span.c-settings-billing-invoices__item-meta",
        info: "invoice amount container"
    },
    // The download button has no href, the file is fetched by JavaScript
    BUTTON_INVOICE_DOWNLOAD: {
        selector: "div.c-rule-line-entity__actions button",
        info: "download invoice button"
    }
}

/**
 * Crisp uses its own month abbreviations ("Aoû", "Fév") that date-fns cannot
 * parse: its French abbreviations are "août" and "févr.". Hence this map.
 *
 * Keys are lowercase and accent free. "juin" and "juil" share the "jui"
 * prefix, so four letter keys are looked up first.
 */
export const MONTHS: { [key: string]: number } = {
    jan: 0, janv: 0,
    fev: 1, feb: 1, fevr: 1,
    mar: 2, mars: 2,
    avr: 3, apr: 3, avri: 3,
    mai: 4, may: 4,
    juin: 5, jun: 5,
    juil: 6, jul: 6,
    aou: 7, aug: 7, aout: 7,
    sep: 8, sept: 8,
    oct: 9,
    nov: 10,
    dec: 11
};

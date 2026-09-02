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

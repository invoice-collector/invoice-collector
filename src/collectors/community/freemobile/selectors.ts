export const FreeMobileSelectors = {
    //LOGIN PAGE

    FIELD_IDENTIFIER: {
        selector: "#login-username",
        info: "identifier input"
    },
    FIELD_PASSWORD: {
        selector: "#login-password",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "#auth-connect",
        info: "submit button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "div.override\\:text-status-error",
        info: "login alert container"
    },

    // 2FA PAGE

    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "div.bg-blue-50",
        info: "2fa instructions container"
    },
    CONTAINER_2FA_ALERT: {
        selector: "div.override\\:text-status-error",
        info: "2fa alert container"
    },
    FIELD_2FA_CODE: {
        selector: "input[type='number']",
        info: "2fa code input"
    },
    LABEL_SAVE_LOGIN: {
        selector: "label.group\\/checkbox",
        info: "save login checkbox"
    },
    BUTTON_2FA_SUBMIT: {
        selector: "#auth-2FA-validate",
        info: "2fa submit button"
    },
    

    // INVOICES PAGE

    BUTTON_SHOW_INVOICES: {
        selector: "button[aria-controls='invoices']",
        info: "show invoices button"
    },
    BUTTON_MORE_INVOICES: {
        selector: "#invoices button[type='button']",
        info: "more invoices button"
    },

    CONTAINER_FIRST_INVOICE: {
        selector: "#invoices div.border",
        info: "first invoice container"
    },
    CONTAINER_FIRST_INVOICE_AMOUNT: {
        selector: "p",
        info: "first invoice amount container"
    },

    CONTAINER_INVOICE: {
        selector: "#invoices li",
        info: "invoice container"
    },
    C0NTAINER_INVOICE_LINK: {
        selector: "a.group\\/link",
        info: "invoice link container"
    },
    CONTAINER_INVOICE_DATE: {
        selector: "h3",
        info: "invoice date container"
    },
    CONTAINER_INVOICE_AMOUNT: {
        selector: "span",
        info: "invoice amount container"
    }
}

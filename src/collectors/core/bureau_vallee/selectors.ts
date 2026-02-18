export const BureauValleeSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: ".modal-inner-wrap button.-decline",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: ".modal-inner-wrap button.-allow",
        info: "accept cookies button"
    },

    // LOGIN PAGE

    FIELD_EMAIL: {
        selector: "#inputText-id-email",
        info: "email input"
    },
    BUTTON_CONTINUE: {
        selector: "button[type='submit']",
        info: "continue login button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "#inputText-id-email-error",
        info: "login alert container"
    },
    CONTAINER_PASSWORD_STRENGTH: {
        selector: "div.c-passwordStrength",
        info: "password strength container"
    },
    FIELD_PASSWORD: {
        selector: "#inputText-id-password",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "button[type='submit']",
        info: "submit button"
    },
    CONTAINER_PASSWORD_ALERT: {
        selector: "#inputText-id-password-error",
        info: "password alert container"
    },

    // HOME PAGE

    CONTAINER_PROFIL: {
        selector: "a.c-icon-compte-client",
        info: "profile container"
    },

    // INVOICES PAGE

    CONTAINER_NO_INVOICE: {
        selector: "div.c-accountCard__content img[src*='aucune-facture']",
        info: "no invoice container"
    },
    CONTAINER_INVOICE: {
        selector: ".c-orderInvoice__table tbody tr",
        info: "invoice container"
    },
    CONTAINER_INVOICE_DATE: {
        selector: "td:nth-of-type(1) strong",
        info: "invoice date container"
    },
    CONTAINER_INVOICE_AMOUNT: {
        selector: "td:nth-of-type(3) .price",
        info: "invoice amount container"
    },
    BUTTON_INVOICE_DOWNLOAD: {
        selector: "td:nth-of-type(4) a",
        info: "invoice download button"
    }
}

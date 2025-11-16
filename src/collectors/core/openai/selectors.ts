export const OpenaiSelectors = {
    //LOGIN PAGE

    BUTTON_LOGIN_OR_OUPS: {
        selector: "button[data-color='primary'][data-variant='soft'], .onb-homepage-link",
        info: "login button"
    },
    FIELD_EMAIL: {
        selector: "input[autocomplete='email']",
        info: "login input field"
    },
    BUTTON_EMAIL_CONTINUE: {
        selector: "button[type='submit']",
        info: "continue button"
    },
    CONTAINER_EMAIL_ERROR: {
        selector: "form ul li",
        info: "email error container"
    },
    FIELD_PASSWORD: {
        selector: "input[autocomplete='current-password']",
        info: "password input field"
    },
    BUTTON_PASSWORD_CONTINUE: {
        selector: "button[type='submit']",
        info: "submit form button"
    },
    CONTAINER_PASSWORD_ERROR: {
        selector: "form ul li",
        info: "password error container"
    },

    // 2FA PAGE

    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "body > div > div > div > div > span",
        info: "2FA instructions container"
    },
    FIELD_2FA_CODE: {
        selector: "input[autocomplete='one-time-code']",
        info: "2FA code input field"
    },
    BUTTON_2FA_CONTINUE: {
        selector: "button[type='submit']",
        info: "2FA code continue button"
    },
    CONTAINER_2FA_ERROR: {
        selector: "form ul li",
        info: "2FA error container"
    },

    // HOME PAGE

    BUTTON_BILLING: {
        selector: "a[href='/settings/organization/billing']",
        info: "billing button"
    },

    // CONTAINER INVOICE

    CONTAINER_NO_INVOICE: {
        selector: "main > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)",
        info: "no invoice container"
    },
    CONTAINER_INVOICE: {
        selector: "table tbody tr",
        info: "invoice container"
    },
    CONTAINER_ID: {
        selector: "td:nth-child(1)",
        info: "invoice id container"
    },
    CONTAINER_AMOUNT: {
        selector: "td:nth-child(3)",
        info: "invoice amount container"
    },
    CONTAINER_DATE: {
        selector: "td:nth-child(4)",
        info: "invoice date container"
    },
    BUTTON_VIEW: {
        selector: "td:nth-child(5) a",
        info: "invoice date container"
    },

    // DOWNLOAD PAGE

    BUTTON_DOWNLOAD: {
        selector: "button[data-testid='download-invoice-receipt-pdf-button']",
        info: "invoice date container"
    }
}

export const OrangeSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "span.didomi-continue-without-agreeing",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#didomi-notice-agree-button",
        info: "accept cookies button"
    },

    // LOGIN PAGE

    FIELD_EMAIL: {
        selector: "#login:not([aria-hidden])",
        info: "email input"
    },
    BUTTON_CONTINUE: {
        selector: "#btnSubmit",
        info: "continue button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "#login-invalid-feedback",
        info: "login alert container"
    },
    BUTTON_PASSWORD_OPTION: {
        selector: "button[data-oevent-label='sidentifier_sans_mc']",
        info: "password authentication option button"
    },
    FIELD_PASSWORD: {
        selector: "#password",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "#btnSubmit",
        info: "submit button"
    },
    CONTAINER_PASSWORD_ALERT: {
        selector: "#password-invalid-feedback",
        info: "password alert container"
    },
    BUTTON_SKIP_2FA: {
        selector: "button[data-testid='link-aba-later']",
        info: "skip 2FA button"
    },

    // SELECT CONTRACT PAGE

    CONTAINER_CONTRACT_ERROR: {
        selector: ".alert .ob1-alert-title",
        info: "contract error container"
    },
    CONTAINER_FIRST_CONTRACT: {
        selector: "ecm-selector-contract > div > div li:first-of-type > ecm-mat-item-list > a",
        info: "first contract container"
    },
    CONTAINER_FIRST_CONTRACT_PRO: {
        selector: "mikado-hub-contracts-page li:first-of-type > mikado-item-list-button > a",
        info: "first pro contract container"
    },

    // INVOICE PAGE

    CONTAINER_INVOICE: {
        selector: "bills-history-table tbody tr",
        info: "invoice container"
    },
    BUTTON_PDF: {
        selector: "a.bp-downloadIcon",
        info: "invoice PDF download button"
    },
    CONTAINER_DATE: {
        selector: ".bp-dateColumn span",
        info: "invoice date container"
    },
    CONTAINER_AMOUNT: {
        selector: ".bp-amountColumn span",
        info: "invoice amount container"
    },

    // DOWNLOAD PAGE

    CONTAINER_VPN_ERROR: {
        selector: "ecm-layout-container .feedback .feedback-text:nth-of-type(1)",
        info: "VPN error container"
    },
    BUTTON_PDF_DOWNLOAD: {
        selector: "div:has(> #modal-basic-title) button",
        info: "PDF download button"
    }
}

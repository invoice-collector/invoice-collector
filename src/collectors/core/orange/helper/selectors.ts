export const OrangeHelperSelectors = {

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

    // NEED2FA

    BUTTON_AUTHENTICATE_MOBILE_CONNECT: {
        selector: "#btnSubmit[data-testid='submit-mc']",
        info: "mobile connect button"
    },
    CONTAINER_MOBILE_CONNECT_INSTRUCTION: {
        selector: ".text-start",
        info: "mobile connect instruction container"
    },

    // FOR EACH PAGE

    CONTAINER_OFFERS_ORANGE: {
        selector: "ecm-selector-contract > div > div > div > div > ul > li > ecm-mat-item-list:has(img[src*='logo-orange'])",
        info: "container offers for Orange"
    },
    CONTAINER_OFFERS_SOSH: {
        selector: "ecm-selector-contract > div > div > div > div > ul > li > ecm-mat-item-list:has(span.icon-device-smart-phone)",
        info: "container offers for Sosh"
    },

    // GET INVOICES

    CONTAINER_INVOICE: {
        selector: "bills-history-table tbody tr",
        info: "invoice container"
    },

    // DATA

    
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
    }
}
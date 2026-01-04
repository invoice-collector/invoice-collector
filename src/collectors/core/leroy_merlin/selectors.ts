export const LeroyMerlinSelectors = {
    
    // MAIN PAGE

    BUTTON_REFUSE_COOKIES: {
        selector: "#onetrust-reject-all-handler",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#onetrust-accept-btn-handler",
        info: "accept cookies button"
    },
    BUTTON_CLOSE_SHOP_CHOOSER: {
        selector: "div.is-open .mc-layer__header button",
        info: "close shop chooser button"
    },
    BUTTON_LOGIN_PAGE: {
        selector: "#component-customerheadermodule",
        info: "login page button"
    },

    //LOGIN PAGE
    
    INPUT_EMAIL: {
        selector: "form#js-email-form input",
        info: "login input"
    },
    BUTTON_LOGIN_CONTINUE: {
        selector: "form#js-email-form button span",
        info: "continue button"
    },
    CONTAINER_EMAIL_ERROR: {
        selector: "form#js-email-form span.js-form-error",
        info: "email error container"
    },
    INPUT_PASSWORD: {
        selector: "form#js-password-form input[type='password']",
        info: "password input"
    },
    BUTTON_PASSWORD_CONTINUE: {
        selector: "form#js-password-form button[type='submit']",
        info: "continue button"
    },
    CONTAINER_PASSWORD_ERROR: {
        selector: "form#js-password-form span.js-form-error",
        info: "password error container"
    },
    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "#page_mfa_rba p.explanation-code",
        info: "2fa authentication instructions container"
    },
    INPUT_2FA: {
        selector: "#verification-code-digits input:nth-child(1)",
        info: "2fa authentication input"
    },
    CONTAINER_2FA_ERROR: {
        selector: ".error-message",
        info: "2fa authentication error container"
    },

    // ORDER PAGE

    CONTAINER_ORDER: {
        selector: "div.order-list > section > div.order-summary",
        info: "order container"
    },
    CONTAINER_ORDER_ID: {
        selector: "span.order-summary__subtitle-order-number",
        info: "order id container"
    },
    CONTAINER_ORDER_DATE: {
        selector: "::-p-xpath(../h2)",
        info: "order date container"
    },
    CONTAINER_ORDER_AMOUNT: {
        selector: ".order-summary__total-amount",
        info: "order amount container"
    },

    // DOWNLOAD

    BUTTON_ORDER_DETAILS: {
        selector: "button.order-summary__link",
        info: "order details button"
    },
    BUTTON_DOWNLOAD: {
        selector: "#download-button",
        info: "download button"
    },
    BUTTON_DOWNLOAD_INVOICES: {
        selector: "#invoices-download-button",
        info: "invoices download button"
    },
    CONTAINER_DOWNLOAD_ERROR: {
        selector: ".mc-notification__content .mc-notification__message",
        info: "download error container"
    }
}

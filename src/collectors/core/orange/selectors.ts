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
        selector: "#login",
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

    // INVOICE PAGE

    CONTAINER_INVOICE: {
        selector: "#bill-archive > ul > li",
        info: "invoice container"
    },
    BUTTON_DOWNLOAD: {
        selector: "li .item-list-button-label",
        info: "download button"
    },
    CONTAINER_DATE: {
        selector: "li .item-list-button-label",
        info: "invoice date container"
    },
    CONTAINER_AMOUNT: {
        selector: "mikado-bill-amount span[data-test='amount']",
        info: "invoice amount container"
    }
}

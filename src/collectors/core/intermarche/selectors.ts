export const IntermarcheSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "span.didomi-continue-without-agreeing",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#didomi-notice-agree-button",
        info: "accept cookies button"
    },

    // HOME PAGE

    BUTTON_LOGIN: {
        selector: "button[data-test-id='btn-header-no-pdv-no-user-connect']",
        info: "login button"
    },
    BUTTON_CONNECT_WITH_EMAIL: {
        selector: "button[data-test-auto='connectWithEmailBtn']",
        info: "connect with email button"
    },

    //LOGIN PAGE

    CONTAINER_FORM: {
        selector: "#kc-form-inner",
        info: "login form"
    },
    CONTAINER_ERROR_EMAIL: {
        selector: "#error-email:not(.hidden)",
        info: "email error"
    },
    CONTAINER_ERROR_PASSWORD: {
        selector: "#error-label:not(.hidden)",
        info: "password error"
    },
}

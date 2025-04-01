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

    //LOGIN PAGE

    CONTAINER_ERROR_EMAIL: {
        selector: "#error-email:not(.hidden)",
        info: "email error"
    },
    CONTAINER_ERROR_PASSWORD: {
        selector: "#error-label:not(.hidden)",
        info: "password error"
    },
}

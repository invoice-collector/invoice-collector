export const LeclercSelectors = {
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

    FIELD_EMAIL: {
        selector: "#email",
        info: "login input field"
    },
    BUTTON_CONTINUE: {
        selector: "#btn-wrapper-loader > button[type='submit']",
        info: "next button field"
    },
    CONTAINER_EMAIL_ERROR: {
        selector: "#email-error",
        info: "email error container"
    },
    CONTAINER_SIGNUP: {
        selector: "#profile-form[action='preSignup']",
        info: "signup container"
    },
    FIELD_PASSWORD: {
        selector: "#password",
        info: "password input field"
    },
    CHECKBOX_STAY_CONNECTED: {
        selector: "#stayConnected",
        info: "stay connected checkbox"
    },
    BUTTON_LOGIN: {
        selector: "#btn-signin-loader > button[type='submit']",
        info: "next button field"
    },
    CONTAINER_PASSWORD_ERROR: {
        selector: ".toast-container span.toast__message",
        info: "password error field"
    }
}

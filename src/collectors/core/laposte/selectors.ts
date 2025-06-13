export const LaposteSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "#footer_tc_privacy_button_3",
        type: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#footer_tc_privacy_button",
        type: "accept cookies button"
    },

    //LOGIN PAGE

    FIELD_EMAIL: {
        selector: "#username",
        type: "email input field"
    },
    FIELD_PASSWORD: {
        selector: "#password",
        type: "password input field"
    },
    CHECKBOX_REMEMBER_ME: {
        selector: "#rememberMe",
        type: "remember me checkbox"
    },
    BUTTON_SUBMIT: {
        selector: "#submit",
        type: "submit form button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: ".form-body .message",
        type: "login alert container"
    },
    CONTAINER_LOADED: {
        selector: "#root .menu-profile-email, #__layout .header__section__heading__username",
        type: "page elements defining that the page is loaded"
    },

    // 2FA PAGE

    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "#cnd-otp-email-form .text-info, .form .subtitle",
        type: "2fa instructions container"
    },
    INPUT_2FA_CODE: {
        selector: "#otpCode",
        type: "otp code input"
    },
    BUTTON_2FA_SUBMIT: {
        selector: "#submit",
        type: "submit 2fa button"
    },
    CONTAINER_2FA_ALERT: {
        selector: "#otp-error-message",
        type: "2fa error message container"
    },
    BUTTON_SAVE_DEVICE: {
        selector: "#save-device",
        type: "save device button"
    },

    // ORDERS PAGE

    BUTTON_DOWNLOAD: {
        selector: ".icon--editing-download",
        type: "download invoice button"
    },
}

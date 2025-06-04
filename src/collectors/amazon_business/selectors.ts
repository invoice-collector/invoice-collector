export const AmazonSelectors = {
    //LOGIN PAGE

    FIELD_EMAIL: {
        selector: "#ap_email",
        info: "login input field"
    },
    FIELD_PASSWORD: {
        selector: "#ap_password",
        info: "password input field"
    },
    BUTTON_SUBMIT: {
        selector: "#signInSubmit",
        info: "submit form button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "#auth-error-message-box div div",
        info: "login alert container"
    },

    // COMPANY SELECTION PAGE

    CONTAINER_COMPANY_SELECTION: {
        selector: "div.cvf-account-switcher-check-mark-icon-v2:not(.cvf-hidden)",
        info: "company selection container"
    },

    // 2FA PAGE
    
    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "#auth-mfa-form p, #channelDetailsForOtp span",
        info: "2fa instructions container"
    },
    FIELD_2FA_CODE: {
        selector: "#auth-mfa-otpcode, #input-box-otp",
        info: "2fa code input field"
    },
    BUTTON_2FA_DO_NOT_ASK: {
        selector: "label[for='auth-mfa-remember-device']",
        info: "do not ask again button"
    },
    BUTTON_2FA_SUBMIT: {
        selector: "#auth-signin-button, #cvf-submit-otp-button",
        info: "2fa submit button"
    },
    CONTAINER_2FA_ALERT: {
        selector: "#auth-error-message-box > div > div, #invalid-otp-code-message",
        info: "2fa alert container"
    },

    //INVOICES PAGE

    CONTAINER_ORDER: {
        selector: "#yourOrderHistorySection #orderCard #orderCardHeader",
        info: "order container"
    },
    CONTAINER_DATE: {
        selector: ".a-span2:first-of-type .a-size-base",
        info: "order date"
    },
    CONTAINER_AMOUNT: {
        selector: ".a-column:nth-child(2) .a-size-base",
        info: "order amount"
    },
    CONTAINER_ID: {
        selector: "#orderIdField div",
        info: "order id"
    },
    CONTAINER_ID_LABEL: {
        selector: "#orderIdField div span",
        info: "order id label"
    }
}

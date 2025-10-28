export const AmazonSelectors = {
    //LOGIN PAGE

    BUTTON_USE_OTHER_ACCOUNT: {
        selector: "#ap_switch_account_link",
        info: "use other account button"
    },
    FIELD_EMAIL: {
        selector: "#ap_email",
        info: "login input field"
    },
    BUTTON_CONTINUE: {
        selector: "#continue",
        info: "continue button field"
    },
    FIELD_PASSWORD: {
        selector: "#ap_password",
        info: "password input field"
    },
    CHECKBOX_REMEMBER_ME: {
        selector: "input[name='rememberMe']",
        info: "remember me checkbox"
    },
    BUTTON_SUBMIT: {
        selector: "#signInSubmit",
        info: "submit form button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "div[id='auth-email-invalid-claim-alert'][style*='block'] div[class='a-alert-content'], div[id='auth-error-message-box'] div[class='a-alert-content']",
        info: "login alert container"
    },
    CONTAINER_PASSWORD_ALERT: {
        selector: "#auth-error-message-box .a-alert-content",
        info: "password alert container"
    },
    CONTAINER_CAPTCHA: {
        selector: "img[alt='captcha'], #captcha-container",
        info: "captcha container"
    },

    // 2FA PAGE
    
    BUTTON_2FA_METHOD: {
        selector: "#auth-select-device-form .a-button",
        info: "2fa method button"
    },    
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

    // ORDER PAGE

    CONTAINER_LANGUAGE: {
        selector: "#icp-nav-flyout div",
        info: "language container"
    },
    BUTTON_PAGE: {
        selector: ".a-pagination li.a-normal a",
        info: "other page button"
    },
    CONTAINER_ORDER: {
        selector: ".order-card .order-header:has(li.yohtmlc-order-level-connections a)",
        info: "order container"
    },
    CONTAINER_ORDER_DATE: {
        selector: ".a-col-left div.a-column:nth-child(1) div:last-of-type span",
        info: "order date"
    },
    CONTAINER_ORDER_AMOUNT: {
        selector: ".a-col-left div.a-column:nth-child(2) div:last-of-type span",
        info: "order amount"
    },
    CONTAINER_ORDER_ID: {
        selector: ".a-col-right div.yohtmlc-order-id span:last-child",
        info: "order id"
    },
    CONTAINER_DOCUMENTS_LINK: {
        selector: ".a-col-right li.yohtmlc-order-level-connections span a",
        info: "order link"
    },

    // DOCUMENTS PAGE

    CONTAINER_ORDER_LINK: {
        selector: "a[href*='summary']",
        info: "order link"
    },
    CONTAINER_INVOICES: {
        selector: "a[href^='/documents/download']",
        info: "invoices link"
    }
}

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
        selector: "form#js-email-form button",
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

    // ORDER PAGE

    BUTTON_DOWNLOAD: {
        selector: "#download-button",
        info: "download button"
    }
}

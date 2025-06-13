export const CarrefourSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "#onetrust-reject-all-handler",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#onetrust-accept-btn-handler",
        info: "accept cookies button"
    },

    //LOGIN PAGE

    FIELD_EMAIL: {
        selector: "#idToken1",
        info: "email input"
    },
    FIELD_PASSWORD: {
        selector: "#idToken2",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "#loginButton_0:not([disabled])",
        info: "submit button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "#validation-message-0:not([style*='hidden']), #error-message-pwd:not([style*='hidden'])",
        info: "login alert container"
    },

    // 2FA PAGE

    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "#carrefourHOTP2Form div:not(.hide) > div > p:first-child",
        info: "2fa instructions container"
    },
    CONTAINER_2FA_ALERT: {
        selector: "#errormsg:not(.hide)",
        info: "2fa alert container"
    },
    FIELD_2FA_CODE_0: {
        selector: "#ff_118_0",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_1: {
        selector: "#ff_118_1",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_2: {
        selector: "#ff_118_2",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_3: {
        selector: "#ff_118_3",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_4: {
        selector: "#ff_118_4",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_5: {
        selector: "#ff_118_5",
        info: "2fa code input"
    },


    // ORDERS PAGE

    CONTAINER_ORDER: {
        selector: ".online-order-item__wrapper",
        info: "order container"
    },
    CONTAINER_LINK: {
        selector: ".order-item__summary .order-item__footer a",
        info: "order link container"
    },
    CONTAINER_ORDER_DATE: {
        selector: ".order-item__date",
        info: "order date container"
    },
    CONTAINER_ORDER_AMOUNT: {
        selector: ".order-item__summary .order-item__footer p",
        info: "order amount container"
    },
}

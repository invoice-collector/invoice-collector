export const EnsapSelectors = {
    //LOGIN PAGE

    FIELD_IDENTIFIER: {
        selector: "input[name='nir']",
        info: "identifier input"
    },
    FIELD_PASSWORD: {
        selector: "input[name='password']",
        info: "password input"
    },
    FIELD_CAPTCHA: {
        selector: "input[name='captcha']",
        info: "captcha input"
    },
    BUTTON_SUBMIT: {
        selector: "#button-connect",
        info: "submit button"
    },
    CONTAINER_LOGIN_VALIDATION: {
        selector: "ensap-validation-feedback[type='error']",
        info: "login validation container"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "p.alert.alert-danger",
        info: "login alert container"
    }
}
